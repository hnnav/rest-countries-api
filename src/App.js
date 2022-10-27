import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Country from './components/Country'

export default function App() {

  const [countries, setCountries] = useState([]);

  // Fetch all countries
  const getApiData = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all"
    ).then((response) => response.json());
    setCountries(response);
  };
  useEffect(() => {
    getApiData();
  }, []);

  // Get Country Name
	const getCountryName = (code) => {
		return countries
			.filter((element) => {
				return element.cca3 === code;
			})
			.map((el, i) => el.name.common);
	};

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home countries={countries} />} />
        <Route path='/:countryName' element={<Country getCountryName={getCountryName}/>} />
      </Routes>
    </BrowserRouter>
  );
}