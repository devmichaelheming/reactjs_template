import React, { useState } from "react";

interface Props {
  text: string;
}

import S from "./styles";

const Button: React.FC<Props> = ({ text }) => {
  const [clickHover, setClickHover] = useState(false);

  return (
    <S.Button
      hover={clickHover}
      type="submit"
      onClick={() => setClickHover(!clickHover)}
    >
      {text}
    </S.Button>
  );
};

export default Button;
