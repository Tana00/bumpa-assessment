import { ChangeEvent, useState } from "react";
import { UseQueryResult, useQuery } from "react-query";
import ThemeProviderWrapper from "contexts";
import { getAllCountries } from "requests";
import { Card, Master, SearchBar, FilterDropdown } from "components";
import { useDebounce } from "hooks";
import { CountryInterface, RegionProps } from "interface";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<RegionProps>(null);
  const [type, setType] = useState<"all" | "region">("all");

  const handleRegionChange = (region: RegionProps) => {
    setSelectedRegion(region);
    setType("region");
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    value?.length >= 3 && handleSearchChange(value);
  };

  const handleSearchChange = useDebounce((value: string) => {
    console.log(value);
    alert(value);
  }, 1000);

  const {
    data: allCountries,
    isLoading: allCountriesLoading,
  }: UseQueryResult<CountryInterface[], Error> = useQuery({
    queryKey: ["getAllCountries", selectedRegion],
    queryFn: () =>
      getAllCountries({
        type,
        region: selectedRegion && selectedRegion,
      }),
    refetchOnWindowFocus: false,
  });

  return (
    <ThemeProviderWrapper>
      <Master>
        <div className="my-10">
          <div className="sm:flex w-full items-center justify-between space-y-4 sm:space-y-0">
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

          <Card
            onClick={() => {}}
            // @ts-ignore
            item={allCountries}
            loading={allCountriesLoading}
          />
        </div>
      </Master>
    </ThemeProviderWrapper>
  );
}

export default App;
