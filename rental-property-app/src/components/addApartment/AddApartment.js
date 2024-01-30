import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../ContextUser";
import { Link } from "react-router-dom";
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
  const [monthlyMaintenanceCharge, setMonthlyMaintenanceCharge] = useState(""); //hoitovastike
  const [loan, setLoan] = useState(0);
  const [emptyMonths, setEmptyMonths] = useState(0);
  const [squareMeters, setSquareMeters] = useState("");

  //renovations
  const [lineRenovation, setLineRenovation] = useState(0); //linjasaneeraus
  const [pipeRepair, setPipeRepair] = useState(0); //putkir
  const [roofRepair, setRoofRepair] = useState(0); // kattor
  const [balconyRepair, setBalconyRepair] = useState(0); //parveke
  const [windowRepair, setWindowRepair] = useState(0); //ikkuna
  const [facadeRepair, setFacadeRepair] = useState(0); //julkisivu
  const [otherRepair, setOtherRepair] = useState(0); //muut remontit
  const [id, setId] = useState();

  //varainsiirtovero
  const [transferTax, setTransferTax] = useState(2);

  //rahoitus
  const [capitalExpenditureCharge, setCapitalExpenditureCharge] = useState(0); //rahoitusvastike

  const [addedInvestment, setAddedInvestment] = useState(" ");
  const [showAll, setShowAll] = useState(false);

  const handleAddInvestment = async (event) => {
    event.preventDefault();
    if (showTempApartments === true) {
      //deletes all not users own apartments
      setTempApartments(false);
      setUserdata(userdata.splice(0, userdata.length));
    }

    //Fix NaN errors if erases input
    let tempLoan = loan;

    if (isNaN(tempLoan)) {
      tempLoan = 0;
    }

    /*  let temp_monthlyMaintenanceCharge = monthlyMaintenanceCharge;
    if (isNaN(temp_monthlyMaintenanceCharge)) {
      temp_monthlyMaintenanceCharge = 0;
    } */

    let temp_emptyMonths = emptyMonths;
    if (isNaN(temp_emptyMonths)) {
      temp_emptyMonths = 0;
    }
    let temp_squareMeters = emptyMonths;
    if (isNaN(temp_squareMeters)) {
      temp_squareMeters = 0;
    }
    let temp_lineRenovation = lineRenovation;
    if (isNaN(temp_lineRenovation)) {
      temp_lineRenovation = 0;
    }
    let temp_pipeRepair = pipeRepair;
    if (isNaN(temp_pipeRepair)) {
      temp_pipeRepair = 0;
    }
    let temp_roofRepair = roofRepair;
    if (isNaN(temp_roofRepair)) {
      temp_roofRepair = 0;
    }
    let temp_balconyRepair = balconyRepair;
    if (isNaN(temp_balconyRepair)) {
      temp_balconyRepair = 0;
    }
    let temp_windowRepair = windowRepair;
    if (isNaN(temp_windowRepair)) {
      temp_windowRepair = 0;
    }
    let temp_facadeRepair = facadeRepair;
    if (isNaN(temp_facadeRepair)) {
      temp_facadeRepair = 0;
    }
    let temp_otherRepair = otherRepair;
    if (isNaN(temp_otherRepair)) {
      temp_otherRepair = 0;
    }

    let temp_capitalExpenditureCharge = capitalExpenditureCharge;
    if (isNaN(temp_capitalExpenditureCharge)) {
      temp_capitalExpenditureCharge = 0;
    }
    /*   cashFlowMonthlyNoTax
    renovationTotal,
     totalCostWithTransferTax */

    //NaN error ends

    //kassavirta
    const cashFlowMonthlyNoTax = parseFloat(
      monthlyRent -
        monthlyMaintenanceCharge -
        tempLoan -
        temp_capitalExpenditureCharge
    ).toFixed(2);

    const renovationTotal = (
      parseFloat(
        temp_lineRenovation +
          temp_pipeRepair +
          temp_roofRepair +
          temp_balconyRepair +
          temp_windowRepair +
          temp_facadeRepair +
          temp_otherRepair
      ) * temp_squareMeters
    ).toFixed(2);

    if (renovationTotal === null) {
      renovationTotal = 0;
    }

    // varainsiirtovero
    let totalCostWithTransferTax = (
      parseFloat(originalCost * transferTax) / 100
    ).toFixed(2);

    let newId = uniqid();
    setId(newId);
    const newApartment = {
      id: newId,
      address: name,
      city: city,
      monthlyRevenue: monthlyRent,
      originalCost: originalCost,
      monthlyMaintenanceCharge: monthlyMaintenanceCharge,
      loanMonthlyCost: tempLoan,
      emptyMonths: temp_emptyMonths,
      squareMeters: temp_squareMeters,
      lineRenovation: temp_lineRenovation,
      pipeRepair: temp_pipeRepair,
      roofRepair: temp_roofRepair,
      balconyRepair: temp_balconyRepair,
      windowRepair: temp_windowRepair,
      facadeRepair: temp_facadeRepair,
      otherRepair: temp_otherRepair,
      transferTax: transferTax,
      cashFlowMonthlyNoTax: cashFlowMonthlyNoTax,
      renovationTotalM2: renovationTotal,
      totalCostWithTransferTax: totalCostWithTransferTax,
      capitalExpenditureCharge: temp_capitalExpenditureCharge,
    };
    console.log("new apartment", newApartment);
    setUserdata([...userdata, newApartment]);
    setAddedInvestment("Tarkastele asuntoa");
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
    setId("");
  };

  //Tax radio buttons
  const handleRadioTax = (value) => {
    setTransferTax(value);
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
            /* value={monthlyRent} */
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
            /*  value={monthlyMaintenanceCharge} */
            onChange={(e) => {
              const commaToSpot = e.target.value.replace(",", ".");
              setMonthlyMaintenanceCharge(parseFloat(commaToSpot));
            }}
          />
          <label className="input__label half">Velaton ostohinta *</label>
          <input
            type="number"
            step="0.01"
            className="input__investment half"
            required
            /*  value={originalCost} */
            onChange={(e) => {
              const commaToSpot = e.target.value.replace(",", ".");
              setOriginalCost(parseFloat(commaToSpot));
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

              {/*  Radio buttons transfer tax */}
              <label className="input__label half">
                Varainsiirto veroprosentti
              </label>
              <label>
                <input
                  type="radio"
                  value="2"
                  name="taxGroup"
                  className="radio__btn"
                  checked={transferTax === 2}
                  onChange={(e) => {
                    const tax = 2;
                    setTransferTax(parseFloat(tax));
                  }}
                />{" "}
                2 % Asunto-osake
              </label>
              <label>
                <input
                  type="radio"
                  value="4"
                  name="taxGroup"
                  className="radio__btn"
                  checked={transferTax === 4}
                  onChange={(e) => {
                    const tax = 4;
                    setTransferTax(parseFloat(tax));
                  }}
                />{" "}
                4 % Kiinteistö
              </label>
              <label className="input__label half">Lainan kuukausierä</label>
              <input
                type="number"
                step="0.01"
                className="input__investment half"
                /*  value={loan} */
                onChange={(e) => {
                  const commaToSpot = e.target.value.replace(",", ".");
                  setLoan(parseFloat(commaToSpot));
                }}
              />
              {/*  rahoitusvastike */}
              <label className="input__label half">Rahoitusvastike</label>
              <input
                type="number"
                step="0.01"
                className="input__investment half"
                /*  value={loan} */
                onChange={(e) => {
                  const commaToSpot = e.target.value.replace(",", ".");
                  setCapitalExpenditureCharge(parseFloat(commaToSpot));
                }}
              />

              <label className="input__label half">Neliömetrit</label>
              <input
                type="number"
                step="0.01"
                className="input__investment half"
                /* value={squareMeters} */
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
                /*  value={emptyMonths} */
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
                  step="0.01"
                  className="input__investment half"
                  /*  value={lineRenovation} */
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
                  step="0.01"
                  className="input__investment half"
                  /* value={pipeRepair} */
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
                  step="0.01"
                  className="input__investment half"
                  /*    value={roofRepair} */
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
                  step="0.01"
                  className="input__investment half"
                  /*   value={balconyRepair} */
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
                  step="0.01"
                  className="input__investment half"
                  /*   value={windowRepair} */
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
                  step="0.01"
                  className="input__investment half"
                  /*    value={facadeRepair} */
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
                  step="0.01"
                  className="input__investment half"
                  /*     value={otherRepair} */
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

          <Link to={`/asunto/${id}`}>
            {id && <button className="show-saved"> {addedInvestment}</button>}
          </Link>
          <div className="form-buttons">
            {/*  <button className="clear__btn" onClick={handleClear}>
              Tyhjennä
            </button> */}

            <button className="add__btn" type="submit">
              Laske
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddApartment;
