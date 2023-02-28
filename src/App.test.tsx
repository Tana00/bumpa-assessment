import React, { useContext } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "./matchMedia";
import { SearchBar, Header, FilterDropdown } from "components";
import { ThemeContext } from "contexts/theme-context";

test("that jest is working", () => {
  expect(true).toBeTruthy();
});

// test that the header component is rendered
test("renders the header component", () => {
  render(<Header />);

  expect(screen.getByText("Where in the world?")).toBeInTheDocument();
});

// test the searchbar dropdown component
describe("SearchBar", () => {
  test("calls the onChange handler when the input value changes", () => {
    const onChange = jest.fn();
    const inputValue = "test";

    const { getByPlaceholderText } = render(
      <SearchBar
        onChange={onChange}
        value=""
        placeholder="Search for a country..."
      />
    );
    const input = getByPlaceholderText("Search for a country...");

    fireEvent.change(input, { target: { value: inputValue } });

    expect(onChange).toHaveBeenCalledTimes(1);
    // expect(onChange).toHaveBeenCalledWith(inputValue);
  });
});

// test the filter dropdown component
describe("FilterDropdown", () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  test("displays options when button is clicked", () => {
    render(<FilterDropdown options={options} onChange={() => {}} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    options.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });

  test("calls onSelect with selected option", () => {
    const onSelectMock = jest.fn();
    render(<FilterDropdown options={options} onChange={onSelectMock} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const option = options[1];
    const optionElement = screen.getByText(option.label);
    fireEvent.click(optionElement);

    expect(onSelectMock).toHaveBeenCalledWith(option.value);
  });
});

// test themeContext default mode
describe("ThemeContext", () => {
  test("provides default state", () => {
    const ConsumerComponent = () => {
      const themeContext = useContext(ThemeContext);
      return (
        <>
          <div data-testid="mode">{themeContext.mode.toString()}</div>
          <button data-testid="toggle-button" onClick={themeContext.toggleMode}>
            Toggle
          </button>
        </>
      );
    };

    const { getByTestId } = render(<ConsumerComponent />);

    expect(getByTestId("mode")).toHaveTextContent("false");
  });
});
