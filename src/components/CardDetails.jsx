import React, { Component } from "react";
import pokelike from "../images/pokeballnb.png";

import { Link } from "react-router-dom";


function CardDetails({ datapokemon , dataspecies, dataevolution}) {
  let tabevo = [];
  let str = dataevolution?.species.url.substr(42);
  let id = Number(str?.slice(0,-1));

  function nivevo(){
    if( typeof dataevolution?.evolves_to[0] === "undefined"){
      return tabevo
    }else{
      return tabevo = dataevolution?.evolves_to[0].evolves_to
    }
  }

  nivevo();

  return (
    <div className="global">
      <div id="containeredirect">
        <Link to={`/Home`}>
          <button className="redirecthome">
            {" "}
            <img src="https://img.icons8.com/fluency/40/000000/pokemon.png" />
            Home
          </button>
        </Link>
      </div>

      <div className="carddetails">
        <div className="name">
          <p>{datapokemon?.name}</p>
        </div>

        <div className="containerfirst">
          <div className="containerfirstbtn"> {datapokemon?.types.map(el =>{ return <button key={el.type.name}>{el.type.name}</button>})}

          </div>

          <div>
            <p className="number">#{datapokemon?.id}</p>
          </div>
        </div>

        <div className="containerdetailsimg">
          <img src={datapokemon?.sprites.front_default} alt="pokemon" />
        </div>

        <div className="stats">
          <p>Statistiques</p>
        </div>

        <div id="doublelist">
          <ul className="spacelist">
            <li className="bold">HP</li>
            <li className="bold">Attack</li>
            <li className="bold">Defense</li>
            <li className="bold">Speed</li>
            <li className="bold">Sp Atk</li>
            <li className="bold">Sp Def</li>
          </ul>

          <ul>
            <li className="border">{datapokemon?.stats[0].base_stat} </li>
            <li className="border">{datapokemon?.stats[1].base_stat}</li>
            <li className="border">{datapokemon?.stats[2].base_stat}</li>
            <li className="border">{datapokemon?.stats[3].base_stat}</li>
            <li className="border">{datapokemon?.stats[4].base_stat}</li>
            <li className="border">{datapokemon?.stats[5].base_stat}</li>
          </ul>
        </div>

        <div className="description">
          <p>
           {dataspecies?.flavor_text_entries[0].flavor_text}
          </p>
        </div>

        <div>
          <div className="profil">
            <p>Profile</p>
          </div>
          <div id="doublelist">
            <ul className="twospacelist">
              <li className="bold">Height: {datapokemon?.height}</li>
              <li className="bold">Catch Rate: {dataspecies?.capture_rate}</li>
              <li className="bold"><span className="egg"> Egg Groups:{dataspecies?.egg_groups.map((e_group) =>{
                return <p key={e_group?.name}>&nbsp;{e_group.name}</p>
              })} </span></li>
              <li className="bold">Abilities: {datapokemon?.abilities[0].ability.name} /{" "}
                {datapokemon?.abilities[1]?.ability.name}</li>
              <li className="bold">Weight: {datapokemon?.weight}</li>
              <li className="bold">Gender Ration : {(1-(dataspecies?.gender_rate/8))*100}% <img src="https://img.icons8.com/windows/20/000000/male.png"/> {((dataspecies?.gender_rate/8))*100}% <img src="https://img.icons8.com/ios-glyphs/20/000000/female.png"/></li>
              <li className="bold">Hatch Steps: {255*(dataspecies?.hatch_counter +1)}</li>
              <li className="bold">EVs: </li>
            </ul>
           
          </div>

          <div>
            <div className="evolution">
              <p>Evolution</p>
            </div>
            <div className="containerevolution">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="evolution1" />
              <img style={{display:dataevolution?.evolves_to.length > 0? 'block' : 'none'}} src="https://img.icons8.com/ios-filled/50/437C90/chevron-right.png"/>
              <img style={{display:dataevolution?.evolves_to.length > 0? 'block' : 'none'}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1}.png`} alt="evolution2" />
              <img style={{display:tabevo?.length > 0? 'block' : 'none'}} src="https://img.icons8.com/ios-filled/50/437C90/chevron-right.png"/>
              <img style={{display:tabevo?.length > 0? 'block' : 'none'}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+2}.png`} alt="evolution3" />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
