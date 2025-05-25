import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  margin-bottom: 20px;
  color: red;
`;

function MyPokemonTitle() {
  return <Title>나만의 포켓몬</Title>;
}

export default MyPokemonTitle;
