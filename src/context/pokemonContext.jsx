// src/context/pokemonContext.js
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // toast 함수 import
import "react-toastify/dist/ReactToastify.css"; // 스타일 import

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState(Array(6).fill(null));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemonForModal, setSelectedPokemonForModal] = useState(null);

  const navigate = useNavigate();

  const handlePokemonSelect = (pokemon) => {
    const isAlreadySelected = selectedPokemons.some(
      (selected) => selected && selected.id === pokemon.id
    );

    if (isAlreadySelected) {
      toast.warn(`${pokemon.korean_name}은 이미 선택되었습니다.`); // 토스트 알림 표시
      return;
    }

    const updatedPokemons = [...selectedPokemons];
    const firstEmptySlotIndex = updatedPokemons.findIndex((p) => p === null);

    if (firstEmptySlotIndex !== -1) {
      updatedPokemons[firstEmptySlotIndex] = pokemon;
      setSelectedPokemons(updatedPokemons);
      toast.success(`${pokemon.korean_name}이(가) 선택되었습니다.`); // 성공 토스트
    } else {
      toast.error(`최대 6마리까지만 선택할 수 있습니다.`); // 에러 토스트
    }
  };

  const handleDeletePokemon = (index) => {
    const updatedPokemons = [...selectedPokemons];
    const removedPokemonName = selectedPokemons[index]?.korean_name;
    updatedPokemons[index] = null;
    setSelectedPokemons(updatedPokemons);
    if (removedPokemonName) {
      toast.info(`${removedPokemonName}이(가) 목록에서 제거되었습니다.`); // 정보 토스트
    }
  };

  const handleCardClick = (pokemon) => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  const handleOpenModal = (pokemon) => {
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
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};
