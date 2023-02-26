import ThemeProviderWrapper from "contexts";
import { Card, Master } from "components";
import "./App.css";

function App() {
  return (
    <ThemeProviderWrapper>
      <Master>
        <Card />
      </Master>
    </ThemeProviderWrapper>
  );
}

export default App;
