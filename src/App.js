import "./App.css";
import HeaderBar from "./components/HeaderBar";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <MainSection />
      <NavBar />
    </div>
  );
}

export default App;
