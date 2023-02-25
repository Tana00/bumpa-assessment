import React, { ReactNode, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContext } from "./theme-context";

interface Props {
  children?: ReactNode;
}

const ThemeProviderWrapper = ({ children }: Props) => {
  const [mode, setMode] = useState(false);

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
