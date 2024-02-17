import React from "react";
import { useEffect, useState } from "react";
import "./MyPokemon.css";
import PokeCard from "../../components/pokecard/PokeCard";
import PokeInfo from "../../components/pokeinfo/PokeInfo";
import { RemoveToFav } from "../../components/removetofav/RemoveToFav";

import pokemon from "../../assets/pokemon.svg";

const MyPokemon = () => {
  const [myPokemon, setMyPokemon] = useState([]);
  const [pokeDex, setPokeDex] = useState();
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const removeFromList = (pokemon) => {
    const newArrayPokemon = myPokemon.filter((poke) => {
      return poke.id !== pokemon.id;
    });
    setMyPokemon(newArrayPokemon);
    localStorage.setItem("myPokemon", JSON.stringify(newArrayPokemon));
  };
  useEffect(() => {
    const storedPokemon = localStorage.getItem("myPokemon");
    if (storedPokemon) {
      setMyPokemon(JSON.parse(storedPokemon));
    }
  }, []);

  const showInfo = () => {
    setIsInfoVisible(true);
  };

  const hideInfo = () => {
    setIsInfoVisible(false);
  };
  return (
    <>
      <div className="header-container">
        <div className="header-name">
          <h1>My</h1>
          <img src={pokemon} alt="Pokemon" />
          <h1>List</h1>
        </div>
      </div>
      <div className="mypoke-container">
        <PokeCard
          pokemon={myPokemon}
          infoPokemon={(poke) => {
            setPokeDex(poke);
            showInfo();
          }}
        />
      </div>
      {isInfoVisible && (
        <div className="poke-info-popup">
          <PokeInfo data={pokeDex} />
          <button onClick={hideInfo}>Close</button>
          <RemoveToFav handleRemoveToList={() => removeFromList(pokeDex)} 
          close = {hideInfo}/>
        </div>
      )}
    </>
  );
};

export default MyPokemon;
