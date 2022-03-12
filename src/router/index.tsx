import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Clientes } from "../pages";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<Clientes />} />
    </Routes>
  );
};

export default Router;
