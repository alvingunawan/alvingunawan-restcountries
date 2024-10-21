import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryList from "./pages/CountryList";
import CountryDetail from "./pages/CountryDetail";
import CooperationList from "./pages/CooperationList";
import NavbarCountries from "./components/NavbarCountries";
import "./App.css";

function App() {
  return (
    <Router>
      <NavbarCountries />
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/countries/:id" element={<CountryDetail />} />
        <Route path="/cooperation-list" element={<CooperationList />} />
      </Routes>
    </Router>
  );
}

export default App;
