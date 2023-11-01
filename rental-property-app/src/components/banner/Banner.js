import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner-info">
        <h2 className="banner__header">Rental calculator</h2>
        <p className="banner__text">
          calculate rental apartments revenue and store data
        </p>
        <button className="banner__btn">Start</button>
      </div>
    </header>
  );
};

export default Banner;
