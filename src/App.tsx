import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "pages/home";
import CountryDetails from "pages/countryDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path=":name" element={<CountryDetails />} />
      </Route>

      {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
};

export default App;
