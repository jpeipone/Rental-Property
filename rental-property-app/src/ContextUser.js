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
    },
    {
      id: "2",
      address: "Kings Cross 34",
      city: "Savonlinna",
      monthlyRevenue: 340,
      monthlyMaintenanceCharge: 420,
      squareMeters: 60,
      originalCost: 45500,
      loanMonthlyCost: 0,
    },
    {
      id: "3",
      address: "Ylisoutajankatu 8D",
      city: "Tampere",
      monthlyRevenue: 456,
      monthlyMaintenanceCharge: 85,
      squareMeters: 18,
      originalCost: 79500,
      loanMonthlyCost: 100,
    },
    {
      id: "4",
      address: "Yliopistokatu 367 F 35",
      city: "Kuopio",
      monthlyRevenue: 890,
      monthlyMaintenanceCharge: 156,
      squareMeters: 70,
      originalCost: 79500,
      loanMonthlyCost: 310,
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextUser;
