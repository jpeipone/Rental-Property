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
          <img src="./images/asuntovalas.svg" className="footer-logo" alt=" " />
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
          <p>
            Sivuston sisältö on tarkoitettu suuntaa-antavaksi, ja sitä ei ole
            tarkoitettu sijoituspäätöksen tekemiseen. Sivustolla voi ilmetä
            virheitä, kuten laskurin laskukaavoissa. Laskurin tarkkuus ei
            välttämättä ole ajantasalla, joten käytä omalla harkinnallasi.
          </p>
        </div>
        <div className="footer-text-copyright">
          <p>&copy; AsuntoValas</p>
        </div>
      </div>
    </div>
  );
};

export default FooterData;
