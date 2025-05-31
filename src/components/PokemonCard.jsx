import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer; /* 카드 전체 클릭 가능하도록 */
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
  onCardClick,
}) {
  const handleAddButtonClick = (event) => {
    event.stopPropagation();
    if (onAddToMyPokemon) {
      onAddToMyPokemon(pokemon);
    } else {
      console.warn("onAddToMyPokemon prop이 전달되지 않았습니다.");
    }
  };

  return (
    <Card onClick={() => onCardClick(pokemon)}>
      <Img src={imageUrl} alt={name} />
      <Name>{name}</Name>
      <Number>No. {number}</Number>
      <Types>
        {types.map((type, index) => (
          <Type key={index}>{type}</Type>
        ))}
      </Types>
      <Description>{description}</Description>
      <AddButton onClick={handleAddButtonClick}>선택</AddButton>
    </Card>
  );
}

export default PokemonCard;
