import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../ContextUser";
import { CalculateSummary } from "../algos/CalculateSummary";
import "./SummaryApartments.css";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import CashFlowRanking from "../cashFlowRanking/CashFlowRanking";

const SummaryApartments = () => {
  const {
    userdata,
    setUserdata,
    setPortfolioUser,
    isLightMode,
    setIsLightMode,
  } = useContext(UserContext);
  const [taxValue, setTaxValue] = useState(true);
  const [usersApartmentSummary, setUsersApartmentSummary] = useState([{}]);

  //summary calculation
  useEffect(() => {
    let SummaryCalculation = CalculateSummary(userdata);
    setUsersApartmentSummary(SummaryCalculation);
  }, [userdata]);

  //link scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  //delete all apartments
  const handleDeleteAllApartments = () => {
    //deletes all apartments
    setUserdata([]);
  };

  return (
    <div
      className={
        isLightMode ? "summary-apartments-light" : "summary-apartments-dark"
      }
    >
      {usersApartmentSummary
        ? usersApartmentSummary?.map((summary) => (
            <div className="summary-container" key={summary?.id}>
              <h2 className="summary__header">Asuntojesi kooste</h2>
              {/*     In a month */}
              {/* cashflow container starts */}
              <div className="cashflow-container">
                <h4 className="cashflow__hd">Kassavirta veroton</h4>
                <div className="cashflow__value">
                  {parseFloat(
                    summary?.monthlyRevenue -
                      summary?.monthlyMaintenanceCharge -
                      summary?.loanMonthlyCost -
                      summary?.monthlyCapitalExpenditureCharge
                  ).toFixed(2)}{" "}
                  €/kk
                </div>
                <div className="cashflow__value">
                  {parseFloat(
                    summary?.monthlyRevenue * 12 -
                      summary?.monthlyMaintenanceCharge * 12 -
                      summary?.loanMonthlyCost * 12 -
                      summary?.monthlyCapitalExpenditureCharge * 12 -
                      summary?.emptyMonthsYearlyLoss
                  ).toFixed(2)}{" "}
                  €/v
                </div>
              </div>

              {/* cashflow container ends */}

              {/*  apartment number start */}
              <div
                className={
                  isLightMode ? "summary-wrapper-light" : "summary-wrapper-dark"
                }
              >
                <div className="apartment-number-row">
                  <div className="row-icons">
                    <Link to="/asunnot" onClick={handleScrollToTop}>
                      <HomeIcon className="home-icon" fontSize="large" />
                    </Link>
                    <div className="apartment-number"> x {userdata.length}</div>
                  </div>
                  <Link to="/uusi" onClick={handleScrollToTop}>
                    <AddCircleIcon className="add-icon" fontSize="large" />
                  </Link>
                  <div onClick={handleDeleteAllApartments}>
                    <DeleteForeverIcon
                      className="delete-icon"
                      fontSize="large"
                    />
                  </div>
                </div>
                {/*  apartments number ends */}

                <div className="left__summary">
                  <h4 className="summary__header">Kuukaudessa</h4>
                  <div className="summary-row">
                    <div className="summary__label">Vuokratulot</div>
                    <div className="summary__value__row">
                      {summary?.monthlyRevenue} €/kk
                    </div>
                  </div>
                  <div className="summary-row">
                    <div className="summary__label">Hoitovastikkeet</div>
                    <div className="summary__value__row">
                      {summary?.monthlyMaintenanceCharge} €/kk
                    </div>
                  </div>
                  <div className="summary-row">
                    <div className="summary__label">Rahoitusvastikkeet</div>
                    <div className="summary__value__row">
                      {summary?.monthlyCapitalExpenditureCharge} €/kk
                    </div>
                  </div>
                  <div className="summary-row">
                    <div className="summary__label">Lainaerä</div>
                    <div className="summary__value__row">
                      {summary?.loanMonthlyCost} €/kk
                    </div>
                  </div>
                </div>
                <br className="medium-br" />
                {/*     In a year */}

                <div className="left__summary">
                  <h4 className="summary__header">Vuodessa</h4>
                  <div className="summary-row">
                    <div className="summary__label">Vuokratulot</div>
                    <div className="summary__value__row">
                      {parseFloat(
                        summary?.monthlyRevenue * 12 -
                          summary?.emptyMonthsYearlyLoss
                      ).toFixed(2)}{" "}
                      €/v
                    </div>
                  </div>
                  <div className="summary-row">
                    <div className="summary__label">Hoitovastikkeet</div>
                    <div className="summary__value__row">
                      {parseFloat(
                        summary?.monthlyMaintenanceCharge * 12
                      ).toFixed(2)}{" "}
                      €/v
                    </div>
                  </div>
                  <div className="summary-row">
                    <div className="summary__label">Rahoitusvastikkeet</div>
                    <div className="summary__value__row">
                      {parseFloat(
                        summary?.monthlyCapitalExpenditureCharge * 12
                      ).toFixed(2)}{" "}
                      €/v
                    </div>
                  </div>
                  <div className="summary-row">
                    <div className="summary__label">Lainaerä</div>
                    <div className="summary__value__row">
                      {parseFloat(summary?.loanMonthlyCost * 12).toFixed(2)} €/v
                    </div>
                  </div>
                </div>
                <br />
                <div className="left__summary__second">
                  <div className="summary__second">
                    Asuntojen velaton hinta yhteensä
                  </div>
                  <div className="summary__value">
                    {summary?.originalCost} €
                  </div>
                  <div className="summary__second">
                    Asuntojen remontit yhteensä
                  </div>
                  <div className="summary__value">
                    {summary?.totalRenovationCost} €
                  </div>
                </div>
                <br className="medium-br" />
              </div>

              <h4 className="summary__header">Vuokratuotto</h4>
              <CashFlowRanking />
            </div>
          ))
        : null}
    </div>
  );
};

export default SummaryApartments;
