import React from 'react'
import BrandLogo from './BrandLogo'
import Header from "./Header"
import { Container, Row, Col, Card } from "react-bootstrap"
import {
    FaClock,
    FaCocktail,
    FaParking,
    FaSnowflake,
    FaTshirt,
    FaUtensils,
    FaWifi
} from "react-icons/fa"

const services = [
    { icon: FaWifi, title: "High-Speed WiFi", desc: "Stay connected with complimentary high-speed internet throughout the hotel." },
    { icon: FaUtensils, title: "Breakfast Buffet", desc: "Start your day with a delicious and varied breakfast spread." },
    { icon: FaTshirt, title: "Laundry Service", desc: "Keep your wardrobe fresh with our professional laundry service." },
    { icon: FaCocktail, title: "In-Room Mini-bar", desc: "Enjoy refreshing drinks and snacks from your in-room mini-bar." },
    { icon: FaParking, title: "Free Parking", desc: "Convenient on-site parking available for all guests." },
    { icon: FaSnowflake, title: "Air Conditioning", desc: "Climate-controlled rooms for your comfort in any season." },
]

export default function HotelService() {
    return (
        <section className="mb-5">
            <Header title="Our Services" />

            <Container className="mt-4">
                <div className="text-center mb-4">
                    <h4 className="section-title">
                        Amenities at <BrandLogo showIcon={false} />
                    </h4>
                    <p className="section-subtitle mt-2">
                        <FaClock className="me-2 hotel-color" />
                        24-Hour Front Desk &bull; Everything you need for a comfortable stay
                    </p>
                </div>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {services.map(({ icon: Icon, title, desc }) => (
                        <Col key={title}>
                            <Card className="service-card">
                                <Card.Body className="p-4">
                                    <Card.Title className="hotel-color">
                                        <Icon size={20} /> {title}
                                    </Card.Title>
                                    <Card.Text className="text-muted mt-2">{desc}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
