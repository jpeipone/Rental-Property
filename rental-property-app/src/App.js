import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/banner/Banner";
import NavigationMenu from "./components/navigation/NavigationMenu";
import ApartmentSlide from "./components/apartmentSlide/ApartmentSlide";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import AddApartment from "./components/addApartment/AddApartment";
import ApartmentPage from "./components/pages/apartmentPage/ApartmentPage";
import SummaryApartments from "./components/summaryApartments/SummaryApartments";
import FooterData from "./components/FooterData";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import AllApartmentsPage from "./components/pages/allApartments/AllApartmentsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/asunnot" element={<AllApartmentsPage />} />
          <Route path="/vuokratuottolaskuri" element={<AddApartment />} />
          <Route path="/asunto/:apartmentID" element={<ApartmentPage />} />
          <Route path="/tiivistelma" element={<SummaryApartments />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <FooterData />
      </Router>
    </div>
  );
}

export default App;
