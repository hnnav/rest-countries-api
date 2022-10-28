import { useParams } from "react-router";
import { useEffect, useState } from "react";

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
    console.log(country)
    
    return (
        <div>
            <h1>{/* {console.log(country.name.common)} */}</h1>
            <p><b>Native Name:</b> {country.name.official}</p>
            <p><b>Population:</b> {country.population}</p>
            <p><b>Region:</b> {country.region}</p>
            <p><b>Subregion:</b> {country.subregion}</p>
            <p><b>Capital:</b> {country.capital}</p>
            <p><b>Top level domain:</b> {country.tld}</p>
            <p><b>Currencies:</b> {/* {country.currencies.bbd.name} */}</p>
            <p><b>Languages:</b> {/* {country.languages[0]} */}</p>
            <p><b>Border countries:</b> {/* {country.} */}</p>
        </div>
    )
}
