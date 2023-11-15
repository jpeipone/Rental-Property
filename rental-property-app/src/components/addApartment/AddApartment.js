import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../ContextUser";
import uniqid from "uniqid";
import "./AddApartment.css";

const AddApartment = () => {
  const {
    UIDinvestor,
    setUserdata,
    setPortfolioUser,
    logged,
    userdata,
    showTempApartments,
    setTempApartments,
  } = useContext(UserContext);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [originalCost, setOriginalCost] = useState("");
  const [monthlyMaintenanceCharge, setMonthlyMaintenanceCharge] = useState("");
  const [loan, setLoan] = useState("");
  const [emptyMonths, setEmptyMonths] = useState("");
  const [squareMeters, setSquareMeters] = useState("");

  const [addedInvestment, setAddedInvestment] = useState(" ");
  const [showAll, setShowAll] = useState(false);

  const handleAddInvestment = async (event) => {
    event.preventDefault();
    if (showTempApartments === true) {
      //deletes all not users own apartments
      setTempApartments(false);
      setUserdata(userdata.splice(0, userdata.length));
    }

    const newApartment = {
      id: uniqid(),
      address: name,
      city: city,
      monthlyRevenue: monthlyRent,
      originalCost: originalCost,
      monthlyMaintenanceCharge: monthlyMaintenanceCharge,
      loanMonthlyCost: loan,
      emptyMonths: emptyMonths,
      squareMeters: squareMeters,
    };

    setUserdata([...userdata, newApartment]);
    setAddedInvestment("Tallennettu asunto");
  };

  const handleClear = () => {
    setName("");
    setCity("");
    setMonthlyRent("");
    setOriginalCost("");
    setMonthlyMaintenanceCharge("");
    setLoan("");
    setAddedInvestment(" ");
    setEmptyMonths("");
    setSquareMeters("");
  };

  return (
    <div className="add-form">
      <form onSubmit={handleAddInvestment}>
        <div className="form-container">
          <h2>Lisää asunnon tiedot</h2>
          <label className="input__label">Osoite *</label>
          <input
            type="text"
            className="input__investment"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="input__label half">Vuokra *</label>
          <input
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
          <p className="mandatory__text">* pakollinen tieto </p>
          <div className="btn__showall" onClick={() => setShowAll(!showAll)}>
            Näytä ylimääräiset
          </div>
          {showAll === true && (
            <div className="form-more">
              <label className="input__label">Kaupunki</label>
              <input
                type="text"
                className="input__investment"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <label className="input__label half">Velaton ostohinta</label>
              <input
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
                type="number"
                step="0.01"
                className="input__investment half"
                value={loan}
                onChange={(e) => {
                  const commaToSpot = e.target.value.replace(",", ".");
                  setLoan(parseFloat(commaToSpot));
                }}
              />
              <label className="input__label half">Neliömetrit</label>
              <input
                type="number"
                step="0.1"
                className="input__investment half"
                value={squareMeters}
                onChange={(e) => {
                  const commaToSpot = e.target.value.replace(",", ".");
                  setSquareMeters(parseFloat(commaToSpot));
                }}
              />
              <label className="input__label half">Tyhjät kuukaudet</label>
              <input
                type="number"
                step="1"
                min="0"
                max="12"
                className="input__investment half"
                value={emptyMonths}
                onChange={(e) => {
                  const commaToSpot = e.target.value.replace(",", ".");
                  setEmptyMonths(parseFloat(commaToSpot));
                }}
              />
            </div>
          )}

          <p className="show-saved"> {addedInvestment}</p>

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
