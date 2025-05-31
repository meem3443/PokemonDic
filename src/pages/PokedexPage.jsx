import React from "react";
import styled from "styled-components";
import MyPokemonTitle from "../components/MyPokemonTitle";
import SelectedPokemon from "../components/SelectedPokemonList";
import PokemonList from "../components/PokemonList";
import PokemonModal from "../components/PokemonModal";

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
  return (
    <Container>
      <SectionContainer1>
        <MyPokemonTitle />
        <SelectedPokemon />
      </SectionContainer1>
      <SectionContainer2>
        <PokemonList />
      </SectionContainer2>
      <PokemonModal />
    </Container>
  );
}

export default PokedexPage;
