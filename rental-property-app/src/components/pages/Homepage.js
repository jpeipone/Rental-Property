import { useContext, useState } from "react";
import { UserContext } from "../../ContextUser";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";
import ApartmentSlide from "../apartmentSlide/ApartmentSlide";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./Homepage.css";
import CashFlowRanking from "../cashFlowRanking/CashFlowRanking";
import HeroSlide from "../heroSlide/HeroSlide";

const Homepage = () => {
  const { isLightMode, setIsLightMode, userdata, setUserdata } =
    useContext(UserContext);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  //delete all apartments
  const handleDeleteAllApartments = () => {
    //deletes all apartments
    setUserdata([]);
  };

  return (
    <div className={isLightMode ? "homepage-light" : "homepage-dark"}>
      <Banner />
      <HeroSlide />
      <h2 className="app__header">Asunnot</h2>

      <div className="container-add-delete">
        <div className="add-new-apartment">
          <Link to="/vuokratuottolaskuri" onClick={handleScrollToTop}>
            <div className="add__text">Lisää asunto</div>
          </Link>
        </div>
        <div
          className="homepage-delete-all"
          onClick={handleDeleteAllApartments}
        >
          <DeleteForeverIcon fontSize="large" /> {userdata.length}
        </div>
      </div>
      <ApartmentSlide />
    </div>
  );
};

export default Homepage;
