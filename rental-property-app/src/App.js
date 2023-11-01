import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/banner/Banner";
import NavigationMenu from "./components/navigation/NavigationMenu";
import ApartmentSlide from "./components/apartmentSlide/ApartmentSlide";

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Banner />
      <ApartmentSlide />
    </div>
  );
}

export default App;
