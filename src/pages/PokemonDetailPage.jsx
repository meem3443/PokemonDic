// pages/PokemonDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { MOCK_DATA } from "../assets/mock"; // 데이터 임포트
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  color: #333;
`;

const Number = styled.p`
  color: #777;
  margin-bottom: 15px;
`;

const TypesContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Type = styled.span`
  background-color: #e0e0e0;
  color: #555;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.9em;
`;

const Description = styled.p`
  color: #666;
  font-size: 1em;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 20px;
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));

  if (!pokemon) {
    return <div>포켓몬 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <DetailContainer>
      <Title>{pokemon.korean_name}</Title>
      <img
        src={pokemon.img_url}
        alt={pokemon.korean_name}
        style={{ width: "150px", height: "150px", marginBottom: "20px" }}
      />
      <Number>No. {pokemon.id}</Number>
      <TypesContainer>
        {pokemon.types.map((type, index) => (
          <Type key={index}>{type}</Type>
        ))}
      </TypesContainer>
      <Description>{pokemon.description}</Description>
    </DetailContainer>
  );
};

export default PokemonDetail;
