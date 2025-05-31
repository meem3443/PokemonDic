import "./App.css"; // 필요하다면 전역 스타일
import React from "react";
import { Routes, Route } from "react-router-dom"; // BrowserRouter 제거
import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import PokemonDetail from "./pages/PokemonDetailPage"; // 상세 페이지 컴포넌트 import
import "./App.css";
import styled from "styled-components";
import { PokemonProvider } from "./context/pokemonContext";
import { ToastContainer } from "react-toastify"; // ToastContainer import
import "react-toastify/dist/ReactToastify.css"; // 스타일 import

const AppContainer = styled.div`
  width: 100vw; /* AppContainer가 화면 전체 너비를 차지하도록 설정 */
  height: auto; /* 필요에 따라 설정 */
  overflow: hidden;
  overscroll-behavior-y: contain; /* AppContainer에 적용 */
`;

function App() {
  return (
    <PokemonProvider>
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </AppContainer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </PokemonProvider>
  );
}

export default App;
