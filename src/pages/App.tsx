import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "../router";
import GlobalStyles from "../styles/GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
