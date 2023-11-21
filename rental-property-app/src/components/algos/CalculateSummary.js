import React from "react";
import uniqid from "uniqid";

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

  for (let i in userdata) {
    monthlyRevenue = monthlyRevenue + userdata[i]?.monthlyRevenue;
    monthlyMaintenanceCharge =
      monthlyMaintenanceCharge + userdata[i]?.monthlyMaintenanceCharge;
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
    },
  ];
  return summaryApartments;
};
