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

  const [apartmentDetails, setApartmentDetails] = useState([]);

  const handleDeleteApartment = (id) => {
    if (id) {
      const findIndex = userdata?.findIndex(
        (apartment) => apartment?.id === id
      );
      if (findIndex !== -1) {
        setUserdata(userdata?.filter((apartment) => apartment.id !== id));
      }
    }
  };

  return (
    <div className="apartment-slide">
      <div className="apartment-grid">
        {/*  apartment card */}
        {userdata
          ? userdata?.map((apartment) => (
              <div className="apartment-container card" id={apartment?.id}>
                <div className="header-container">
                  <h3 className="apartment__header">{apartment?.address}</h3>
                </div>
                <div className="column-apartment">
                  <div className="apartment__rent__hd">vuokra</div>

                  <div className="apartment__rent">
                    {apartment?.monthlyRevenue} €/kk
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
                    {apartment?.city}
                  </div>
                  <div className="apartment__data column">
                    {apartment?.squareMeters}m2
                  </div>
                </div>

                <div className="row-btn">
                  <Link to="/asunto">
                    <button className="show-apartment__btn">katso</button>
                  </Link>
                  <button
                    className="delete-apartment__btn"
                    onClick={() => handleDeleteApartment(apartment?.id)}
                  >
                    Poista
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ApartmentSlide;
