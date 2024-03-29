import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../ContextUser";
import { CalculateSummary } from "../algos/CalculateSummary";
import "./SummaryApartments.css";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import CashFlowRanking from "../cashFlowRanking/CashFlowRanking";
import RentalincomePercentage from "../rentalincomePercentage/RentalincomePercentage";

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
              <div className="header-cashflow-month-year">
                <h2 className="summary__header__1">Asuntojesi kooste</h2>
                {/*     In a month */}
                {/* cashflow container starts */}
                <div className="cashflow-container">
                  <br className="medium-br" />
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
                <div className="apartment-number-row">
                  <div className="row-icons">
                    <Link to="/asunnot" onClick={handleScrollToTop}>
                      <HomeIcon className="home-icon" fontSize="large" />
                    </Link>

                    <Link to="/vuokratuottolaskuri" onClick={handleScrollToTop}>
                      <AddCircleIcon className="add-icon" fontSize="large" />
                    </Link>
                    <div onClick={handleDeleteAllApartments}>
                      <DeleteForeverIcon
                        className="delete-icon"
                        fontSize="large"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    isLightMode
                      ? "summary-wrapper-light"
                      : "summary-wrapper-dark"
                  }
                >
                  {/*  In a month starts */}
                  <div className="left__summary">
                    <br className="medium-br" />
                    <h4 className="summary__header">Kuukaudessa</h4>
                    <div className="summary-row">
                      <div className="summary__label">Vuokratulot</div>
                      <div className="summary__value__row">
                        {parseFloat(summary?.monthlyRevenue * 1).toFixed(2)}{" "}
                        €/kk
                      </div>
                    </div>
                    <div className="summary-row">
                      <div className="summary__label">Hoitovastikkeet</div>
                      <div className="summary__value__row">
                        {parseFloat(
                          summary?.monthlyMaintenanceCharge * 1
                        ).toFixed(2)}{" "}
                        €/kk
                      </div>
                    </div>
                    <div className="summary-row">
                      <div className="summary__label">Rahoitusvastikkeet</div>
                      <div className="summary__value__row">
                        {parseFloat(
                          summary?.monthlyCapitalExpenditureCharge * 1
                        ).toFixed(2)}{" "}
                        €/kk
                      </div>
                    </div>
                    <div className="summary-row">
                      <div className="summary__label">Lainaerä</div>
                      <div className="summary__value__row">
                        {parseFloat(summary?.loanMonthlyCost * 1).toFixed(2)}{" "}
                        €/kk
                      </div>
                    </div>
                  </div>{" "}
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
                        {parseFloat(summary?.loanMonthlyCost * 12).toFixed(2)}{" "}
                        €/v
                      </div>
                    </div>

                    <br className="medium-br" />
                  </div>
                </div>
              </div>
              <br className="medium-br" />
              <div className="container-compare-and-apartment">
                <div className="container-compare-apartments">
                  <h2 className="summary__header__2">Asuntojen vertailu</h2>
                  <br className="min-br" />
                  <div
                    className={
                      isLightMode
                        ? "compare-apartments"
                        : "compare-apartments-dark"
                    }
                  >
                    <div>
                      <h4 className="summary__header">Vuokratuottoprosentti</h4>
                      <RentalincomePercentage />
                    </div>
                    <div>
                      <h4 className="summary__header">Kassavirta vuodessa</h4>
                      <CashFlowRanking />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    isLightMode ? "bottom__summary" : "bottom__summary__dark"
                  }
                >
                  <div
                    className={
                      isLightMode
                        ? "apartments-cost-renovation"
                        : "apartments-cost-renovation__dark"
                    }
                  >
                    <h4 className="summary__header">Velaton hinta yht.</h4>
                    <div className="summary-column">
                      <div className="summary__value__column">
                        {parseFloat(summary?.originalCost * 1).toFixed(2)} €
                      </div>
                    </div>
                    <div className="summary-column">
                      <h4 className="summary__header">Remontit yht.</h4>

                      <div className="summary__value__column">
                        {parseFloat(summary?.totalRenovationCost * 1).toFixed(
                          2
                        )}{" "}
                        €
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      isLightMode
                        ? "apartments-cost-renovation__2"
                        : "apartments-cost-renovation__2__dark"
                    }
                  >
                    <h4 className="summary__header">Asuntoja</h4>
                    <div className="summary-number">{userdata.length}</div>
                  </div>
                </div>
              </div>
              <br className="medium-br" />
              <br className="medium-br" />
            </div>
          ))
        : null}
    </div>
  );
};

export default SummaryApartments;
