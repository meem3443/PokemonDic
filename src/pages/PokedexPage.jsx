import React, { useState } from "react";
import styled from "styled-components";
import MyPokemonTitle from "../components/MyPokemonTitle";
import SelectedPokemon from "../components/SelectedPokemonList";
import PokemonList from "../components/PokemonList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`;

const SectionContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
  background-color: #f2f2f2;
  width: 90%;
  padding: 20px;
  border-radius: 10px;
`;

const SectionContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  width: 70%;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

function PokedexPage() {
  const [selectedPokemons, setSelectedPokemons] = useState(Array(6).fill(null));
  const MAX_POKEMONS = 6;

  const handlePokemonSelect = (pokemon) => {
    // 이미 선택된 포켓몬인지 확인
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
      alert(`최대 ${MAX_POKEMONS}마리까지만 선택할 수 있습니다.`);
    }
  };

  const handleDeletePokemon = (index) => {
    const updatedPokemons = [...selectedPokemons];
    updatedPokemons[index] = null;
    setSelectedPokemons(updatedPokemons);
  };

  return (
    <Container>
      <SectionContainer1>
        <MyPokemonTitle />
        <SelectedPokemon
          pokemons={selectedPokemons}
          onDeletePokemon={handleDeletePokemon}
        />
      </SectionContainer1>
      <SectionContainer2>
        <PokemonList onPokemonSelect={handlePokemonSelect} />
      </SectionContainer2>
    </Container>
  );
}

export default PokedexPage;
