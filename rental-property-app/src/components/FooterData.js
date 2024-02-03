import { useContext } from "react";
import { UserContext } from "../ContextUser";
import { Link } from "react-router-dom";
import "./FooterData.css";

const FooterData = () => {
  const { isLightMode, setIsLightMode } = useContext(UserContext);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className={isLightMode ? "footer-light" : "footer-dark"}>
      <div className="footer-container">
        <div className="footer-logo-name">
          <img src="./images/asuntovalas.svg" className="footer-logo" />
          <div className="footer__header">AsuntoValas</div>
        </div>
        <div className="footer-row">
          <div className="footer__links">
            <div className="footer__link">
              <Link to="/uusi" onClick={handleScrollToTop}>
                Laskuri
              </Link>
            </div>
            <div className="footer__link">
              <Link to="/asunnot" onClick={handleScrollToTop}>
                Asunnot
              </Link>
            </div>
            <div className="footer__link">
              <Link to="/tiivistelma" onClick={handleScrollToTop}>
                Vuokratuotto
              </Link>
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
    </div>
  );
};

export default FooterData;
