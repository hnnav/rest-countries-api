import React, { useEffect, useState } from "react";

export default function CountryList() {
  const [countries, setCountries] = useState();

  const getApiData = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all"
    ).then((response) => response.json());

    setCountries(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="country-list">
      {countries &&
        countries.map((country) => (
          <div className="country-container">
            <img src={country.flags.png} />
            <div className="country-text">
                <h2>{country.name.common}</h2> 
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
            </div>
          </div>
        ))}
    </div>
  );
}