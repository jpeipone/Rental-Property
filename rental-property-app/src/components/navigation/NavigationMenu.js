import React from "react";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <nav className="navigation">
      <div className="logo-name-container">
        <img src="./images/asuntologo.svg" alt="asunto" className="menu-logo" />
        <div className="website-name">AsuntoX</div>
      </div>
      <ul>
        <li className="menu-items">
          <a>about</a>
        </li>

        <li className="menu-items">
          <a>account</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
