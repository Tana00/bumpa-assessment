import { ReactNode } from "react";

export * from "./theme.interface";

export interface ChildrenProp {
  children?: ReactNode;
}

export interface CountryInterface {
  altSpellings?: any[];
  name: {
    common: string;
    nativeName: { swe: { official: string; common: string } };
    official: string;
  };
  population: number;
  capital: string;
  region: string;
  flags: { svg: string; png: string };
  currencies?: any;
  languages?: any;
  independent?: boolean;
  coatOfArms?: { png: string; svg: string };
  subregion?: string;
  timezones: any[string];
  maps?: { googleMaps: string; openStreetMaps: string };
}

export type RegionProps =
  | "africa"
  | "america"
  | "asia"
  | "europe"
  | "oceania"
  | null;
