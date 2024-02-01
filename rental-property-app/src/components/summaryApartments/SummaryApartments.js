import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../ContextUser";
import { CalculateSummary } from "../algos/CalculateSummary";
import "./SummaryApartments.css";
import HomeIcon from "@mui/icons-material/Home";
import CashFlowRanking from "../cashFlowRanking/CashFlowRanking";

const SummaryApartments = () => {
  const { userdata, setUserdata, setPortfolioUser } = useContext(UserContext);
  const [taxValue, setTaxValue] = useState(true);
  const [usersApartmentSummary, setUsersApartmentSummary] = useState([{}]);

  //summary calculation
  useEffect(() => {
    let SummaryCalculation = CalculateSummary(userdata);
    setUsersApartmentSummary(SummaryCalculation);
  }, [userdata]);

  return (
    <div className="summary-apartments">
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
              <div className="summary-wrapper">
                <div className="left__summary__second">
                  <div className="apartment-number-row">
                    <HomeIcon className="home-icon" fontSize="large" />
                    <div className="apartment-number"> x {userdata.length}</div>
                  </div>
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
                {/*  apartments number ends */}

                <div className="left__summary">
                  <h3 className="summary__header">Kuukaudessa</h3>
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
                  <h3 className="summary__header">Vuodessa</h3>
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
              </div>
              <h3 className="summary__header">Vuokratuotto</h3>
              <CashFlowRanking />
            </div>
          ))
        : null}
    </div>
  );
};

export default SummaryApartments;
