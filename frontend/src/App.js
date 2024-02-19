import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./global/globalStyle"

import PagesRoutes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <PagesRoutes/>
    </BrowserRouter>
  );
}

export default App;
