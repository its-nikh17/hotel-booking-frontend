import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../utils/ApiFunction'

export default function Registration() {
    const navigate = useNavigate()
    const registrationInfo = {
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",
    }
    const [registration, setRegistration] = useState(registrationInfo)

    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleRegistration = async (event) => {
        event.preventDefault()
        try {
            const result = await registerUser(registration)
            setSuccessMessage(result)
            setErrorMessage("")
            setRegistration(registrationInfo)
            navigate("/login", { replace: true })
        } catch (error) {
            setSuccessMessage("")
            setErrorMessage(`Registration error: ${error.message}`)
        }

        setTimeout(() => {
            setErrorMessage("")
            setSuccessMessage("")
        }, 5000)
    }

    const handleInputChange = (event) => {
        setRegistration({ ...registration, [event.target.name]: event.target.value })
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                {errorMessage && <div className="alert alert-danger py-2">{errorMessage}</div>}
                {successMessage && <div className="alert alert-success py-2">{successMessage}</div>}

                <h2>Create Account</h2>
                <p className="auth-subtitle">Join Hotel Booking and start exploring</p>

                <form onSubmit={handleRegistration}>
                    <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                className="form-control"
                                value={registration.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                className="form-control"
                                value={registration.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            value={registration.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={registration.password}
                            onChange={handleInputChange}
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-hotel w-100 mb-3">
                        Create Account
                    </button>

                    <p className="text-center text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                        Already have an account?{" "}
                        <Link to={"/login"} className="auth-footer-link">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
