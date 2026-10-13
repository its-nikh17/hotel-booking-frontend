import React from 'react'
import BrandLogo from '../common/BrandLogo'

export default function MainHeader() {
    return (
        <header className='header-banner'>
            <div className="overlay"></div>
            <div className="animated-texts overlay-content">
                <h1>
                    Welcome to <BrandLogo showIcon={false} variant="hero" />
                </h1>
                <h4>Discover comfort, elegance, and unforgettable stays</h4>
            </div>
        </header>
    )
}
