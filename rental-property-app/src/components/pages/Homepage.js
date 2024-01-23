import React from "react";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";
import ApartmentSlide from "../apartmentSlide/ApartmentSlide";
import "./Homepage.css";
import FooterData from "../FooterData";
import CashFlowRanking from "../cashFlowRanking/CashFlowRanking";

const Homepage = () => {
  return (
    <div className="homepage">
      <Banner />
      <h2 className="app__header">Asunnot</h2>

      <div className="add-new-apartment">
        {/*  <Link to="/uusi">
          <div className="add-apartment__btn">+</div>
        </Link> */}
        <Link to="/uusi">
          <div className="add__text">Lisää asunto</div>
        </Link>
      </div>

      <ApartmentSlide />
      <h2 className="app__header">Vuokratuotto</h2>
      <CashFlowRanking />
    </div>
  );
};

export default Homepage;
