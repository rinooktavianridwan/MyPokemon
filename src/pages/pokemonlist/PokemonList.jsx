import React from "react";
import "./PokemonList.css";
import pokemon from "../../assets/pokemon.svg";
import PokeCard from "../../components/pokecard/PokeCard";
import PokeInfo from "../../components/pokeinfo/PokeInfo";
import axios from "axios";
import { useEffect, useState } from "react";

const PokemonList = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    const pokemonPromises = res.map(async (item) => {
      const result = await axios.get(item.url);
      return result.data;
    });
  
    const pokemonData = await Promise.all(pokemonPromises);
    setPokeData(pokemonData);
  };
  

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <div>
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
      <div className="poke-container">
        <div className="poke-list">
          <PokeCard
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />
        </div>
        <div className="btn-group">
          {prevUrl && (
            <button
              onClick={() => {
                setPokeData([]);
                setUrl(prevUrl);
              }}
            >
              Previus
            </button>
          )}
          {nextUrl && (
            <button
              onClick={() => {
                setPokeData([]);
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          )}
        </div>
        <PokeInfo data={pokeDex} />
      </div>
    </div>
  );
};

export default PokemonList;
