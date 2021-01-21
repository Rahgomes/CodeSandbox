import React from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Main from "./Components/Layout/Main";
import { LayoutStorage } from "./LayoutContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import Sobre from "./Paginas/Sobre";
import Contato from "./Paginas/Contato";

function App() {
  return (
    <LayoutStorage>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </LayoutStorage>
  );
}

export default App;
