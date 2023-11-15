import React from "react";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";
import ApartmentSlide from "../apartmentSlide/ApartmentSlide";
import "./Homepage.css";
import FooterData from "../FooterData";

const Homepage = () => {
  return (
    <div className="homepage">
      <Banner />
      <h2 className="app__header">Asunnot</h2>

      <div className="add-new-apartment">
        <Link to="/uusi">
          <div className="add-apartment__btn">+</div>
        </Link>
        <Link to="/uusi">
          <div className="add__text">Lisää asunto</div>
        </Link>
      </div>

      <ApartmentSlide />
      <FooterData />
    </div>
  );
};

export default Homepage;
