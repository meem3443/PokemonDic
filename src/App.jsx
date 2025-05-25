import "./App.css"; // 필요하다면 전역 스타일
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import "./App.css";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw; /* AppContainer가 화면 전체 너비를 차지하도록 설정 */
  height: auto; /* 필요에 따라 설정 */
  overflow: hidden;
  overscroll-behavior-y: contain; /* AppContainer에 적용 */
`;

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
