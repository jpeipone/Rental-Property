import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="page-not-found">
      <div className="pagenotfound__hd">Etsimääsi sivua ei löytynyt</div>

      <p>Voisiko etsimäsi olla jokin näistä?</p>

      <div className="notfound-links">
        <div className="notfound__link">
          <Link to="/uusi" onClick={handleScrollToTop}>
            Laskuri
          </Link>
        </div>
        <div className="notfound__link">
          <Link to="/asunnot" onClick={handleScrollToTop}>
            Asunnot
          </Link>
        </div>
        <div className="notfound__link">
          <Link to="/tiivistelma" onClick={handleScrollToTop}>
            Vuokratuotto
          </Link>
        </div>
        <img
          src="./images/pagenotfoundwhale.png"
          className="pagenotfound-logo"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
