import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar">
            <h3>Where in the world?</h3>
            <div className="dark-mode-toggle">
                <ion-icon name="moon-outline"></ion-icon>
                <p>Dark Mode</p>
            </div>
        </div>
    )
}
