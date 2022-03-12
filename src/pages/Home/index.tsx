import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import S from "./styles";

const Home: React.FC = () => {
  return (
    <S.Container>
      <h1>Home</h1>
      <Link to="/clientes">Ir para a página de clientes</Link>
      <Button text="Salvar" />
    </S.Container>
  );
};

export default Home;
