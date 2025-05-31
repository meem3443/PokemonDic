// src/components/PokemonList.jsx
import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { MOCK_DATA } from "../assets/mock";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
  width: 90%;
  height: auto;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  padding: 20px;
`;

function PokemonList({ onPokemonSelect }) {
  return (
    <ListContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          imageUrl={pokemon.img_url}
          name={pokemon.korean_name}
          types={pokemon.types}
          number={pokemon.id}
          description={pokemon.description}
          pokemon={pokemon}
          onAddToMyPokemon={onPokemonSelect}
        />
      ))}
    </ListContainer>
  );
}

export default PokemonList;
