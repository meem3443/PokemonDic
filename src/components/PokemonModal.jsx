import React, { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../../src/context/pokemonContext";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 80%;
  max-width: 500px;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
`;

const Name = styled.h2`
  margin-bottom: 5px;
  color: #333;
`;

const Number = styled.p`
  color: #777;
  margin-bottom: 10px;
`;

const Types = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  margin-bottom: 15px;
`;

const Type = styled.span`
  background-color: #e0e0e0;
  color: #555;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.9em;
`;

const Description = styled.p`
  color: #666;
  font-size: 1em;
  margin-bottom: 15px;
`;

const CloseButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  font-size: 0.9em;

  &:hover {
    background-color: #d32f2f;
  }
`;

function PokemonModal() {
  const { isModalOpen, selectedPokemonForModal, handleCloseModal } =
    useContext(PokemonContext);

  if (!isModalOpen || !selectedPokemonForModal) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleCloseModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Img
          src={selectedPokemonForModal.img_url}
          alt={selectedPokemonForModal.korean_name}
        />
        <Name>{selectedPokemonForModal.korean_name}</Name>
        <Number>No. {selectedPokemonForModal.id}</Number>
        <Types>
          {selectedPokemonForModal.types.map((type, index) => (
            <Type key={index}>{type}</Type>
          ))}
        </Types>
        {selectedPokemonForModal.description && (
          <Description>{selectedPokemonForModal.description}</Description>
        )}
        <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default PokemonModal;
