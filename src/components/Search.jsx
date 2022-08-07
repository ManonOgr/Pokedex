import React, { Component } from "react";
import { useState,  useEffect}
 from "react";

function SearchPoke(props) {

    return (
      <div className="containerSearch">
        <div className="Search">
          <input type="search" id="site-search" name="q" placeholder="Recherche..." ref={props.reference} onChange={props.change}></input>

          <button className="btnsearch">Search</button>
        </div>
      </div>
    );
  }


export default SearchPoke;
