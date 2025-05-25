import React from "react";
//import "./MainSection.css"; // 필요하다면 스타일링
import pokemonLogo from "../../src/assets/pokemonLogo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LogoImage = styled.img`
  width: 50%;
  height: auto;
`;

function MainSection() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/pokedex"); // '/pokedex' 경로로 이동
  };

  return (
    <div className="main-section">
      <LogoImage src={pokemonLogo} alt="포켓몬 로고"></LogoImage>
      <button className="start-button" onClick={handleStartClick}>
        포켓몬 도감 시작하기
      </button>
    </div>
  );
}

export default MainSection;
