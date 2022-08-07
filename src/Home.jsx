import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Navbar  from "./components/Navbar";
import Card from "./components/Cards";
import SearchPoke from "./components/Search";

import pokelike from "./images/pokeball.png";
import pokedislike from "./images/pokeballnb.png"

import {usePokemons} from "./services/pokemon";

function Home() {
  
  const pokemon = usePokemons();
  const state = useSelector(state=>state.slicelike)
  const [filtretab, setfiltretab] = useState([]);
  const valuesearchbar = useRef(null);
  const [pokemons, setpokemons] = useState([]);

console.log(pokemons)

let currentball = pokedislike;

console.log('state = ', state)

function seeball(pokename){
if (state.find((value) => value.name === pokename) === undefined) {
  return currentball = pokedislike
}else{
  return currentball = pokelike
}
}

const filter = () => {
  if (valuesearchbar.current !== null) {
    let filtredpoke = filtretab.filter((element) => {
      return element.name.toLowerCase().includes(valuesearchbar.current.value)
    });
setpokemons(filtredpoke)
  }
  if (valuesearchbar.current.value === "") {
    setpokemons(filtretab);
  }
}

useEffect(()=>{
  pokemon?.then(response =>{
    setpokemons(response)
    setfiltretab(response)
    console.log(response)
  })
}, [])



  return (
    <div className="App">
      <Navbar />
      <SearchPoke reference={valuesearchbar} change={filter}/>
      <div className="containerCard">
        {pokemons?.map((pokemon, i) => (
          <Card
            key={pokemon?.name}
            name={pokemon?.name}
            number={pokemon?.url.substr(34).slice(0, -1)}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
              pokemon?.url.substr(34).slice(0, -1)
            }.svg`}
            currentball={seeball(pokemon?.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

