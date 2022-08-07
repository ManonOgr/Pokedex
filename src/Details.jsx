import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { api, apispecies, apievolution } from "./services/api";

import  Navbar  from "./components/Navbar";
import CardDetails from "./components/CardDetails";
import { usePokemons } from "./services/pokemon";
import { useParams } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./services/pokestore";

function Details() {
  const [count, setCount] = useState(0);
  const { pokemonId } = useParams();
  const pokemons = usePokemons();
  const data = api(pokemonId);
  const species = apispecies(pokemonId);


  const [datapokemon, setdatapokemon] = useState();
  const [dataspecies, setdataspecies] = useState();
  const [dataevolution, setdataevolution] = useState();
  

  useEffect(() => {
    data.then((res) => {
      console.log(res.data);
      setdatapokemon(res.data);
    });
  }, []);

  useEffect(() => {
    species.then((res) => {
      console.log(res.data);
      setdataspecies(res.data);
      console.log(res.data.evolution_chain.url)
      apievolution(res.data.evolution_chain.url).then(res=>{
        setdataevolution(res.data.chain);
        console.log(res.data.chain)
      })
    });
  }, []);



  return (
    <Provider store={store}>
    <div className="App">
      <Navbar />
      <CardDetails datapokemon={datapokemon} dataspecies={dataspecies} dataevolution={dataevolution}/>
    </div>
    </Provider>
  );
}

export default Details;
