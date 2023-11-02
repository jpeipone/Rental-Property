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
      <h2 className="app__header">Asunnot</h2>
      <ApartmentSlide />
    </div>
  );
}

export default App;
