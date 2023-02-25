import { createContext } from "react";

interface IThemeContext {
  mode: boolean;
  toggleMode?: () => void;
}

const defaultState = {
  mode: false,
};

export const ThemeContext = createContext<IThemeContext>(defaultState);
