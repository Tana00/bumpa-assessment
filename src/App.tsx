import { ChangeEvent, useState } from "react";
import ThemeProviderWrapper from "contexts";
import { Card, Master, SearchBar } from "components";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <ThemeProviderWrapper>
      <Master>
        <div className="my-10">
          <SearchBar
            placeholder="Search for a country..."
            onChange={handleSearch}
            value={searchTerm}
          />
          <Card />
        </div>
      </Master>
    </ThemeProviderWrapper>
  );
}

export default App;
