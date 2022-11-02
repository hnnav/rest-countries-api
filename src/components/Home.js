import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Home({ countries }) {

    const [searchInput, setSearchInput] = useState("");
    let searchHandler = (e) => {
        setSearchInput(e.target.value.toLowerCase());
    };

    const filteredCountries = countries.filter((country) => {
        if (searchInput === '') {
            return country;
        } else {
            return country.name.common.toLowerCase().includes(searchInput) || country.region.toLowerCase().includes(searchInput)
        } 
    })

    return (
        <div className="home-page">

            <div className="search-bar">
                <ion-icon name="search-outline"></ion-icon>
                <input onChange={searchHandler} name="search-input" placeholder="Search for a country..."></input>
            </div>

            <div className="filter-by-region">
                <select onChange={searchHandler} name="regions" id="regions">
                    <option value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>

            <div className="country-list">
              {countries &&
                filteredCountries.map((country) => (
                    <div className="country-container">
                    <Link to={"/" + country.name.common}>
                        <img src={country.flags.png} alt='flag'/>
                        <div className="country-text">
                            <h2>{country.name.common}</h2> 
                            <p><b>Population:</b> {country.population}</p>
                            <p><b>Region:</b> {country.region}</p>
                            <p><b>Capital:</b> {country.capital}</p>
                        </div>
                    </Link>
                  </div>
                ))}
            </div>
        </div>

    )
}
