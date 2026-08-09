import React, { useState, createContext, useContext, useEffect } from 'react'
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext({
    user: null,
    handleLogin: (token) => { },
    handleLogout: () => { }
})

export const useAuth = () => {
    return useContext(AuthContext)
}

const storeAuthData = (decodedUser, token) => {
    const roles = decodedUser.roles
    localStorage.setItem("userId", decodedUser.sub)
    localStorage.setItem("userRole", Array.isArray(roles) ? roles.join(",") : roles)
    localStorage.setItem("token", token)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            return
        }

        try {
            const decodedUser = jwt_decode(token)
            setUser(decodedUser)
        } catch (error) {
            localStorage.removeItem("userId")
            localStorage.removeItem("userRole")
            localStorage.removeItem("token")
        }
    }, [])

    const handleLogin = (token) => {
        const decodedUser = jwt_decode(token)
        storeAuthData(decodedUser, token)
        setUser(decodedUser)
    }

    const handleLogout = () => {
        localStorage.removeItem("userId")
        localStorage.removeItem("userRole")
        localStorage.removeItem("token")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}