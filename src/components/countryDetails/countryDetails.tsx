import { useLocation } from "react-router-dom";
import { CountryInterface } from "interface";
import { UseQueryResult, useQuery } from "react-query";
import { getCountryDetails } from "requests";
import { _formatNumber } from "utils";
import { CountryDetailsSkeleton } from "..";
import { CountryDetailsItem } from ".";

export const CountryDetailsComponent = () => {
  const location = useLocation();

  const countryName = location?.pathname?.slice(1);

  const {
    isLoading: countryLoading,
    data: countryData,
  }: UseQueryResult<CountryInterface[], Error> = useQuery({
    queryKey: ["getCountryDetails", countryName],
    queryFn: () =>
      getCountryDetails({
        name: countryName,
      }),
    refetchOnWindowFocus: false,
  });

  return (
    <div className="">
      {countryLoading ? (
        <CountryDetailsSkeleton />
      ) : (
        countryData?.map((data: CountryInterface, i: number) => (
          <CountryDetailsItem key={i} data={data} />
        ))
      )}
    </div>
  );
};
