import React, { Component } from "react";

import { Badge } from "@mui/material";
export class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <img
            src="https://img.icons8.com/officel/86/000000/pokedex.png"
            alt="pokedex"
          />

          <img src="https://fontmeme.com/permalink/220804/88942d744f3ebc298c184d39c4726f21.png" alt="" />
          
        </div>

        <div className="numberpokemon">
          <Badge badgeContent={124} color="error" max={8000}>
            <img src="https://img.icons8.com/plasticine/64/000000/pikachu-pokemon.png" />
          </Badge>
        </div>
      </nav>
    );
  }
}

export default Navbar;
