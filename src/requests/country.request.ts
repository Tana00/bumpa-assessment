import { RegionProps } from "interface";
import { countryService } from "services";

interface Props {
  type: "all" | "region" | "name";
  region?: RegionProps;
  name?: string;
}

/** Fetch All Countries. The React-Query key is "getAllCountries" */
// export const getAllCountries = async ({ type, region, name }: Props) => {
//   const res = await countryService.get(
//     `${type}${region !== null ? `/${region}` : ""}${
//       name !== "" ? `/${name}` : ""
//     }?fields=name,flags,population,region,capital`
//   );
//   return res;
// };

/** Fetch All Countries. The React-Query key is "getAllCountries" */
export const getAllCountries = async () => {
  const res = await countryService.get(
    "all?fields=name,flags,population,region,capital"
  );
  return res;
};

/** Fetch Country by Region. The React-Query key is "getCountryByRegion" */
export const getCountryByRegion = async (region: RegionProps) => {
  const res = await countryService.get(
    `region/${region}?fields=name,flags,population,region,capital`
  );
  return res;
};

/** Fetch Country by Name. The React-Query key is "getCountryByName" */
export const getCountryByName = async (name: string) => {
  const res = await countryService.get(
    `name/${name}?fields=name,flags,population,region,capital`
  );
  return res;
};

/** Fetch Country Details. The React-Query key is "getCountryDetails" */
export const getCountryDetails = async ({ name }: { name: string }) => {
  const res = await countryService.get(`name/${name}?fullText=true`);
  return res;
};

/** Fetch Country Borders by CountryCodes. The React-Query key is "getCountriesByCodes" */
export const getCountriesByCodes = async (codes: string | null) => {
  const res = await countryService.get(
    `alpha/?codes=${codes}&fields=name,flag`
  );
  return res;
};
