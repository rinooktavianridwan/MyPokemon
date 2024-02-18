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
          mencari dan menyimpan informasi tentang anime dan film favorit Anda.
          Temukan judul yang Anda cari dan kelola daftar personal Anda dengan
          mudah.
        </p>
      </div>
      <div className="website-home">
        <p className="des-home">
          Di MyMovieList, Anda dapat menemukan informasi tentang berbagai film
          dari beberapa genre. Jelajahi sinopsis, temukan rating untuk membantu
          Anda membuat keputusan tentang film yang ingin Anda saksikan.
          <Link to="/PokemonList">Ke Halaman</Link>
        </p>
        <h1>MyMovieList</h1>
      </div>
      <div className="website-home">
        <h1>MyAnimeList</h1>
        <p className="des-home">
          MyAnimeList adalah tempat di mana Anda dapat menelusuri katalog anime
          yang luas, membaca ringkasan cerita. Gunakan fitur pencarian kami
          untuk menemukan anime favorit Anda.<Link to="/Anime">Ke Halaman</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
