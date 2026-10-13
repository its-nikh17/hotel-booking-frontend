import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaUserShield } from 'react-icons/fa'
import BrandLogo from '../common/BrandLogo'
import Logout from '../auth/Logout'

export default function NavBar() {
    const isLoggedIn = localStorage.getItem("token")
    const userRole = localStorage.getItem("userRole")
    const isAdmin = (userRole || "").includes("ROLE_ADMIN")

    const [showAccount, setShowAccount] = useState(false)

    const handleAccountClick = () => {
        setShowAccount(!showAccount)
    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top shadow-sm">
            <div className="container-fluid px-4">

                <Link to={"/"} className="navbar-brand d-flex align-items-center">
                    <BrandLogo />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/browse-all-rooms"}>
                                Browse Rooms
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="d-flex navbar-nav align-items-lg-center">
                        {isLoggedIn && isAdmin && (
                            <li className="nav-item me-lg-2 my-2 my-lg-0">
                                <Link to={"/admin"} className="btn btn-hotel btn-sm px-3">
                                    <FaUserShield className="me-1" /> Admin Panel
                                </Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/find-booking"}>
                                Find Booking
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${showAccount ? "show" : ""}`}
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={handleAccountClick}
                            >
                                Account
                            </a>

                            <ul
                                className={`dropdown-menu dropdown-menu-end ${showAccount ? "show" : ""}`}
                                aria-labelledby="navbarDropdown"
                            >
                                {isLoggedIn ? (
                                    <Logout />
                                ) : (
                                    <li>
                                        <Link className="dropdown-item" to={"/login"}>
                                            Login
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
