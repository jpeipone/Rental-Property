import React from "react";
import { Link } from "react-router-dom";
import "./FooterData.css";

const FooterData = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo-name">
        <img src="./images/apartmentwhalelogo.png" className="footer-logo" />
        <div className="footer__header">AsuntoValas</div>
      </div>
      <div className="footer-row">
        <div className="footer__links">
          <div className="footer__link">
            <Link to="/uusi">Laskuri</Link>
          </div>
          <div className="footer__link">
            <Link to="/asunnot">Asunnot</Link>
          </div>
          <div className="footer__link">
            <Link to="/tiivistelmä">Vuokratuotto</Link>
          </div>
        </div>{" "}
      </div>
      <br />
      <div className="footer-text">
        <p>Asuntosijoittajille tehty laskuri</p>
        <p>Laskurin arvot voivat sisältää virheitä</p>
      </div>
      <div className="footer-text-copyright">
        <p>&copy; AsuntoValas</p>
      </div>
    </div>
  );
};

export default FooterData;
