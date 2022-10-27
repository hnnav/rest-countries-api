import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Country({ getCountryName }) {

    const countryName = useParams();
	const [country, setCountry] = useState([]);

    const fetchHandler = async () => {
		fetch(
			`https://restcountries.com/v3.1/name/${countryName.countryName}`
		)
			.then((response) => response.json())
			.then((data) => {
				setCountry(data[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	};
    useEffect(() => {
		fetchHandler();
	}, [countryName]);

    return (
        <div>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
        </div>
    )
}
