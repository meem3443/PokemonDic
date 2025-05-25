import React, { useState } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { MOCK_DATA } from "../assets/mock";
import PokemonModal from "./PokemonModal";

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
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPokemon(null);
  };

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
          onCardClick={handleCardClick} // 클릭 이벤트 핸들러 전달
        />
      ))}
      {isModalOpen && (
        <PokemonModal pokemon={selectedPokemon} onClose={handleCloseModal} />
      )}
    </ListContainer>
  );
}

export default PokemonList;
