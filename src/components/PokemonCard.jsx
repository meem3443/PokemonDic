// src/components/PokemonCard.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  // Link 컴포넌트를 styled-components로 감싸기
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none; /* 링크 밑줄 제거 */
  color: inherit; /* 링크 색상 상속 */

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);
  }
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

const Number = styled.p`
  color: #777;
  margin-bottom: 5px;
`;

const Types = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

const Type = styled.span`
  background-color: #f0f0f0;
  color: #555;
  padding: 5px 8px;
  border-radius: 5px;
  font-size: 0.8em;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.9em;
`;
const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

function PokemonCard({
  imageUrl,
  name,
  types,
  number,
  description,
  onAddToMyPokemon,
  pokemon,
  // onCardClick prop은 이제 사용하지 않습니다.
}) {
  return (
    <Card to={`/pokemon/${pokemon.id}`}>
      {" "}
      {/* 클릭 시 해당 ID의 상세 페이지로 이동 */}
      <Img src={imageUrl} alt={name} />
      <Name>{name}</Name>
      <Number>No. {number}</Number>
      <Types>
        {types.map((type, index) => (
          <Type key={index}>{type}</Type>
        ))}
      </Types>
      <Description>{description}</Description>
      <AddButton
        onClick={(e) => {
          e.preventDefault(); // 링크 이동 막기 (선택 버튼 기능 유지)
          if (onAddToMyPokemon) {
            onAddToMyPokemon(pokemon);
          }
        }}
      >
        선택
      </AddButton>
    </Card>
  );
}

export default PokemonCard;
