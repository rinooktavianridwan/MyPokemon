import React from "react";
import "./Preloader.css";
import { useEffect } from "react";
import { preLoaderAnim } from "../../animation/animation";
import Pokemon from "../../assets/pokemon.svg";
import Pokemon1 from "../../assets/pokemon1.svg";
import Pokemon2 from "../../assets/pokemon2.svg";
import Pokemon4 from "../../assets/pokemon4.svg";
import Pokemon5 from "../../assets/pokemon5.svg";


const Preloader = () => {
  useEffect(() => {
    preLoaderAnim()
  }, []);
  return (
    <div className="preloader">
      <img src={Pokemon1} alt="" className="toprigth" />
      <img src={Pokemon2} alt="" className="topleft" />
      <img src={Pokemon4} alt="" className="bottomrigth" />
      <img src={Pokemon5} alt="" className="bottomleft" />
      <div className="animation-container">
        <img src="./pokemon_ball.svg" alt="" className="ball_left" />
        <img className="logo" src={Pokemon} alt="" />
        <img src="./pokemon_ball.svg" alt="" className="ball_rigth" />
      </div>
    </div>
  );
};

export default Preloader;
