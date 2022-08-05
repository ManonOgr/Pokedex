import React, { Component } from "react";
import { useState,  useEffect}
 from "react";

export class SearchPoke extends Component {
  render() {
    return (
      <div className="containerSearch">
        <div className="Search">
          <input type="search" id="site-search" name="q" placeholder="Recherche..."></input>

          <button className="btnsearch">Search</button>
        </div>
      </div>
    );
  }
}

export default SearchPoke;
