import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Detail from './components/Detail'
import CountryList from './components/CountryList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <CountryList />
    </div>
  );
}

export default App;