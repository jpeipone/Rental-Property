import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../ContextUser";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import "./ApartmentPage.css";
import CalculateApartmentRenovationTotal from "../../algos/CalculateApartmentRenovationTotal";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Switch } from "@mui/material";

const ApartmentPage = () => {
  const {
    UIDinvestor,
    setUserdata,
    setPortfolioUser,
    logged,
    userdata,
    isLightMode,
  } = useContext(UserContext);

  const [apartmentDetails, setApartmentDetails] = useState([]);
  const [showApartment, setShowApartment] = useState(true);
  const [renovationTotal, setRenovationTotal] = useState("");

  //kassavirta
  const [cashFlow, setCashFlow] = useState(0);
  const [showMonthly, setShowMonthly] = useState(true);

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
    //console.log("remontti menot yhteensä", apartmentRenovationMonthTotal);
    setRenovationTotal(apartmentRenovationMonthTotal);
  }, [apartmentDetails]);

  //kassavirta kk

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

  //link scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  //Chart line
  const years = [0, 1, 2, 3, 4, 5, 10, 15, 20, 25];
  let data = {
    labels: [0, 1, 2, 3, 4, 5, 10, 15, 20, 25],
    datasets: [
      {
        label: "Kassavirta veroton (€/vuosi)",
        data: years.map(
          (year) =>
            parseFloat(
              apartmentDetails[0]?.cashFlowMonthlyNoTax * 12 -
                parseFloat(
                  apartmentDetails[0]?.monthlyRevenue *
                    apartmentDetails[0]?.emptyMonths
                )
            ).toFixed(2) * year
        ),
        fill: true,
        borderColor: "rgba(31, 81, 255, 1)",
        backgroundColor: "rgba(31,81,255,0.2)",
      },
    ],
  };

  const handleMonthOrYear = () => {
    setShowMonthly(!showMonthly);
  };

  return (
    <div
      className={isLightMode ? "apartment-page-light" : "apartment-page-dark"}
    >
      <div className="apartment-page">
        {/* Graph */}
        <Line data={data} />
        <div className="info-container">
          {!showApartment && (
            <div className="address__apartment__deleted">Poistettu</div>
          )}

          <div className="address__apartment">
            {apartmentDetails[0]?.address}
          </div>

          <div className="row__apartment">
            {showMonthly && (
              <div className="bold__apartment__rent">
                {apartmentDetails[0]?.monthlyRevenue} €/kk
              </div>
            )}
            {!showMonthly && (
              <div className="bold__apartment__rent">
                {parseFloat(
                  apartmentDetails[0]?.monthlyRevenue *
                    (12 - apartmentDetails[0]?.emptyMonths)
                ).toFixed(2)}{" "}
                €/v
              </div>
            )}
            <div className="switch-row">
              <div className="month-or-year">kk</div>
              <Switch
                checked={!showMonthly}
                onChange={handleMonthOrYear}
                inputProps={{ "arial-label": "controlled" }}
              />
              <div className="month-or-year">vuosi</div>
            </div>
          </div>

          <div className="info__apartment">
            <label className="label__apartment">Hoitovastike </label>
            <div className="detail__apartment">
              {showMonthly && (
                <div>
                  {" "}
                  {apartmentDetails[0]?.monthlyMaintenanceCharge} €/kk{" "}
                </div>
              )}
              {!showMonthly && (
                <div>
                  {parseFloat(
                    apartmentDetails[0]?.monthlyMaintenanceCharge * 12
                  ).toFixed(2)}{" "}
                  €/v
                </div>
              )}
            </div>
          </div>

          <div className="info__apartment">
            <label className="label__apartment">Rahoitusvastike</label>
            <div className="detail__apartment">
              {showMonthly && (
                <div>
                  {" "}
                  {apartmentDetails[0]?.capitalExpenditureCharge} €/kk{" "}
                </div>
              )}
              {!showMonthly && (
                <div>
                  {parseFloat(
                    apartmentDetails[0]?.capitalExpenditureCharge * 12
                  ).toFixed(2)}{" "}
                  €/v
                </div>
              )}
            </div>
          </div>

          <div className="info__apartment">
            <label className="label__apartment">Lainaerä</label>
            <div className="detail__apartment">
              {showMonthly && (
                <div> {apartmentDetails[0]?.loanMonthlyCost} €/kk </div>
              )}
              {!showMonthly && (
                <div>
                  {parseFloat(
                    apartmentDetails[0]?.loanMonthlyCost * 12
                  ).toFixed(2)}{" "}
                  €/v
                </div>
              )}
            </div>
          </div>
          {apartmentDetails[0]?.emptyMonths >= 0 && (
            <div className="info__apartment">
              <label className="label__apartment">Tyhjät kuukaudet</label>
              <div className="detail__apartment">
                {apartmentDetails[0]?.emptyMonths} kk
              </div>
            </div>
          )}
          {/* cashflow monthly */}

          <div className="bold__apartment">
            <label className="label__apartment">Kassavirta</label>
            {showMonthly && (
              <div className="detail__apartment">
                {apartmentDetails[0]?.cashFlowMonthlyNoTax} €/kk
              </div>
            )}
            {!showMonthly && (
              <div className="detail__apartment">
                {parseFloat(
                  apartmentDetails[0]?.cashFlowMonthlyNoTax * 12 -
                    parseFloat(
                      apartmentDetails[0]?.monthlyRevenue *
                        apartmentDetails[0]?.emptyMonths
                    )
                ).toFixed(2)}{" "}
                €/v
              </div>
            )}
          </div>

          <span className="medium-br" />
          {apartmentDetails[0]?.originalCost && (
            <div className="info__apartment">
              <label className="label__apartment">Velaton hinta</label>
              <div className="detail__apartment">
                {apartmentDetails[0]?.originalCost} €
              </div>
            </div>
          )}
          {apartmentDetails[0]?.transferTax && (
            <div className="info__apartment">
              <label className="label__apartment">Varainsiirtovero</label>
              <div className="detail__apartment">
                {apartmentDetails[0]?.totalCostWithTransferTax} €{"  "} (
                {apartmentDetails[0]?.transferTax}%)
              </div>
            </div>
          )}

          <div className="info__apartment">
            <label className="label__apartment">Remontit yht.</label>
            <div className="detail__apartment">
              {(renovationTotal * apartmentDetails[0]?.squareMeters).toFixed(2)}{" "}
              €
            </div>
          </div>

          {apartmentDetails[0]?.transferTax &&
            apartmentDetails[0]?.originalCost && (
              <div className="bold__apartment">
                <label className="label__apartment">Kokonaishinta</label>
                <div className="detail__apartment">
                  {(
                    apartmentDetails[0]?.originalCost +
                    renovationTotal * apartmentDetails[0]?.squareMeters +
                    (apartmentDetails[0]?.transferTax / 100) *
                      apartmentDetails[0]?.originalCost
                  ).toFixed(2)}{" "}
                  €
                </div>
              </div>
            )}
          <span className="medium-br" />
          {/*  vuokratuottoprosentti */}
          <div className="bold__apartment">
            <label className="label__apartment">Vuokratuotto</label>
            <div className="detail__apartment">
              {parseFloat(
                (((apartmentDetails[0]?.monthlyRevenue -
                  apartmentDetails[0]?.monthlyMaintenanceCharge) *
                  12) /
                  (apartmentDetails[0]?.originalCost +
                    parseFloat(apartmentDetails[0]?.totalCostWithTransferTax) +
                    parseFloat(apartmentDetails[0]?.renovationTotalM2))) *
                  100
              ).toFixed(2)}{" "}
              %
            </div>
          </div>
          <div className="row__apartment">
            <div className="info__apartment">{apartmentDetails[0]?.city}</div>{" "}
            <div className="info__apartment">
              {" "}
              {apartmentDetails[0]?.squareMeters}
            </div>
            <div className="info__apartment__m">
              m<sup>2</sup>
            </div>
          </div>
        </div>

        <div className="buttons-row">
          <Link to="/asunnot" onClick={handleScrollToTop}>
            <div className="column__icon__text">
              <HomeIcon className="icon-symbol" fontSize="large" />
              Asunnot
            </div>
          </Link>
          <Link to="/uusi" onClick={handleScrollToTop}>
            <div className="column__icon__text">
              <AddCircleIcon className="icon-symbol" fontSize="large" />
              Uusi
            </div>
          </Link>

          <div
            className="column__icon__text"
            onClick={() => handleDeleteApartment(apartmentDetails[0]?.id)}
          >
            <DeleteForeverIcon className="icon-symbol" fontSize="large" />
            Poista
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentPage;
