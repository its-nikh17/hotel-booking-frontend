import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { FaBed, FaCalendarCheck } from 'react-icons/fa'

export default function Admin() {
    return (
        <section className="admin-panel container">
            <div className="mb-4">
                <h2 className="section-title">Admin Panel</h2>
                <p className="section-subtitle">Manage rooms and bookings for StaySure</p>
            </div>

            <Row className="g-4">
                <Col xs={12} md={6}>
                    <Link to={"/existing-rooms"} className="admin-card">
                        <FaBed size={28} className="hotel-color mb-3" />
                        <h5>Manage Rooms</h5>
                        <p>Add, edit, or remove hotel rooms and update pricing.</p>
                    </Link>
                </Col>
                <Col xs={12} md={6}>
                    <Link to={"/existing-bookings"} className="admin-card">
                        <FaCalendarCheck size={28} className="hotel-color mb-3" />
                        <h5>Manage Bookings</h5>
                        <p>View and manage all guest reservations and confirmations.</p>
                    </Link>
                </Col>
            </Row>
        </section>
    )
}
