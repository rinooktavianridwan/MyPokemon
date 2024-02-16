// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { listNavbar } from "../../data/navbarlist";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");
    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  return (
    <nav className="nav">
      <ul className={active}>
        {listNavbar.map((item, index) => (
          <li key={index} className="nav_item">
            <Link to={item.path} className="nav_link">
              {item.nama}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <img src="/pokemon_ball.svg" alt="My List" className="img-nav"/>
    </nav>
  );
};

export default Navbar;
