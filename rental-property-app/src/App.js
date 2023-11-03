import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/banner/Banner";
import NavigationMenu from "./components/navigation/NavigationMenu";
import ApartmentSlide from "./components/apartmentSlide/ApartmentSlide";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import AddApartment from "./components/addApartment/AddApartment";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/asunnot" element={<ApartmentSlide />} />
          <Route path="/uusi" element={<AddApartment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
