import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import MyPokemon from "./pages/mypokemon/MyPokemon";
import PokemonList from "./pages/pokemonlist/PokemonList";
import Preloader from "./components/preloader/Preloader";

function App() {
  return (
    <div>
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/PokemonList" Component={PokemonList} />
        <Route path="/MyPokemon" Component={MyPokemon} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
