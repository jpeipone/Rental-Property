import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner-info">
        <h2 className="banner__header">Asuntosijoittan työkalu</h2>
        <p className="banner__text">
          Vuokra-asuntojen analysointiin laskuri ja tietokanta
        </p>
        <button className="banner__btn">Aloita</button>
      </div>
    </header>
  );
};

export default Banner;
