import { ChangeEvent, useEffect, useState } from "react";
import { UseQueryResult, useQuery, useMutation } from "react-query";
import {
  getAllCountries,
  getCountryByName,
  getCountryByRegion,
} from "requests";
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

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<RegionProps>(null);
  const [allCountries, setAllCountries] = useState<CountryInterface[]>([]);
  const [isError, setIsError] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  //   filter dropdown filtering allCountries data by region
  const handleRegionChange = (region: RegionProps) => {
    setSelectedRegion(region);
    setIsFetching(true);
    mutateGetCountriesByRegion(region);
  };

  //   searchbar input field function by country name
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    setSelectedRegion(null);
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 1000, 3);

  //   get all countries
  const {
    isLoading: allCountriesLoading,
  }: UseQueryResult<CountryInterface[], Error> = useQuery({
    queryKey: ["getAllCountries"],
    queryFn: () => getAllCountries(),
    onSuccess(data) {
      setSearchTerm("");
      setSelectedRegion(null);
      setIsFetching(false);
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

  //   get all countries filtered by region
  const { mutate: mutateGetCountriesByRegion } = useMutation(
    getCountryByRegion,
    {
      onError: () => {
        setIsError(true);
      },
      onSuccess: (data) => {
        setIsFetching(false);
        // @ts-ignore
        setAllCountries(data);
      },
      onSettled(data, error, variables, context) {
        console.log("byregion", variables, context);
        // @ts-ignore
        if (data?.response || error) {
          setIsError(true);
        } else {
          setIsError(false);
        }
      },
      retry: 0,
    }
  );

  //   get all countries filtered by name
  const { mutate: mutateGetCountriesByName } = useMutation(getCountryByName, {
    onError: () => {
      setIsError(true);
    },
    onSuccess: (data) => {
      setIsFetching(false);
      // @ts-ignore
      setAllCountries(data);
    },
    onSettled(data, error, variables, context) {
      console.log("byregion", variables, context);
      // @ts-ignore
      if (data?.response || error) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    },
    retry: 0,
  });

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsFetching(true);
      mutateGetCountriesByName(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  //   Refetch all countries data with custom hook
  const { isLoading, data } = useGetAllCountries({ refetch });

  useEffect(() => {
    setIsError(false);
    return setAllCountries(data);
  }, [isLoading]);

  return (
    <Master>
      <div className="px-10 lg:px-20 mt-10">
        <div className="sm:flex w-full items-center justify-between space-y-4 sm:space-y-0">
          <SearchBar
            placeholder="Search for a country..."
            onChange={handleSearchChange}
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
            // @ts-ignore
            item={allCountries}
            loading={allCountriesLoading || isLoading || isFetching}
          />
        )}
      </div>
    </Master>
  );
}

export default Home;
