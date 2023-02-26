import { ReactNode } from "react";

export * from "./theme.interface";

export interface ChildrenProp {
  children?: ReactNode;
}

export interface CountryInterface {
  altSpellings?: any[];
  name: { common: string; nativeName: object; official: string };
  population: number;
  capital: string;
  region: string;
  flags: { svg: string; png: string };
}

export type RegionProps =
  | "africa"
  | "america"
  | "asia"
  | "europe"
  | "oceania"
  | null;
