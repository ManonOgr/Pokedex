import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Navbar  from "./components/Navbar";
import Card from "./components/Cards";

import { usePokemons } from "./services/pokemon";

function Pokedex() {
  return (
    <div className="App">
      <Navbar />
      <Card />
    </div>
  );
}

export default Pokedex;
