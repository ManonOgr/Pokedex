import { useState } from "react";
import { useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Navbar  from "./components/Navbar";
import Card from "./components/Cards";
import {SearchPoke} from "./components/Search";

import pokelike from "./images/pokeball.png";
import pokedislike from "./images/pokeballnb.png"

import { usePokemons } from "./services/pokemon";

function Home() {
  const [count, setCount] = useState(0);
  const pokemons = usePokemons();
  const state = useSelector(state=>state.slicelike)

let currentball = pokedislike;

console.log('state = ', state)

function seeball(pokename){
if (state.find((value) => value.name === pokename) === undefined) {
  return currentball = pokedislike
}else{
  return currentball = pokelike
}
}
  return (
    <div className="App">
      <Navbar />
      <SearchPoke />
      <div className="containerCard">
        {pokemons.map((pokemon, i) => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            number={i + 1}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              i + 1
            }.png`}
            currentball={seeball(pokemon.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
