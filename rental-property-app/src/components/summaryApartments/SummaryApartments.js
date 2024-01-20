import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../ContextUser";
import { CalculateSummary } from "../algos/CalculateSummary";
import "./SummaryApartments.css";
import HomeIcon from "@mui/icons-material/Home";

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
              {/*     In a month */}
              <div className="summary-wrapper">
                <div className="left__summary">
                  <h3 className="summary__header">Kuukaudessa</h3>
                  <div className="summary__label">Vuokratulot</div>
                  <div className="summary__value">
                    {summary?.monthlyRevenue} €/kk
                  </div>
                  <div className="summary__label">Yhtiövastikkeet</div>
                  <div className="summary__value">
                    {summary?.monthlyMaintenanceCharge} €/kk
                  </div>
                  <div className="summary__label">lainaerä</div>
                  <div className="summary__value">
                    {summary?.loanMonthlyCost} €/kk
                  </div>
                  <button
                    className="change-tax__btn"
                    onClick={() => {
                      setTaxValue(!taxValue);
                    }}
                  >
                    veroprosentti{" "}
                  </button>
                </div>
                <div className="right__summary">
                  <div className="circle__label">Kassavirta</div>
                  {/* true tax 30% false 34% for cashflow */}
                  {taxValue ? (
                    <div>
                      <div className="circle__value">
                        {parseFloat(
                          (summary?.monthlyRevenue -
                            summary?.monthlyMaintenanceCharge -
                            summary?.loanMonthlyCost) *
                            0.7
                        ).toFixed(2)}{" "}
                        €
                      </div>
                      <div className="circle__label tax">(vero 30%)</div>
                    </div>
                  ) : (
                    <div>
                      <div className="circle__value">
                        {parseFloat(
                          (summary?.monthlyRevenue -
                            summary?.monthlyMaintenanceCharge -
                            summary?.loanMonthlyCost) *
                            0.66
                        ).toFixed(2)}{" "}
                        €
                      </div>
                      <div className="circle__label tax">(vero 34%)</div>
                    </div>
                  )}
                  {/* cashflow tax ends */}
                </div>
              </div>

              {/*     In a year */}
              <div className="summary-wrapper">
                <div className="left__summary">
                  <h3 className="summary__header">Vuodessa</h3>
                  <div className="summary__label">Vuokratulot</div>
                  <div className="summary__value">
                    {summary?.monthlyRevenue * 12 -
                      summary?.emptyMonthsYearlyLoss}{" "}
                    €/vuosi
                  </div>
                  <div className="summary__label">Hoitovastikkeet</div>
                  <div className="summary__value">
                    {summary?.monthlyMaintenanceCharge * 12} €/vuosi
                  </div>
                  <div className="summary__label">lainaerä</div>
                  <div className="summary__value">
                    {summary?.loanMonthlyCost * 12} €/vuosi
                  </div>
                  <button
                    className="change-tax__btn"
                    onClick={() => {
                      setTaxValue(!taxValue);
                    }}
                  >
                    veroprosentti{" "}
                  </button>
                </div>
                <div className="right__summary">
                  {" "}
                  <div className="circle__label">Kassavirta</div>
                  {/* true tax 30% false 34% for cashflow */}
                  {taxValue ? (
                    <div>
                      <div className="circle__value">
                        {parseFloat(
                          (summary?.monthlyRevenue * 12 -
                            summary?.monthlyMaintenanceCharge * 12 -
                            summary?.loanMonthlyCost * 12 -
                            summary?.emptyMonthsYearlyLoss) *
                            0.7
                        ).toFixed(2)}{" "}
                        €
                      </div>
                      <div className="circle__label tax">(vero 30%)</div>
                    </div>
                  ) : (
                    <div>
                      <div className="circle__value">
                        {parseFloat(
                          (summary?.monthlyRevenue * 12 -
                            summary?.monthlyMaintenanceCharge * 12 -
                            summary?.loanMonthlyCost * 12 -
                            summary?.emptyMonthsYearlyLoss) *
                            0.66
                        ).toFixed(2)}{" "}
                        €
                      </div>
                      <div className="circle__label tax">(vero 34%)</div>
                    </div>
                  )}
                  {/* cashflow tax ends */}
                </div>
              </div>
              <div className="summary-wrapper">
                <div className="left__summary__second">
                  <h3 className="summary__header">Asunnoista</h3>
                  <div className="summary__second">
                    Asuntojen velatonhinta yhteensä
                  </div>
                  <div className="summary__value">
                    {summary?.originalCost} €
                  </div>
                  <div className="apartment-number-row">
                    <HomeIcon className="home-icon" fontSize="large" />
                    <div className="apartment-number"> x {userdata.length}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default SummaryApartments;
