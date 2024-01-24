import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <nav className="navigation">
      <div className="logo-name-container">
        <Link to="/">
          <img src="./images/whaleapartment.jpg" alt="" className="menu-logo" />
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
          <Link to="/tiivistelmä">Vuokratuotto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
