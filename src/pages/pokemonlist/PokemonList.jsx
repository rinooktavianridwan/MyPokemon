import React, { useState, useEffect } from "react";
import "./PokemonList.css";
import pokemon from "../../assets/pokemon.svg";
import PokeCard from "../../components/pokecard/PokeCard";
import PokeInfo from "../../components/pokeinfo/PokeInfo";
import axios from "axios";
import { AddToFav } from "../../components/addtofav/AddToFav";

const PokemonList = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [myPokemon, setMyPokemon] = useState([]);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showNotFoundPopup, setShowNotFoundPopup] = useState(false);

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
      console.log(result.data);
      return result.data;
    });

    const pokemonData = await Promise.all(pokemonPromises);
    setPokeData(pokemonData);
  };

  const showInfo = () => {
    setIsInfoVisible(true);
  };

  const hideInfo = () => {
    setIsInfoVisible(false);
  };

  const addToFavorites = (pokemon) => {
    const pokeExists = myPokemon.some((poke) => poke.id === pokemon.id);
    if (!pokeExists) {
      const newArrayPokemon = [...myPokemon, pokemon];
      setMyPokemon(newArrayPokemon);
      localStorage.setItem("myPokemon", JSON.stringify(newArrayPokemon));
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResult(null);
      pokeFun();
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`
      );
      if (res.data) {
        setSearchResult(res.data);
      } else {
        setSearchResult(null);
        setErrorMessage("Pokemon tidak ditemukan");
      }
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage("Pokemon tidak ditemukan");
        setShowNotFoundPopup(true);
      } else {
        setErrorMessage("Terjadi kesalahan saat mencari Pokemon");
      }
      setLoading(false);
    }
  };

  const closeNotFoundPopup = () => {
    setShowNotFoundPopup(false);
  };

  useEffect(() => {
    const storedPokemon = localStorage.getItem("myPokemon");
    if (storedPokemon) {
      setMyPokemon(JSON.parse(storedPokemon));
    }
  }, []);

  useEffect(() => {
    pokeFun();
  }, [url]);
  return (
    <div>
      <div className="header-container">
        <div className="header-name">
          <h1>My</h1>
          <img src={pokemon} alt="Pokemon" />
          <h1>Book</h1>
        </div>
        <div className="search-box-pokemon">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a pokemon"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="poke-container">
        <div className="poke-list">
          <PokeCard
            pokemon={searchResult ? [searchResult] : pokeData}
            loading={loading}
            infoPokemon={(poke) => {
              setPokeDex(poke);
              showInfo();
            }}
          />
        </div>
        {!searchResult && (
          <div className="btn-group">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
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
        )}
        {isInfoVisible && (
          <div className="poke-info-popup">
            <PokeInfo data={pokeDex} />
            <button onClick={hideInfo}>Close</button>
            <AddToFav handleAddToList={() => addToFavorites(pokeDex)} />
          </div>
        )}
        {showPopup && (
          <div className="popup">
            <p>Successfully added to the Favorite in My Pokemon Page</p>
            <button onClick={closePopup}>Close</button>
          </div>
        )}
        {showNotFoundPopup && (
          <div className="popup">
            <p>{errorMessage}</p>
            <button onClick={closeNotFoundPopup}>Tutup</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
