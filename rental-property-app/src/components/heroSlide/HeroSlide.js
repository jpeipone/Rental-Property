import React from "react";
import { Link } from "react-router-dom";
import "./HeroSlide.css";

const HeroSlide = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="heroslide-container">
      <div className="hero-and-image">
        <div className="header-and-text">
          <h2 className="hero-header">
            Vertaile asuntojesi vuokratuottoa ja kassavirtaa
          </h2>
          <p className="hero-text">
            Analysoi asuntojasi toisiinsa kaavioista. Vertailemalla voit löytää
            tuottavimmat sijoitusasunnot markkinoilta. Koosteesta näet myös
            asuntojen yhteenlaskettuja arvoja esim. vuokrat, hoitovastikkeet ja
            kassavirran.
          </p>
          <Link to="/tiivistelma" onClick={handleScrollToTop}>
            <button className="hero__btn">Kooste</button>
          </Link>
        </div>
        <img
          src="./images/vertaile-asuntoja-vuokratuotto.jpg"
          className="heroslide-image"
          alt="vertaile asuntoja kaaviosta"
        />
      </div>
    </div>
  );
};
export default HeroSlide;
