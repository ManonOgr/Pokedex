import React from "react";
import { useSelector } from "react-redux";

import "./App.css";

import { Link } from "react-router-dom";
import pokelike from "./images/pokeball.png";

import Navbar  from "./components/Navbar";
import Card from "./components/Cards";



function Pokedex() {
  const state = useSelector(state =>state.slicelike)
  return (
    <div className="App">
      <Navbar />
      <div id="containeredirect">
        <Link to={`/Home`}>
          <button className="redirecthome">
            {" "}
            <img src="https://img.icons8.com/fluency/40/000000/pokemon.png" />
            Home
          </button>
        </Link>
      </div>


      <div className="containerCard">
        {state?.map((pokemon) => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            number={pokemon.id}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
              pokemon.id
            }.svg`}
            currentball={pokelike}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Pokedex;

