import "./App.css";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Search />
      <Filters />
      <Footer />
    </div>
  );
}

export default App;
