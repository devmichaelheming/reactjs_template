import styled from "styled-components";

interface HoverProps {
  hover: boolean;
}

const Button = styled.button<HoverProps>`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) =>
    props.hover ? "var(--secondary)" : "var(--primary)"};
  color: #fff;
`;

export default {
  Button,
};
