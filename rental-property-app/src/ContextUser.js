import { useContext, createContext, useState } from "react";

export const UserContext = createContext();
const ContextUser = ({ children }) => {
  const [userdata, setUserdata] = useState([
    {
      id: "1",
      address: "Kissankatu 67",
      city: "Helsinki",
      monthlyRevenue: 578,
      monthlyMaintenanceCharge: 264.4,
      squareMeters: 32,
      originalCost: 230500,
      loanMonthlyCost: 1100,
      emptyMonths: 0,
      lineRenovation: 0,
      pipeRepair: 0,
      roofRepair: 70,
      balconyRepair: 0,
      windowRepair: 0,
      facadeRepair: 0,
      otherRepair: 0,
      transferTax: 2,
      cashFlowMonthlyNoTax: -786.4,
      renovationTotalM2: 2240,
      totalCostWithTransferTax: 4610,
      capitalExpenditureCharge: 0,
    },
    {
      id: "2",
      address: "Mallikatu 34",
      city: "Savonlinna",
      monthlyRevenue: 340,
      monthlyMaintenanceCharge: 420,
      squareMeters: 60,
      originalCost: 45500,
      loanMonthlyCost: 0,
      emptyMonths: 3,
      lineRenovation: 0,
      pipeRepair: 0,
      roofRepair: 0,
      balconyRepair: 0,
      windowRepair: 0,
      facadeRepair: 0,
      otherRepair: 0,
      transferTax: 2,
      cashFlowMonthlyNoTax: -80,
      renovationTotalM2: 0,
      totalCostWithTransferTax: 910,
      capitalExpenditureCharge: 0,
    },
    {
      id: "3",
      address: "Ylisoutajankatu 8D",
      city: "Tampere",
      monthlyRevenue: 456,
      monthlyMaintenanceCharge: 85,
      squareMeters: 18,
      originalCost: 59500,
      loanMonthlyCost: 100,
      emptyMonths: 0,
      lineRenovation: 0,
      pipeRepair: 0,
      roofRepair: 0,
      balconyRepair: 0,
      windowRepair: 0,
      facadeRepair: 0,
      otherRepair: 0,
      transferTax: 2,
      cashFlowMonthlyNoTax: 271,
      renovationTotalM2: 0,
      totalCostWithTransferTax: 1190,
      capitalExpenditureCharge: 0,
    },
    {
      id: "4",
      address: "Yliopistokatu 367",
      city: "Kuopio",
      monthlyRevenue: 890,
      monthlyMaintenanceCharge: 356,
      squareMeters: 70,
      originalCost: 79500,
      loanMonthlyCost: 310,
      emptyMonths: 0,
      lineRenovation: 0,
      pipeRepair: 0,
      roofRepair: 0,
      balconyRepair: 0,
      windowRepair: 0,
      facadeRepair: 0,
      otherRepair: 0,
      transferTax: 2,
      cashFlowMonthlyNoTax: 224,
      renovationTotalM2: 0,
      totalCostWithTransferTax: 1590,
      capitalExpenditureCharge: 0,
    },
  ]);
  const [logged, setLogged] = useState(false);
  const [UIDinvestor, setUIDinvestor] = useState(null);
  const [portfolioUser, setPortfolioUser] = useState({
    AssetsSum: 2,
    NegativeAssetsSum: 0,
    PositiveAssetsSum: 2,
    TotalCost: 142,
    TotalValue: 1220,
  });
  const [showTempApartments, setTempApartments] = useState(true);

  return (
    <UserContext.Provider
      value={{
        userdata,
        setUserdata,
        logged,
        setLogged,
        UIDinvestor,
        setUIDinvestor,
        portfolioUser,
        setPortfolioUser,
        showTempApartments,
        setTempApartments,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextUser;
