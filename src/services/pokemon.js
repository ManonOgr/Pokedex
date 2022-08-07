import { useState, useEffect } from "react";
import axios from "axios";

 export function usePokemons() {


     
      return axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=620"
      ).then(response => {return response.data.results});
 
   

}
