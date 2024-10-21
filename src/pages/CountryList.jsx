import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch data dari API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1 className="h1Countries">List of Countries</h1>
      <ul className="country-container">
        {countries.map((country) => (
          <li key={country.cca3} className="country-card">
            <Link to={`/countries/${country.cca3}`}>
              <img src={country.flags.png} alt={`${country.name.common} flag`} />
              <p>{country.name.common}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
