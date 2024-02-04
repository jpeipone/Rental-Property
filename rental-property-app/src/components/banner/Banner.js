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
        <h1 className="banner__header">Asuntosijoituksen Laskuri </h1>

        <p className="banner__text">
          Laske kassavirta ja vuokratuotto yhdelle tai usealle asunnolle.
        </p>

        <Link to="/uusi" onClick={handleScrollToTop}>
          <button className="banner__btn">Laskuri</button>
        </Link>
      </div>
    </header>
  );
};

export default Banner;
