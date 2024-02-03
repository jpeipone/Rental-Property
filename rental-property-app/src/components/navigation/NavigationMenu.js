import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../ContextUser";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  const { isLightMode, setIsLightMode } = useContext(UserContext);

  const handleDarkLightMode = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <div className={isLightMode ? "navigation-light" : "navigation-dark"}>
      <nav>
        <div className="logo-name-container">
          <Link to="/">
            <img src="./images/asuntovalas.svg" alt="" className="menu-logo" />
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
            <Link to="/tiivistelma">Kooste</Link>
          </li>
          <li>
            <div className="light-dark-btn" onClick={handleDarkLightMode}>
              <Brightness4Icon />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
