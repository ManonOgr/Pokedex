import React, { Component } from "react";

import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import { addlike, deletelike } from "../services/pokeslice";


function Card(props) {

const dispatch = useDispatch();
const state = useSelector(state =>state.slicelike)

const checkiflike = (id,name) =>{
  if(state.find((value)=> value.name === name) === undefined){
       dispatch(addlike({id, name}))
       console.log("bien joué")
  }else{
       console.log("déjà ajouté")
       dispatch(deletelike({id, name}))
   }
}


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
        <div className="containerimglike" onClick={()=>checkiflike(props.number, props.name)}>
          <img className="imglike" src={props.currentball} alt="pokelike" />
        </div>
      </div>
      <div className="txtcards">
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Card;
