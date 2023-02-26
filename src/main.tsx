import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import ThemeProviderWrapper from "contexts";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProviderWrapper>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ThemeProviderWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
