import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./services/pokestore";

import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./Home";
import Pokedex from "./Pokedex";
import Details from "./Details";

function App() {
  return (
    <Provider store={store}>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/details/:pokemonId" element={<Details />} />
      </Routes>
    </BrowserRouter>
    </Provider>

  );
}

export default App;
