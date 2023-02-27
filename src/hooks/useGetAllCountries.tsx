import { CountryInterface } from "interface";
import { UseQueryResult, useQuery } from "react-query";
import { getAllCountries } from "requests";

export const useGetAllCountries = ({ refetch }: { refetch: boolean }) => {
  const { isLoading, data }: UseQueryResult<any, Error> = useQuery({
    queryKey: ["getAllCountries", refetch],
    queryFn: () => getAllCountries(),
    refetchOnWindowFocus: false,
  });

  return { isLoading, data };
};
