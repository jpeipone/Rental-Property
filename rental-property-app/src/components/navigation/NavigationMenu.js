import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <nav className="navigation">
      <div className="logo-name-container">
        <Link to="/">
          <img
            src="./images/apartmentwhalelogo.png"
            alt=""
            className="menu-logo"
          />
        </Link>
        <Link to="/">
          <div className="website-name">AsuntoValas</div>
        </Link>
      </div>
      <ul>
        <li className="menu-items">
          <Link to="/asunnot">Asunnot</Link>
        </li>
        <li className="menu-items">
          <Link to="/tiivistelma">Vuokratuotto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
