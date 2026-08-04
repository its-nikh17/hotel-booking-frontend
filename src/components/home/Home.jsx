import React from 'react'
import { useLocation } from 'react-router-dom'
import MainHeader from '../layout/MainHeader'
import RoomSearch from '../common/RoomSearch'
import RoomCarousel from '../common/RoomCarousel'
import Parallax from '../common/Parallax'
import HotelService from '../common/HotelService'

export default function Home() {
    const location = useLocation()
    const message = location.state && location.state.message
    const currentUser = localStorage.getItem("userId")

    return (
        <section>
            {message && (
                <div className="alert alert-warning mx-4 mt-3 mb-0" role="alert">
                    {message}
                </div>
            )}
            {currentUser && (
                <p className="text-success text-center mt-3 mb-0 small">
                    Signed in as {currentUser}
                </p>
            )}
            <MainHeader />
            <div className='container px-4'>
                <RoomSearch />
                <RoomCarousel />
                <Parallax />
                <HotelService />
            </div>
        </section>
    )
}
