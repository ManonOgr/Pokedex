import React, { Component } from "react";

import { Link } from "react-router-dom";

import pokelike from "../images/pokeballnb.png";

function Card(props) {
  return (
    <div className="cards">
      <div className="numbercards">
        <p>#{props.number}</p>
      </div>

      <img src={props.img} alt="pokemon" />

      <div className="containerg">
        <Link to={`/details/${props.number}`}>
          <button className="detailspoke">Details...</button>
        </Link>
        <div className="containerimglike">
          <img className="imglike" src={pokelike} alt="pokelike" />
        </div>
      </div>
      <div className="txtcards">
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Card;
