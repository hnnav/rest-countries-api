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
	}, [countryName]);

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

                {country.name && 
                    <div className="detail-page-text">
                        <h1>{country.name.common}</h1> 
                        <p><b>Native Name: </b>
                        {Object.entries(country.name.nativeName).map((item) => {
			    										return item[1].common}).shift(0)}</p>
                        <p><b>Population:</b> {country.population}</p>
                        <p><b>Region:</b> {country.region}</p>
                        <p><b>Subregion:</b> {country.subregion}</p>
                        <p><b>Capital:</b> {country.capital}</p>
                        <p><b>Top level domain:</b> {country.tld}</p>
                        <p><b>Currencies:</b> {Object.entries(country.currencies).map((currency) => {
                                                                return currency[1].name}).join(', ')}</p>
                        <p><b>Languages:</b> {Object.entries(country.languages).map((language) => {
                                                                return language[1]}).join(', ')}</p>
                        {country.borders && 
                            <div>
                                <p className="border-title"><b>Border countries:</b></p>
                                <div className="border-container">
                                    {Object.entries(country.borders).map((countryCode) => {
                                    const countryName = getCountryName(countryCode[1])
                                    return  <Link to={"/" + countryName}>
                                                <div className="border-item">{countryName}</div>
                                            </Link>
                                    })}
                                </div>
                            </div>
                        } 
                    </div>
                }
            </div>
        </div>
    )
}