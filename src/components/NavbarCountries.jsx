import { Link } from "react-router-dom";
import "./NavbarCountries.css";

export default function NavbarCountries() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cooperation-list">Cooperation List</Link>
        </li>
      </ul>
    </nav>
  );
}
