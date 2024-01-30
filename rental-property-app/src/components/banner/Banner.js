import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner-info">
        <h2 className="banner__header">Asuntosijoittan laskuri </h2>

        <p className="banner__text">vuokratuottoprosentti</p>
        <p className="banner__text">kassavirta</p>
        <p className="banner__text">yhdelle tai usealle asunnolle</p>
        <Link to="/uusi">
          <button className="banner__btn">Laskuri</button>
        </Link>
      </div>
    </header>
  );
};

export default Banner;
