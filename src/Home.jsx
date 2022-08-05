import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Navbar } from "./components/Navbar";
import Card from "./components/Cards";
import {SearchPoke} from "./components/Search";


import { usePokemons } from "./services/pokemon";

function Home() {
  const [count, setCount] = useState(0);
  const pokemons = usePokemons();

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
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
