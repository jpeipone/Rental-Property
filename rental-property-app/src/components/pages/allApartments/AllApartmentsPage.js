import React from "react";
import { Link } from "react-router-dom";
import ApartmentSlide from "../../apartmentSlide/ApartmentSlide";
import "./AllApartmentsPage.css";

const AllApartmentsPage = () => {
  return (
    <div className="all-apartments">
      <h2 className="app__header">Asunnot</h2>

      <div className="add-new-apartment">
        <Link to="/uusi">
          <div className="add__text">Lisää asunto</div>
        </Link>
      </div>

      <ApartmentSlide />
    </div>
  );
};

export default AllApartmentsPage;
