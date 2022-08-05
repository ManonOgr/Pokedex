import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { getPokeApi } from "../services";
import { PokemonCard, NavBar } from "../Components";

export const Home = () => {
 
  const [pokemonData, setPokemonData] = useState([]);
  const [filterPokemonData, setFilterPokemonData] = useState([]);
 
  const inputValue = useRef(null);


  function searchPokemonByName() {
    if (inputValue.current !== null) {
      const filtredPokemonList = filterPokemonData.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(inputValue.current.value);
      });
      setPokemonData(filtredPokemonList);
    }
    if (inputValue.current.value === "") {
      setPokemonData(filterPokemonData);
    }
  }


  return (
    <>
      <NavBar />
      <div className="container__search">
        <label htmlFor="search">Rechercher un pokémon</label>
        <input
          name="search"
          placeholder="Pikachu, mew, lucario..."
          onChange={searchPokemonByName}
          ref={inputValue}
          type="text"
        />
      </div>
      <section className="container__list">
        {pokemonData &&
          pokemonData.map((pokemon) => (
            <Card key={pokemon.name} pokemon={pokemon} />
          ))}
      </section>
    </>
  );
};