import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <nav className="navigation">
      <div className="logo-name-container">
        <Link to="/">
          <img
            src="./images/asuntologo.svg"
            alt="asunto"
            className="menu-logo"
          />
        </Link>
        <Link to="/">
          <div className="website-name">AsuntoX</div>
        </Link>
      </div>
      <ul>
        <li className="menu-items">
          <Link to="/asunnot">Asunnot</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
