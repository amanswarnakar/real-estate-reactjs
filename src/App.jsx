import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Search from "./components/Search";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Search />
      <Filters />
      <div className="App flex flex-wrap p-4">
        <Cards />
      </div>
    </div>
  );
}

export default App;
