import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './darkMode.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Country from './components/Country'

export default function App() {

  // Fetch all countries
  const [countries, setCountries] = useState([]);
  
  const fetchAllCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json());
    setCountries(response);
  };
  useEffect(() => {
    fetchAllCountries();
  }, []);

  // Dark / Light mode
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }};
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={<Home countries={countries} />} />
        <Route path='/:countryName' element={<Country countries={countries}/>} />
      </Routes>
    </BrowserRouter>
  );
}