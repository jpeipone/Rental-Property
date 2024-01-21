import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../ContextUser";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import "./ApartmentPage.css";
import { Diversity1TwoTone } from "@mui/icons-material";

const ApartmentPage = () => {
  const { UIDinvestor, setUserdata, setPortfolioUser, logged, userdata } =
    useContext(UserContext);

  const [apartmentDetails, setApartmentDetails] = useState([]);
  const [showApartment, setShowApartment] = useState(true);

  let { apartmentID } = useParams();

  //finds apartment from array
  useEffect(() => {
    const findApartment = userdata.filter((a) => a.id === apartmentID);
    setApartmentDetails(findApartment);
  }, []);

  const imagePath = "images/apa.jpg";

  const handleDeleteApartment = (id) => {
    if (id) {
      const findIndex = userdata?.findIndex(
        (apartment) => apartment?.id === id
      );
      if (findIndex !== -1) {
        setUserdata(userdata?.filter((apartment) => apartment.id !== id));
        setShowApartment(false);
      }
    }
  };

  return (
    <div className="apartment-page">
      <img src="../images/apa.jpg" alt="rental" />

      <div className="info-container">
        {!showApartment && <div className="address__apartment">Poistettu</div>}
        <div className="address__apartment">{apartmentDetails[0]?.address}</div>
        <div className="row__apartment">
          <div className="info__apartment">{apartmentDetails[0]?.city}</div>{" "}
          <div className="info__apartment">
            {" "}
            {apartmentDetails[0]?.squareMeters}
          </div>
          {apartmentDetails[0]?.squareMeters && (
            <div className="info__apartment__m">
              m<sup>2</sup>
            </div>
          )}
        </div>
        <div className="bold__apartment__rent">
          {apartmentDetails[0]?.monthlyRevenue} €/kk
        </div>

        {apartmentDetails[0]?.originalCost && (
          <div className="bold__apartment">
            {apartmentDetails[0]?.originalCost} €
          </div>
        )}
        <div className="info__apartment">
          hoitovastikkeet: {apartmentDetails[0]?.monthlyMaintenanceCharge} €/kk
        </div>

        <div className="info__apartment">
          lainaerä: {apartmentDetails[0]?.loanMonthlyCost} €/kk
        </div>

        {apartmentDetails[0]?.emptyMonths >= 0 && (
          <div className="info__apartment">
            tyhjät kuukaudet: {apartmentDetails[0]?.emptyMonths}
          </div>
        )}
      </div>

      <div className="buttons-row">
        <Link to="/uusi">
          <div className="column__icon__text">
            <AddCircleIcon className="icon-symbol" />
            Uusi
          </div>
        </Link>

        <div
          className="column__icon__text"
          onClick={() => handleDeleteApartment(apartmentDetails[0]?.id)}
        >
          <HighlightOffIcon className="icon-symbol" />
          Poista
        </div>

        <Link to="/">
          <div className="column__icon__text">
            <HomeIcon className="icon-symbol" />
            Etusivu
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ApartmentPage;
