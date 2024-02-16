import React from 'react'

import pokemon from "../../assets/pokemon.svg";

const MyPokemon = () => {
  return (
    <div className="header-container">
      <div className="header-name">
        <h1>My</h1>
        <img src={pokemon} alt="Pokemon" />
        <h1>List</h1>
      </div>
    </div>
  )
}

export default MyPokemon