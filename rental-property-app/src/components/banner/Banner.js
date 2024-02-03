import { useContext } from "react";
import { UserContext } from "../../ContextUser";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const { isLightMode } = useContext(UserContext);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <header className={isLightMode ? "banner-light" : "banner-dark"}>
      <div className="banner-info">
        <h2 className="banner__header">Asuntosijoittan laskuri </h2>

        <p className="banner__text">vuokratuottoprosentti</p>
        <p className="banner__text">kassavirta</p>
        <p className="banner__text">yhdelle tai usealle asunnolle</p>
        <Link to="/uusi" onClick={handleScrollToTop}>
          <button className="banner__btn">Laskuri</button>
        </Link>
      </div>
    </header>
  );
};

export default Banner;
