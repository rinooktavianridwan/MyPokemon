import React from "react";
import "./PokemonList.css";
import pokemon from "../../assets/pokemon.svg";

const PokemonList = () => {
  return (
    <div className="header-container">
      <div className="header-name">
        <h1>My</h1>
        <img src={pokemon} alt="Pokemon" />
        <h1>List</h1>
      </div>
      <div className="search-box-pokemon">
        <input type="search-pokemon" placeholder="Search for a pokemon" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default PokemonList;
