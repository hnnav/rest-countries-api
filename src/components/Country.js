import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Country() {

    const [country, setCountry] = useState([]);
    const countryName = useParams();

    
    const fetchOneCountry = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName.countryName}`)
        .then((response) => response.json())
        .then((data) => setCountry(data[0]))
    };
    useEffect(() => {
        fetchOneCountry(); // eslint-disable-next-line
	}, []);
    
    return (
        <div className="country-detail">
            <Link to="/">
                <button className="back-button"><ion-icon name="arrow-back-outline"></ion-icon> Back</button>
            </Link>
            <img className="detail-page-flag" src={country.name ? country.flags.png : null}></img>

            <div className="detail-page-text">
                <h1>{country.name ? country.name.common : null}</h1>
                <p><b>Native Name:</b> {country.name ? Object.entries(country.name.nativeName).map((item) => {
			    										return item[1].official;
			    									}) : null}</p>
                <p><b>Population:</b> {country.population}</p>
                <p><b>Region:</b> {country.region}</p>
                <p><b>Subregion:</b> {country.subregion}</p>
                <p><b>Capital:</b> {country.capital}</p>
                <p><b>Top level domain:</b> {country.tld}</p>
                <p><b>Currencies:</b> {country.currencies ? Object.entries(country.currencies).map((item) => {
			    										return item[1].name;
			    									}) : null}</p>
                <p><b>Languages:</b> {country.languages ? Object.entries(country.languages).map((item) => {
			    										return item[1];
			    									}) : null}</p>
                <p><b>Border countries:</b> </p>
            </div>
        </div>
    )
}
