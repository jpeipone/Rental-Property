import { useContext } from "react";
import { UserContext } from "../../../ContextUser";
import { Link } from "react-router-dom";
import ApartmentSlide from "../../apartmentSlide/ApartmentSlide";
import "./AllApartmentsPage.css";

const AllApartmentsPage = () => {
  const { isLightMode } = useContext(UserContext);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div
      className={isLightMode ? "all-apartments-light" : "all-apartments-dark"}
    >
      <br />
      <h2 className="all-apartments__header">Asunnot</h2>

      <div className="add-new-apartment">
        <Link to="/uusi" onClick={handleScrollToTop}>
          <div className="add__text">Lisää asunto</div>
        </Link>
      </div>

      <ApartmentSlide />
    </div>
  );
};

export default AllApartmentsPage;
