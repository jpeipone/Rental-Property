import React from "react";
import uniqid from "uniqid";
import CalculateApartmentRenovationTotal from "./CalculateApartmentRenovationTotal";

/**
 * Calculates summary from apartments data and returns array of object
 * @return summaryApartments
 */

export const CalculateSummary = (userdata) => {
  let monthlyRevenue = 0;
  let originalCost = 0;
  let monthlyMaintenanceCharge = 0;
  let loanMonthlyCost = 0;
  let emptyMonths = 0;
  let totalRenovationCost = 0;

  for (let i in userdata) {
    monthlyRevenue = monthlyRevenue + userdata[i]?.monthlyRevenue;
    monthlyMaintenanceCharge =
      monthlyMaintenanceCharge + userdata[i]?.monthlyMaintenanceCharge;

    //renovation total cost
    if (userdata[i]?.squareMeters) {
      totalRenovationCost =
        totalRenovationCost +
        (userdata[i]?.lineRenovation +
          userdata[i]?.pipeRepair +
          userdata[i]?.roofRepair +
          userdata[i]?.balconyRepair +
          userdata[i]?.windowRepair +
          userdata[i]?.facadeRepair +
          userdata[i]?.otherRepair) *
          userdata[i]?.squareMeters;
    }

    //empty months total
    if (userdata[i]?.emptyMonths > 0) {
      emptyMonths = userdata[i]?.emptyMonths * userdata[i]?.monthlyRevenue;
    }

    if (userdata[i]?.originalCost === null) {
      originalCost = parseFloat(originalCost + 0);
    } else {
      originalCost = parseFloat(originalCost + userdata[i]?.originalCost);
    }
    if (userdata[i]?.loanMonthlyCost === null) {
      loanMonthlyCost = parseFloat(loanMonthlyCost + 0);
    } else {
      loanMonthlyCost = parseFloat(
        loanMonthlyCost + userdata[i]?.loanMonthlyCost
      );
    }
  }

  const summaryApartments = [
    {
      id: uniqid(),
      monthlyRevenue: monthlyRevenue,
      originalCost: originalCost,
      monthlyMaintenanceCharge: monthlyMaintenanceCharge,
      loanMonthlyCost: loanMonthlyCost,
      emptyMonthsYearlyLoss: emptyMonths,
      totalRenovationCost: totalRenovationCost,
    },
  ];
  return summaryApartments;
};
