import React from "react";

const CalculateApartmentRenovationTotal = (apartment) => {
  let renovationTotalMonth = 0;

  if (apartment) {
    renovationTotalMonth =
      apartment[0]?.lineRenovation +
      apartment[0]?.pipeRepair +
      apartment[0]?.roofRepair +
      apartment[0]?.balconyRepair +
      apartment[0]?.windowRepair +
      apartment[0]?.facadeRepair +
      apartment[0]?.otherRepair;
  }

  return renovationTotalMonth;
};

export default CalculateApartmentRenovationTotal;
