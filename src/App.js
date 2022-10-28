import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Country from './components/Country'

export default function App() {

  const [countries, setCountries] = useState([]);

  const fetchAllCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json());
    setCountries(response);
  };
  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home countries={countries} />} />
        <Route path='/:countryName' element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}