import { ChangeEvent, useState } from "react";
import ThemeProviderWrapper from "contexts";
import { Card, Master, SearchBar, FilterDropdown } from "components";
import { useDebounce } from "hooks";
import "./App.css";

interface Country {
  id: number;
  name: string;
  region: string;
}

const countriesList: Country[] = [
  { id: 1, name: "America", region: "america" },
  { id: 2, name: "Asia", region: "asia" },
  { id: 3, name: "Africa", region: "africa" },
  { id: 4, name: "Europe", region: "europe" },
  { id: 5, name: "Oceania", region: "oceania" },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
  };

  const filteredCountries = selectedRegion
    ? countriesList.filter((country) => country.region === selectedRegion)
    : countriesList;

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    value?.length >= 3 && handleSearchChange(value);
  };

  const handleSearchChange = useDebounce((value: string) => {
    console.log(value);
    alert(value);
  }, 1000);

  return (
    <ThemeProviderWrapper>
      <Master>
        <div className="my-10">
          <div className="lg:flex w-full items-center justify-between">
            <SearchBar
              placeholder="Search for a country..."
              onChange={handleSearch}
              value={searchTerm}
            />
            <FilterDropdown
              options={[
                { label: "Africa", value: "africa" },
                { label: "America", value: "america" },
                { label: "Asia", value: "asia" },
                { label: "Europe", value: "europe" },
                { label: "Oceania", value: "oceania" },
              ]}
              label="Filter by Region"
              selectedValue={selectedRegion}
              onChange={handleRegionChange}
            />
          </div>
          {/* {filteredCountries?.map((country) => (
            <p>{country.name}</p>
          ))} */}
          <Card />
        </div>
      </Master>
    </ThemeProviderWrapper>
  );
}

export default App;
