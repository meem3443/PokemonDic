import React, { useContext } from "react";
import styled from "styled-components";
import pokeballImage from "../../src/assets/pokeball.png";
import { PokemonContext } from "../../src/context/pokemonContext";

const ListContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  width: 90%;
  margin-top: 10px;
  justify-content: center;
`;

const PokemonItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px;
  width: 120px; /* 적절한 너비 설정 */
  flex-shrink: 0; /* 스크롤 시 줄어들지 않도록 */
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 3px;
  color: black;
`;

const Number = styled.p`
  color: black;
  font-size: 0.8em;
  margin-bottom: 3px;
`;

const Types = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 5px;
`;

const Type = styled.span`
  background-color: #f0f0f0;
  color: #555;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 0.7em;
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 8px;
  cursor: pointer;
  font-size: 0.8em;

  &:hover {
    background-color: #e04040;
  }
`;

function SelectedPokemonList() {
  const { selectedPokemons, handleDeletePokemon } = useContext(PokemonContext);

  return (
    <ListContainer>
      {selectedPokemons.map((pokemon, index) => (
        <PokemonItem key={index}>
          <Img
            src={pokemon ? pokemon.img_url : pokeballImage}
            alt={pokemon ? pokemon.korean_name : "빈 슬롯"}
          />
          {pokemon && (
            <>
              <Name>{pokemon.korean_name}</Name>
              <Number>No. {pokemon.id}</Number>
              {pokemon.types && (
                <Types>
                  {pokemon.types.map((type, typeIndex) => (
                    <Type key={typeIndex}>{type}</Type>
                  ))}
                </Types>
              )}
              <DeleteButton onClick={() => handleDeletePokemon(index)}>
                삭제
              </DeleteButton>
            </>
          )}
        </PokemonItem>
      ))}
    </ListContainer>
  );
}

export default SelectedPokemonList;
