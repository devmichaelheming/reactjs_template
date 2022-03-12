import React from "react";
import { Link } from "react-router-dom";

import S from "./styles";

const Clientes: React.FC = () => {
  return (
    <S.Container>
      <h1>Clientes</h1>
      <Link to="/">Ir para a página home</Link>
    </S.Container>
  );
};

export default Clientes;
