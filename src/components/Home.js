import React from 'react'

export default function Home() {
    return (
        <div className="home-page">
            <div className="search-bar">
                <ion-icon name="search-outline"></ion-icon>
                <input name="search-input" placeholder="Search for a country..."></input>
            </div>
            
            <div className="filter-by-region">
                <select name="regions" id="regions">
                    <option value="default">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}
