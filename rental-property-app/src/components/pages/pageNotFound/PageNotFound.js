import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="pagenotfound__hd">Etsimääsi sivua ei löytynyt</div>

      <p>Voisiko etsimäsi olla jokin näistä?</p>

      <div className="notfound-links">
        <div className="notfound__link">
          <Link to="/uusi">Laskuri</Link>
        </div>
        <div className="notfound__link">
          <Link to="/asunnot">Asunnot</Link>
        </div>
        <div className="notfound__link">
          <Link to="/tiivistelmä">Vuokratuotto</Link>
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
