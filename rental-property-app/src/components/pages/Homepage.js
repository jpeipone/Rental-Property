import React from "react";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";
import ApartmentSlide from "../apartmentSlide/ApartmentSlide";
import "./Homepage.css";
import CashFlowRanking from "../cashFlowRanking/CashFlowRanking";

const Homepage = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="homepage">
      <Banner />
      <h2 className="app__header">Asunnot</h2>

      <div className="add-new-apartment">
        <Link to="/uusi" onClick={handleScrollToTop}>
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
