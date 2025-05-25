import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState(Array(6).fill(null));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemonForModal, setSelectedPokemonForModal] = useState(null);

  const handlePokemonSelect = (pokemon) => {
    const isAlreadySelected = selectedPokemons.some(
      (selected) => selected && selected.id === pokemon.id
    );

    if (isAlreadySelected) {
      alert(`${pokemon.korean_name}은 이미 선택되었습니다.`);
      return;
    }

    const updatedPokemons = [...selectedPokemons];
    const firstEmptySlotIndex = updatedPokemons.findIndex((p) => p === null);

    if (firstEmptySlotIndex !== -1) {
      updatedPokemons[firstEmptySlotIndex] = pokemon;
      setSelectedPokemons(updatedPokemons);
    } else {
      alert(`최대 6마리까지만 선택할 수 있습니다.`);
    }
  };

  const handleDeletePokemon = (index) => {
    const updatedPokemons = [...selectedPokemons];
    updatedPokemons[index] = null;
    setSelectedPokemons(updatedPokemons);
  };

  const handleCardClick = (pokemon) => {
    setSelectedPokemonForModal(pokemon);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPokemonForModal(null);
  };

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemons,
        handlePokemonSelect,
        handleDeletePokemon,
        isModalOpen,
        selectedPokemonForModal,
        handleCardClick,
        handleCloseModal,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
