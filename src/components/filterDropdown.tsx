import { RegionProps } from "interface";
import { useEffect, useRef, useState } from "react";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterDropdownProps {
  options: FilterOption[];
  selectedValue: RegionProps;
  label: string;
  onChange: (value: RegionProps) => void;
}

export const FilterDropdown = ({
  options,
  selectedValue,
  label,
  onChange,
}: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: FilterOption) => {
    // @ts-ignore
    onChange(option.value);
    toggleDropdown();
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    // clear event listener on component unmount
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-left w-full sm:w-48"
      ref={dropdownRef}
    >
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-transparent shadow-sm dark:shadow-none py-4 px-4 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 focus:outline-none focus-visible:outline-none"
          id="filter-menu-button"
          onClick={toggleDropdown}
        >
          <span className="mr-2">{label}</span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 sm:w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-menu-button"
          >
            {options.map((option) => (
              <button
                key={option.value}
                className={`${
                  option.value === selectedValue
                    ? "bg-gray-100 dark:bg-gray-600"
                    : "hover:bg-gray-100 dark:hover:bg-gray-600"
                } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 w-full text-left`}
                onClick={() => handleSelectOption(option)}
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
