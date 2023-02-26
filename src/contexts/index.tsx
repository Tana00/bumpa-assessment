import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContext } from "./theme-context";
import { ChildrenProp } from "interface";

const ThemeProviderWrapper = ({ children }: ChildrenProp) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode, setMode] = useState(prefersDark);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode ? "dark" : "light",
        },
      }),
    [mode]
  );

  const toggleMode = () => {
    setMode(!mode);
  };

  useEffect(() => {
    const themeMode = () => {
      if (mode === true) {
        return "dark";
      } else {
        return "light";
      }
    };

    document.body.classList.add(themeMode());
    return () => {
      document.body.classList.remove(themeMode());
    };
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
