import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Reset.css";
import "./App.css";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/Home";
import Sobre from "./Components/Pages/Sobre";
import Fanz from "./Components/Pages/Fanz";
import Contato from "./Components/Pages/Contato";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="fanz" element={<Fanz />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
