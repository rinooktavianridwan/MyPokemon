import React from "react";
import "./PokeCard.css";

const PokeCard = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((index) => (
          <div
            className="card"
            key={index.id}
            onClick={() => infoPokemon(index)}
          > 
            <img src={index.sprites.other.dream_world.front_default} alt="" />
            <h2>{index.id}{index.name}</h2>
          </div>
        ))
      )}
    </>
  );
};

export default PokeCard;
