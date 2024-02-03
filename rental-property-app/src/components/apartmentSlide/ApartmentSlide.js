import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ApartmentSlide.css";
import { UserContext } from "../../ContextUser";

/**
 * Shows apartments data in a grid
 */

const ApartmentSlide = () => {
  const { userdata, setUserdata, isLightMode } = useContext(UserContext);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      className={isLightMode ? "apartment-slide-light" : "apartment-slide-dark"}
    >
      <div className="apartment-grid">
        {/*  apartment card */}
        {userdata
          ? userdata?.map((apartment) => (
              <Link to={`/asunto/${apartment?.id}`} onClick={handleScrollToTop}>
                <div
                  className={
                    isLightMode
                      ? "apartment-container-light card"
                      : "apartment-container-dark card"
                  }
                  key={apartment?.id}
                >
                  <div className="header-container">
                    <h3 className="apartment__header">{apartment?.address}</h3>
                  </div>
                  <div className="column-apartment">
                    <div className="apartment__rent">
                      {apartment?.monthlyRevenue} €/kk
                    </div>
                  </div>
                  <div className="row-apartment">
                    <div className="apartment__label">hoitovastike</div>
                    <div className="apartment__data">
                      {apartment?.monthlyMaintenanceCharge}€/kk
                    </div>
                  </div>

                  <div className="row-apartment">
                    <div className="apartment__label">rahoitusvastike</div>
                    <div className="apartment__data">
                      {apartment?.capitalExpenditureCharge}€/kk
                    </div>
                  </div>

                  <div className="row-apartment">
                    <div className="apartment__label">velaton hinta</div>

                    <div className="apartment__data">
                      {apartment?.originalCost}€
                    </div>
                  </div>
                  <div className="row-apartment">
                    <div className="apartment__label">lainaerä </div>

                    {apartment?.loanMonthlyCost && (
                      <div className="apartment__data">
                        {apartment?.loanMonthlyCost}
                        €/kk
                      </div>
                    )}
                  </div>
                  <div className="row-apartment">
                    <div className="apartment__label">tyhjät kuukaudet </div>
                    {apartment?.emptyMonths && (
                      <div className="apartment__data">
                        {apartment?.emptyMonths}
                      </div>
                    )}
                  </div>

                  <div className="row-apartment column">
                    <div className="apartment__data column">
                      {apartment?.city} {apartment?.squareMeters}m<sup>2</sup>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default ApartmentSlide;
