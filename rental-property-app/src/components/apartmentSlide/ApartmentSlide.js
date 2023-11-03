import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ApartmentSlide.css";
import { UserContext } from "../../ContextUser";

const ApartmentSlide = () => {
  const {
    userdata,
    setUserdata,
    logged,
    setLogged,
    UIDinvestor,
    setUIDinvestor,
    setPortfolioUser,
  } = useContext(UserContext);

  console.log("asuntojen tiedot:", userdata);
  return (
    <div className="apartment-slide">
      <Link to="/uusi">
        <div className="apartment-container add">
          <div className="add-apartment">
            <div className="add-apartment__btn">+</div>
          </div>
        </div>
      </Link>
      <div className="apartment-grid">
        {/*  apartment card */}
        {userdata
          ? userdata?.map((apartment) => (
              <div className="apartment-container card">
                <div className="header-container">
                  <h3 className="apartment__header">{apartment?.address}</h3>
                </div>
                <div className="column-apartment">
                  <div className="apartment__data rent">
                    {apartment?.monthlyRevenue}
                    €/kk
                  </div>
                </div>
                <div className="row-apartment">
                  <div className="apartment__label">hoitovastikkeet</div>
                  <div className="apartment__data">
                    {apartment?.monthlyMaintenanceCharge}€/kk
                  </div>
                </div>

                <div className="row-apartment">
                  <div className="apartment__label">hankintahinta</div>
                  <div className="apartment__data">
                    {apartment?.originalCost}€
                  </div>
                </div>
                <div className="row-apartment">
                  <div className="apartment__label">laina</div>
                  <div className="apartment__data">
                    {apartment?.loanMonthlyCost}€/kk
                  </div>
                </div>
                <div className="row-apartment column">
                  <div className="apartment__data column">
                    {apartment?.city}
                  </div>
                  <div className="apartment__data column">
                    {apartment?.squareMeters}m2
                  </div>
                </div>
                <Link to="/asunto">
                  <button className="show-apartment__btn">katso</button>
                </Link>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ApartmentSlide;
