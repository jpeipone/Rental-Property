import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../ContextUser";
import "./ApartmentPage.css";

const ApartmentPage = () => {
  const { UIDinvestor, setUserdata, setPortfolioUser, logged, userdata } =
    useContext(UserContext);

  const [apartmentDetails, setApartmentDetails] = useState([]);

  let { apartmentID } = useParams();

  //finds apartment from array
  useEffect(() => {
    const findApartment = userdata.filter((a) => a.id === apartmentID);
    setApartmentDetails(findApartment);
    console.log("asunto tiedot", findApartment);
  }, []);
  console.log("ASUNTO HOOKS", apartmentDetails);

  return (
    <div className="apartment-page">
      <h3>Asunnon tiedot</h3>
      <div className="info-container">
        <div className="address__apartment">{apartmentDetails[0]?.address}</div>
        <div className="row__apartment">
          {apartmentDetails[0]?.city && (
            <div className="info__apartment">{apartmentDetails[0]?.city} |</div>
          )}
          {apartmentDetails[0]?.squareMeters && (
            <div className="info__apartment">
              {apartmentDetails[0]?.squareMeters} m2
            </div>
          )}
        </div>
        <div className="bold__apartment">
          {apartmentDetails[0]?.monthlyRevenue} €/kk vuokra
        </div>

        {apartmentDetails[0]?.originalCost && (
          <div className="bold__apartment">
            {apartmentDetails[0]?.originalCost} €
          </div>
        )}
        <div className="info__apartment">
          hoitovastikkeet: {apartmentDetails[0]?.monthlyMaintenanceCharge} €/kk
        </div>
        {apartmentDetails[0]?.loanMonthlyCost && (
          <div className="info__apartment">
            lainaerä: {apartmentDetails[0]?.loanMonthlyCost} €/kk
          </div>
        )}

        {apartmentDetails[0]?.emptyMonths && (
          <div className="info__apartment">
            tyhjät kuukaudet {apartmentDetails[0]?.emptyMonths}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApartmentPage;
