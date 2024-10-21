import { useState } from "react";
import { Link } from "react-router-dom";
import "./CooperationList.css";

function CooperationList() {
  const [countries, setCountries] = useState(() => {
    const savedCountries = JSON.parse(localStorage.getItem("cooperations")) || [];
    return savedCountries;
  });

  const handleDelete = (countryName) => {
    const confirmDelete = window.confirm(`Are you sure you want to remove ${countryName} from cooperation?`);
    if (confirmDelete) {
      const updatedCountries = countries.filter((country) => country.name !== countryName);
      setCountries(updatedCountries);
      localStorage.setItem("cooperations", JSON.stringify(updatedCountries));
    }
  };

  return (
    <div className="cooperation-list">
      <h1>Cooperation Countries List</h1>
      {countries.length === 0 ? (
        <div className="text-no-cooperation">No Cooperation Countries Available.</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Country Name</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
              <tr key={country.name}>
                <td>{index + 1}</td>
                <td>
                  <span>{country.name}</span>
                </td>
                <td>
                  <button onClick={() => handleDelete(country.name)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CooperationList;
