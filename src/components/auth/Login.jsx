import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { loginUser } from '../utils/ApiFunction'
import { useAuth } from './AuthProvider'

export default function Login() {
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectUrl = location.state?.path || "/"

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const [errorMessage, setErrorMessage] = useState("")

    const handleInputChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const success = await loginUser(login)
        if (success) {
            const token = success.token
            auth.handleLogin(token)
            navigate(redirectUrl, { replace: true })
        } else {
            setErrorMessage("Invalid email or password. Please try again.")
        }

        setTimeout(() => {
            setErrorMessage("")
        }, 4000)
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                {errorMessage && <div className="alert alert-danger py-2">{errorMessage}</div>}

                <h2>Welcome Back</h2>
                <p className="auth-subtitle">Sign in to your Hotel Booking account</p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            value={login.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            value={login.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-hotel w-100 mb-3">
                        Sign In
                    </button>

                    <p className="text-center text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                        Don't have an account?{" "}
                        <Link to={"/register"} className="auth-footer-link">Create one</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
