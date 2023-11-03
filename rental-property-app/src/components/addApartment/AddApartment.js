import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../ContextUser";
import "./AddApartment.css";

const AddApartment = () => {
  const { UIDinvestor, setUserdata, setPortfolioUser, logged, userdata } =
    useContext(UserContext);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [originalCost, setOriginalCost] = useState("");
  const [monthlyMaintenanceCharge, setMonthlyMaintenanceCharge] = useState("");
  const [loan, setLoan] = useState("");

  const [addedInvestment, setAddedInvestment] = useState(" ");

  const handleAddInvestment = async (event) => {
    event.preventDefault(); //prevents refreshing website

    const newApartment = {
      address: name,
      city: city,
      monthlyRevenue: monthlyRent,
      originalCost: originalCost,
      monthlyMaintenanceCharge: monthlyMaintenanceCharge,
      loanMonthlyCost: loan,
    };

    setUserdata([...userdata, newApartment]);

    const AddedName = "saved " + name;
    console.log("lisattiin:", newApartment);
  };

  const handleClear = () => {
    setName("");
    setCity("");
    setMonthlyRent("");
    setOriginalCost("");
    setMonthlyMaintenanceCharge("");
    setLoan("");
  };

  return (
    <div className="add-form">
      <form onSubmit={handleAddInvestment}>
        <div className="form-container">
          <h2>Lisää uusi asunto</h2>
          <label className="input__label">Osoite *</label>
          <input
            placeholder="osoite"
            type="text"
            className="input__investment"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="input__label">Kaupunki</label>
          <input
            placeholder="kaupunki"
            type="text"
            className="input__investment"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label className="input__label half">Vuokra *</label>
          <input
            placeholder="vuokra"
            type="number"
            step="any"
            className="input__investment half"
            required
            value={monthlyRent}
            onChange={(e) => {
              const commaToSpot = e.target.value.replace(",", ".");
              setMonthlyRent(parseFloat(commaToSpot));
            }}
          />

          <label className="input__label half">Hoitovastike *</label>
          <input
            placeholder="hoitovastike"
            type="number"
            step="0.01"
            className="input__investment half"
            required
            value={monthlyMaintenanceCharge}
            onChange={(e) => {
              const commaToSpot = e.target.value.replace(",", ".");
              setMonthlyMaintenanceCharge(parseFloat(commaToSpot));
            }}
          />

          <label className="input__label half">Velaton ostohinta</label>
          <input
            placeholder="velaton ostohinta"
            type="number"
            step="0.01"
            className="input__investment half"
            value={originalCost}
            onChange={(e) => {
              const commaToSpot = e.target.value.replace(",", ".");
              setOriginalCost(parseFloat(commaToSpot));
            }}
          />
          <label className="input__label half">Lainan kuukausierä</label>
          <input
            placeholder="laina"
            type="number"
            step="0.01"
            className="input__investment half"
            value={loan}
            onChange={(e) => {
              const commaToSpot = e.target.value.replace(",", ".");
              setLoan(parseFloat(commaToSpot));
            }}
          />
          <p>* pakollinen tieto</p>

          <div className="added-name">{addedInvestment}</div>
          <div className="form-buttons">
            <button className="clear__btn" onClick={handleClear}>
              Tyhjennä
            </button>
            <button className="add__btn" type="submit">
              Tallenna
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddApartment;
