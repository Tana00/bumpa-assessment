import { ChangeEvent, useEffect, useState } from "react";
import { UseQueryResult, useQuery } from "react-query";
import ThemeProviderWrapper from "contexts";
import { getAllCountries } from "requests";
import {
  Card,
  Master,
  SearchBar,
  FilterDropdown,
  EmptyState,
} from "components";
import { useDebounce, useGetAllCountries } from "hooks";
import { CountryInterface, RegionProps } from "interface";
import { filterOptions } from "utils";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<RegionProps>(null);
  const [type, setType] = useState<"all" | "region" | "name">("all");
  const [allCountries, setAllCountries] = useState<CountryInterface[]>([]);
  const [isError, setIsError] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const handleRegionChange = (region: RegionProps) => {
    setSelectedRegion(region);
    setType("region");
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setType("name");
    setSearchTerm(value);
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 1000, 3);

  const {
    isLoading: allCountriesLoading,
  }: UseQueryResult<CountryInterface[], Error> = useQuery({
    queryKey: ["getAllCountries", selectedRegion, debouncedSearchTerm],
    queryFn: () =>
      getAllCountries({
        type,
        region: selectedRegion && selectedRegion,
        name: debouncedSearchTerm && debouncedSearchTerm,
      }),
    onSuccess(data) {
      setSearchTerm("");
      setAllCountries(data);
    },
    onError(err) {
      setIsError(true);
    },
    onSettled(data, error) {
      // @ts-ignore
      if (data?.response || error) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    },
    refetchOnWindowFocus: false,
  });

  const { isLoading, data } = useGetAllCountries({ refetch });

  useEffect(() => {
    setIsError(false);
    return setAllCountries(data);
  }, [isLoading]);

  return (
    <ThemeProviderWrapper>
      <Master>
        <div className="mt-10">
          <div className="sm:flex w-full items-center justify-between space-y-4 sm:space-y-0">
            <SearchBar
              placeholder="Search for a country..."
              onChange={handleSearch}
              value={searchTerm}
            />
            <FilterDropdown
              options={filterOptions}
              label="Filter by Region"
              selectedValue={selectedRegion}
              onChange={handleRegionChange}
            />
          </div>
          {isError ? (
            <EmptyState handleRefetch={() => setRefetch(true)} />
          ) : (
            <Card
              onClick={() => {}}
              // @ts-ignore
              item={allCountries}
              loading={allCountriesLoading || isLoading}
            />
          )}
        </div>
      </Master>
    </ThemeProviderWrapper>
  );
}

export default App;
