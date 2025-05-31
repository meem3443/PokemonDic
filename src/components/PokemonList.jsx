// src/components/PokemonList.jsx
import React, { useContext } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { MOCK_DATA } from "../../src/assets/mock";
import { PokemonContext } from "../../src/context/pokemonContext";
import PokemonModal from "./PokemonModal"; // 필요하다면 import 유지

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

function PokemonList() {
  const {
    handlePokemonSelect,
    handleCardClick,
    isModalOpen,
    selectedPokemonForModal,
    handleCloseModal,
  } = useContext(PokemonContext);

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
          onAddToMyPokemon={handlePokemonSelect}
          onCardClick={handleCardClick} // Context에서 가져온 페이지 이동 함수 전달
        />
      ))}
      {isModalOpen && (
        <PokemonModal
          pokemon={selectedPokemonForModal}
          onClose={handleCloseModal}
        />
      )}
    </ListContainer>
  );
}

export default PokemonList;
