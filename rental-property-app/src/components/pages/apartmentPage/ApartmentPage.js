import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../ContextUser";

const ApartmentPage = () => {
  const { UIDinvestor, setUserdata, setPortfolioUser, logged, userdata } =
    useContext(UserContext);
  return <div>AparmentPage</div>;
};

export default ApartmentPage;
