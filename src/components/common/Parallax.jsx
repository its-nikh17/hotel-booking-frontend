import React from 'react'
import { Container } from 'react-bootstrap'

export default function Parallax() {
    return (
        <div className="parallax mb-5">
            <Container className="text-center px-4 py-5">
                <div className="animated-texts bounceIn">
                    <h1>
                        Your Perfect Stay Awaits at <span style={{ color: "#93c5fd" }}>StaySure</span>
                    </h1>
                    <h3 className="mt-3">Premium rooms, exceptional service, unbeatable comfort</h3>
                </div>
            </Container>
        </div>
    )
}
