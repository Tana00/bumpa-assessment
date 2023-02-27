import { RegionProps } from "interface";
import { countryService } from "services";

interface Props {
  type: "all" | "region" | "name";
  region?: RegionProps;
  name?: string;
}

/** Fetch All Countries. The React-Query key is "getAllCountries" */
export const getAllCountries = async ({ type, region, name }: Props) => {
  const res = await countryService.get(
    `${type}${region !== null ? `/${region}` : ""}${
      name !== "" ? `/${name}` : ""
    }?fields=name,flags,population,region,capital`
  );
  return res;
};

/** Fetch Country by Region. The React-Query key is "getCountryByRegion" */
export const getCountryByRegion = async ({ region }: { region: string }) => {
  const res = await countryService.get(
    `region/${region}?fields=name,flags,population,region,capital`
  );
  return res;
};
