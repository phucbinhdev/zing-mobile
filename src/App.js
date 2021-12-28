import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderBar from "./components/HeaderBar";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";

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
