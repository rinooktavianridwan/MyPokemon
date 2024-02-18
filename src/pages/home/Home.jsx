import React from "react";
import { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import pokemon from "../../assets/pokemon.svg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
      <div className="header-container">
        <div className="header-name">
          <h1>My</h1>
          <img src={pokemon} alt="Pokemon" />
          <h1>Home</h1>
        </div>
      </div>
      <div className="website-home">
        <img src="/pokemon_ball.svg" alt="My List" className="icon-home" />
        <p className="des-home">
          Selamat datang di situs kami yang menyediakan pengalaman terbaik dalam
          mencari dan menyimpan informasi tentang Pokemon. Temukan Pokemon yang
          Anda cari dan kelola daftar Pokemon favorit Anda dengan mudah.
        </p>
      </div>
      <div className="website-home">
        <div className="header-name">
          <h1>My</h1>
          <img src={pokemon} alt="Pokemon" />
          <h1>Book</h1>
        </div>
        <p className="des-home">
          Di MyPokemonBook, Anda dapat menemukan informasi tentang berbagai
          Pokemon. Gunakan fitur pencarian kami untuk menemukan Pokemon favorit
          Anda. <Link to="/PokemonList">Ke Halaman</Link>
        </p>
      </div>
      <div className="website-home">
        <div className="header-name">
          <h1>My</h1>
          <img src={pokemon} alt="Pokemon" />
          <h1>List</h1>
        </div>
        <p className="des-home">
          MyPokemonList adalah tempat di mana Anda dapat menyimpan data Pokemon
          favorit anda dengan mudah. <Link to="/MyPokemon">Ke Halaman</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
