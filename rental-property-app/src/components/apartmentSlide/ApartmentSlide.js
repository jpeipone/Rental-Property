import React from "react";
import "./ApartmentSlide.css";

const ApartmentSlide = () => {
  return (
    <div className="apartment-slide">
      <div className="apartment-container">
        <h3 className="apartment__header">Kuninkaankatu 5</h3>
        <div className="column-apartment">
          <div className="apartment__data rent">560€/kk</div>
        </div>
        <div className="row-apartment">
          <div className="apartment__label">hoitovastikkeet</div>
          <div className="apartment__data">156€/kk</div>
        </div>
        <div className="row-apartment">
          <div className="apartment__label">kaupunki</div>
          <div className="apartment__data">Helsinki</div>
        </div>
        <div className="row-apartment">
          <div className="apartment__label">pinta-ala</div>
          <div className="apartment__data">30m2</div>
        </div>

        <div className="row-apartment">
          <div className="apartment__label">hankintahinta</div>
          <div className="apartment__data">79400€</div>
        </div>
        <div className="row-apartment">
          <div className="apartment__label">laina</div>
          <div className="apartment__data">12300€</div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentSlide;
