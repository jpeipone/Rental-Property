import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../ContextUser";
import uniqid from "uniqid";
import "./AddApartment.css";

/**
 * Form for adding aparment data
 */

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
  const [monthlyRent, setMonthlyRent] = useState(""); //kuukausivuokra
  const [originalCost, setOriginalCost] = useState(""); //velaton ostohinta
  const [monthlyMaintenanceCharge, setMonthlyMaintenanceCharge] = useState(""); //yhtiövastike
  const [loan, setLoan] = useState("");
  const [emptyMonths, setEmptyMonths] = useState(0);
  const [squareMeters, setSquareMeters] = useState("");

  //renovations
  const [lineRenovation, setLineRenovation] = useState(""); //linjasaneeraus
  const [pipeRepair, setPipeRepair] = useState(""); //putkir
  const [roofRepair, setRoofRepair] = useState(""); // kattor
  const [balconyRepair, setBalconyRepair] = useState(""); //parveke
  const [windowRepair, setWindowRepair] = useState(""); //ikkuna
  const [facadeRepair, setFacadeRepair] = useState(""); //julkisivu
  const [otherRepair, setOtherRepair] = useState(""); //muut remontit

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
      lineRenovation: lineRenovation,
      pipeRepair: pipeRepair,
      roofRepair: roofRepair,
      balconyRepair: balconyRepair,
      windowRepair: windowRepair,
      facadeRepair: facadeRepair,
      otherRepair: otherRepair,
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
    setLineRenovation("");
    setPipeRepair("");
    setRoofRepair("");
    setBalconyRepair("");
    setWindowRepair("");
    setFacadeRepair("");
    setOtherRepair("");
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

          <label className="input__label half">Yhtiövastike *</label>
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
            Näytä lisätiedot
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
              {/* Remontit */}
              <h3 className="decoration__hd">Remontit</h3>
              {/*   Linjasaneeraus */}
              <label className="input__label half">Linjasaneeraus</label>
              <div className="decoration-row">
                <input
                  type="number"
                  step="0.1"
                  className="input__investment half"
                  value={lineRenovation}
                  onChange={(e) => {
                    const commaToSpot = e.target.value.replace(",", ".");
                    setLineRenovation(parseFloat(commaToSpot));
                  }}
                />
                <label className="squaremeter__label">
                  €/m<sup>2</sup>
                </label>
              </div>
              {/*   Putkiremontti */}
              <label className="input__label half">Putki</label>
              <div className="decoration-row">
                <input
                  type="number"
                  step="0.1"
                  className="input__investment half"
                  value={pipeRepair}
                  onChange={(e) => {
                    const commaToSpot = e.target.value.replace(",", ".");
                    setPipeRepair(parseFloat(commaToSpot));
                  }}
                />
                <label className="squaremeter__label">
                  €/m<sup>2</sup>
                </label>
              </div>
              {/*   Kattoremontti */}
              <label className="input__label half">Katto</label>
              <div className="decoration-row">
                <input
                  type="number"
                  step="0.1"
                  className="input__investment half"
                  value={roofRepair}
                  onChange={(e) => {
                    const commaToSpot = e.target.value.replace(",", ".");
                    setRoofRepair(parseFloat(commaToSpot));
                  }}
                />
                <label className="squaremeter__label">
                  €/m<sup>2</sup>
                </label>
              </div>
              {/*   Parvekeremontti */}
              <label className="input__label half">Parveke</label>
              <div className="decoration-row">
                <input
                  type="number"
                  step="0.1"
                  className="input__investment half"
                  value={balconyRepair}
                  onChange={(e) => {
                    const commaToSpot = e.target.value.replace(",", ".");
                    setBalconyRepair(parseFloat(commaToSpot));
                  }}
                />
                <label className="squaremeter__label">
                  €/m<sup>2</sup>
                </label>
              </div>
              {/*   Ikkunaremontti */}
              <label className="input__label half">Ikkuna</label>
              <div className="decoration-row">
                <input
                  type="number"
                  step="0.1"
                  className="input__investment half"
                  value={windowRepair}
                  onChange={(e) => {
                    const commaToSpot = e.target.value.replace(",", ".");
                    setWindowRepair(parseFloat(commaToSpot));
                  }}
                />
                <label className="squaremeter__label">
                  €/m<sup>2</sup>
                </label>
              </div>
              {/*   Julkisivuremontti */}
              <label className="input__label half">Julkisivu</label>
              <div className="decoration-row">
                <input
                  type="number"
                  step="0.1"
                  className="input__investment half"
                  value={facadeRepair}
                  onChange={(e) => {
                    const commaToSpot = e.target.value.replace(",", ".");
                    setFacadeRepair(parseFloat(commaToSpot));
                  }}
                />
                <label className="squaremeter__label">
                  €/m<sup>2</sup>
                </label>
              </div>
              {/*   Omat */}
              <label className="input__label half">Muut remontit</label>
              <div className="decoration-row">
                <input
                  type="number"
                  step="0.1"
                  className="input__investment half"
                  value={otherRepair}
                  onChange={(e) => {
                    const commaToSpot = e.target.value.replace(",", ".");
                    setOtherRepair(parseFloat(commaToSpot));
                  }}
                />
                <label className="squaremeter__label">
                  €/m<sup>2</sup>
                </label>
              </div>
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
