import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Country({ countries }) {

    const [country, setCountry] = useState([]);
    const countryName = useParams();

    const fetchOneCountry = async () => {
        await fetch(`https://restcountries.com/v3.1/name/${countryName.countryName}`)
        .then((response) => response.json())
        .then((data) => setCountry(data[0]))
    };
    useEffect(() => {
        fetchOneCountry(); // eslint-disable-next-line
	}, []);

    // Get country name from country code
    const getCountryName = (code) => {
		return countries
			.filter((element) => {
				return element.cca3 === code;
			})
			.map((el) => el.name.common);
	};

    return (
        <div className="country-detail">
            <Link to="/">
                <button className="back-button"><ion-icon name="arrow-back-outline"></ion-icon> Back</button>
            </Link>
            <div className="flag-and-text">
                <img className="detail-page-flag" src={country.name ? country.flags.png : null} alt='flag'></img>

                <div className="detail-page-text">
                    <h1>{country.name ? country.name.common : null}</h1>
                    <p><b>Native Name:</b> {country.name ? Object.entries(country.name.nativeName).map((item) => {
			        										return item[1].common;
			        									}).shift(0) : null}</p>
                    <p><b>Population:</b> {country.population}</p>
                    <p><b>Region:</b> {country.region}</p>
                    <p><b>Subregion:</b> {country.subregion}</p>
                    <p><b>Capital:</b> {country.capital}</p>
                    <p><b>Top level domain:</b> {country.tld}</p>
                    <p><b>Currencies:</b> {country.currencies ? Object.entries(country.currencies).map((currency) => {
			        										return currency[1].name;
			        									}) : null}</p>
                    <p><b>Languages:</b> {country.languages ? Object.entries(country.languages).map((language) => {
			        										return language[1];
			        									}).join(', ') : null}</p>

                    {country.borders ? <p className="border-title"><b>Border countries:</b></p> : null} 
                    
                    <div className="border-container">
                    {country.borders ? Object.entries(country.borders).map((countryCode) => {
                        const countryName = getCountryName(countryCode[1])
                        /* return  <a href={"/" + countryName}>
                                    <div className="border-item">{countryName}</div>
                                </a>; */
                        return  <Link to={"/" + countryName}>
                                    <div className="border-item" >{countryName}</div>
                                </Link>
                        }) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}