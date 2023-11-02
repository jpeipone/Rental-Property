import { useContext, useEffect, useState } from "react";
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
      <div className="apartment-grid">
        <div className="apartment-container card">
          <div className="add-apartment">
            <div className="add-apartment__btn">+</div>
          </div>
        </div>

        {/*  apartment card */}
        {userdata
          ? userdata.map((apartment) => (
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
                  <div className="apartment__label">kaupunki</div>
                  <div className="apartment__data">{apartment?.city}</div>
                </div>
                <div className="row-apartment">
                  <div className="apartment__label">pinta-ala</div>
                  <div className="apartment__data">
                    {apartment?.squareMeters}m2
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
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ApartmentSlide;
