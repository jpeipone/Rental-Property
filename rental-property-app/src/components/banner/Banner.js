import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner-info">
        <h2 className="banner__header">Asuntosijoittan työkalu</h2>
        <p className="banner__text">Vuokra-asuntojen analysointiin laskuri</p>
        <Link to="/uusi">
          <button className="banner__btn">Aloita</button>
        </Link>
      </div>
    </header>
  );
};

export default Banner;
