import React from "react";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <nav className="navigation">
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
