import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CountryDetail.css";

function CountryDetail() {
  const { id } = useParams(); // Mengambil ID dari URL
  const [country, setCountry] = useState(null);

  useEffect(() => {
    // Fetch data negara berdasarkan ID
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0])); // Ambil data negara pertama
  }, [id]); // Jalankan setiap kali ID berubah

  if (!country) return <div className="loading-text">Loading...</div>;

  const handleAddCooperation = () => {
    const existingCooperations = JSON.parse(localStorage.getItem("cooperations")) || [];
    const newCooperation = { name: country.name.common };

    // Cek apakah negara sudah ada dalam daftar sebelum menjalankan probabilitas
    const isAlreadyCooperating = existingCooperations.some((cooperation) => cooperation.name === newCooperation.name);

    if (isAlreadyCooperating) {
      alert(`${country.name.common} Already Cooperate with you.`);
    } else {
      // Probabilitas 50% untuk keberhasilan
      const success = Math.random() < 0.5; // 50%

      if (success) {
        existingCooperations.push(newCooperation);
        localStorage.setItem("cooperations", JSON.stringify(existingCooperations));
        alert(`${country.name.common} Cooperation Success,
This Country want to Cooperate with you.`);
      } else {
        alert(`Cooperation Failed,
This Country Rejected your Request.`);
      }
    }
  };

  return (
    <div className="country-detail">
      <div className="country-content-wrapper">
        <h1>{country.name.common}</h1>
        <div className="flag-coat">
          <div className="flag">
            <h3>Country Flag</h3>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
          </div>
          <div className="coat-of-arms">
            <h3>Coat of Arms</h3>
            <img src={country.coatOfArms.png} alt={`${country.name.common} coat of arms`} />
          </div>
        </div>
        <p>Capital: {country.capital}</p>
        <p>Language: {Object.values(country.languages).join(", ")}</p>
        <p>
          Currency:{" "}
          {Object.values(country.currencies)
            .map((currency) => currency.name)
            .join(", ")}
        </p>
        <p>Independent: {country.independent ? "Yes" : "No"}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Subregion: {country.subregion}</p>
        <a href={`https://www.google.com/maps/search/?api=1&query=${country.name.common}`} target="_blank" rel="noopener noreferrer" className="google-maps-link">
          Google Maps
        </a>
        <button onClick={handleAddCooperation} className="cooperation-add-button">
          Cooperation
        </button>
        <Link to="/" className="back-to-list">
          Back to List
        </Link>
      </div>
    </div>
  );
}

export default CountryDetail;
