import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../ContextUser";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import "./ApartmentPage.css";
import { Diversity1TwoTone } from "@mui/icons-material";
import CalculateApartmentRenovationTotal from "../../algos/CalculateApartmentRenovationTotal";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const ApartmentPage = () => {
  const { UIDinvestor, setUserdata, setPortfolioUser, logged, userdata } =
    useContext(UserContext);

  const [apartmentDetails, setApartmentDetails] = useState([]);
  const [showApartment, setShowApartment] = useState(true);
  const [renovationTotal, setRenovationTotal] = useState("");

  //kassavirta
  const [cashFlow, setCashFlow] = useState(0);

  let { apartmentID } = useParams();

  let apartmentRenovationMonthTotal = 0;

  //finds apartment from array
  useEffect(() => {
    const findApartment = userdata.filter((a) => a.id === apartmentID);
    setApartmentDetails(findApartment);
  }, []);

  //calculates renovation
  useEffect(() => {
    apartmentRenovationMonthTotal =
      CalculateApartmentRenovationTotal(apartmentDetails);
    console.log("remontti menot yhteensä", apartmentRenovationMonthTotal);
    setRenovationTotal(apartmentRenovationMonthTotal);
  }, [apartmentDetails]);

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

  //Chart line
  const years = [0, 1, 2, 3, 4, 5, 10, 15, 20];
  let data = {
    labels: [0, 1, 2, 3, 4, 5, 10, 15, 20],
    datasets: [
      {
        label: "Kassavirta tulevaisuudessa",
        data: years.map(
          (year) =>
            (apartmentDetails[0]?.monthlyRevenue -
              apartmentDetails[0]?.monthlyMaintenanceCharge -
              apartmentDetails[0]?.loanMonthlyCost) *
            12 *
            year
        ),
        fill: true,
        borderColor: "rgba(44, 189, 189, 1)",
      },
    ],
  };

  return (
    <div className="apartment-page">
      {/*  <img src="../images/apa.jpg" alt="rental" /> */}

      {/* Graph */}
      <Line data={data} />
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

        <div className="info__apartment">
          <label className="label__apartment">hoitovastikkeet: </label>
          <div> {apartmentDetails[0]?.monthlyMaintenanceCharge} €/kk </div>
        </div>
        {apartmentDetails[0]?.emptyMonths >= 0 && (
          <div className="info__apartment">
            <label className="label__apartment">tyhjät kuukaudet: </label>
            <div>{apartmentDetails[0]?.emptyMonths}</div>
          </div>
        )}

        <div className="info__apartment">
          <label className="label__apartment">lainaerä: </label>
          {apartmentDetails[0]?.loanMonthlyCost} €/kk
        </div>
        <br />
        {apartmentDetails[0]?.originalCost && (
          <div className="info__apartment">
            <label className="label__apartment">velaton hinta: </label>
            {apartmentDetails[0]?.originalCost} €
          </div>
        )}
        {apartmentDetails[0]?.transferTax && (
          <div className="info__apartment">
            <label className="label__apartment">varainsiirtovero: </label>
            {(apartmentDetails[0]?.transferTax / 100) *
              apartmentDetails[0]?.originalCost}{" "}
            €{"  "} ({apartmentDetails[0]?.transferTax}%)
          </div>
        )}
        {apartmentDetails[0]?.squareMeters && renovationTotal > 0 && (
          <div className="info__apartment">
            <label className="label__apartment">remontit yhteensä: </label>
            {renovationTotal * apartmentDetails[0]?.squareMeters} €
          </div>
        )}
        {apartmentDetails[0]?.squareMeters &&
          apartmentDetails[0]?.transferTax &&
          apartmentDetails[0]?.originalCost && (
            <div className="bold__apartment">
              <label className="label__apartment">kokonaishinta: </label>
              {apartmentDetails[0]?.originalCost +
                renovationTotal * apartmentDetails[0]?.squareMeters +
                (apartmentDetails[0]?.transferTax / 100) *
                  apartmentDetails[0]?.originalCost}{" "}
              €
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
