import React, { Component } from "react";

import { useSelector } from "react-redux";

import { Badge } from "@mui/material";

import { Link } from "react-router-dom";

function Navbar () {
  
  const state = useSelector(state=>state.slicelike)
    return (
      <nav>
        <div className="logo">
          <img
            src="https://img.icons8.com/officel/86/000000/pokedex.png"
            alt="pokedex"
          />

          <img src="https://fontmeme.com/permalink/220804/88942d744f3ebc298c184d39c4726f21.png" alt="" />
          
        </div>

<Link to={`/pokedex`}>
<div className="numberpokemon">
          <Badge badgeContent={state.length} color="error" max={8000}>
            <img src="https://img.icons8.com/plasticine/64/000000/pikachu-pokemon.png" />
          </Badge>
        </div>
</Link>
     
      </nav>
    );
  
}

export default Navbar;
