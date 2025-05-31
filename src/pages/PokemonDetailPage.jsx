// pages/PokemonDetail.jsx
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MOCK_DATA } from "../assets/mock";
import styled from "styled-components";
import { PokemonContext } from "../../src/context/pokemonContext";

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

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #45a049;
  }
`;

const BackButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #d32f2f;
  }
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));
  const { handlePokemonSelect } = useContext(PokemonContext);
  const navigate = useNavigate();

  if (!pokemon) {
    return <div>포켓몬 정보를 찾을 수 없습니다.</div>;
  }

  const handleAddToSelectedAndGoToList = () => {
    handlePokemonSelect(pokemon);
    navigate("/pokedex");
  };

  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <DetailContainer>
      <Title>{pokemon.korean_name}</Title>
      <Image src={pokemon.img_url} alt={pokemon.korean_name} />
      <Number>No. {pokemon.id}</Number>
      <TypesContainer>
        {pokemon.types.map((type, index) => (
          <Type key={index}>{type}</Type>
        ))}
      </TypesContainer>
      <Description>{pokemon.description}</Description>
      <ButtonContainer>
        <AddButton onClick={handleAddToSelectedAndGoToList}>
          내 포켓몬에 추가하고 목록으로
        </AddButton>
        <BackButton onClick={handleGoBack}>돌아가기</BackButton>
      </ButtonContainer>
    </DetailContainer>
  );
};

export default PokemonDetail;
