import React from 'react'

export default function MainHeader() {
    return (
        <header className='header-banner'>
            <div className="overlay"></div>
            <div className="animated-texts overlay-content">
                <h1>
                    Welcome to <span className="hotel-color" style={{ color: "#93c5fd" }}>Hotel Booking</span>
                </h1>
                <h4>Discover comfort, elegance, and unforgettable stays</h4>
            </div>
        </header>
    )
}
