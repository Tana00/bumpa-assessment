import ThemeProviderWrapper from "contexts";
import { FirstComponent, ToggleDarkMode } from "components";
import "./App.css";

function App() {
  return (
    <ThemeProviderWrapper>
      <FirstComponent />
      <ToggleDarkMode />
    </ThemeProviderWrapper>
  );
}

export default App;
