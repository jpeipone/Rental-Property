import React from "react";
import Banner from "../banner/Banner";
import ApartmentSlide from "../apartmentSlide/ApartmentSlide";

const Homepage = () => {
  return (
    <div className="homepage">
      <Banner />
      <h2 className="app__header">Asunnot</h2>
      <ApartmentSlide />
    </div>
  );
};

export default Homepage;
