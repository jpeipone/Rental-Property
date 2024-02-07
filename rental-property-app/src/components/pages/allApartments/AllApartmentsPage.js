import { useContext } from "react";
import { UserContext } from "../../../ContextUser";
import { Link } from "react-router-dom";
import ApartmentSlide from "../../apartmentSlide/ApartmentSlide";
import "./AllApartmentsPage.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const AllApartmentsPage = () => {
  const { isLightMode, userdata, setUserdata } = useContext(UserContext);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  //delete all apartments
  const handleDeleteAllApartments = () => {
    //deletes all apartments
    setUserdata([]);
  };

  return (
    <div
      className={isLightMode ? "all-apartments-light" : "all-apartments-dark"}
    >
      <br />
      <h2 className="all-apartments__header">Asunnot</h2>

      <div className="container-add-delete">
        <div className="add-new-apartment">
          <Link to="/uusi" onClick={handleScrollToTop}>
            <div className="add__text">Lisää asunto</div>
          </Link>
        </div>
        <div
          className="homepage-delete-all"
          onClick={handleDeleteAllApartments}
        >
          <DeleteForeverIcon fontSize="large" /> {"x"} {userdata.length}
        </div>
      </div>

      <ApartmentSlide />
    </div>
  );
};

export default AllApartmentsPage;
