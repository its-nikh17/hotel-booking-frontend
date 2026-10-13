import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import BrandLogo from '../common/BrandLogo'

export default function Footer() {
    const today = new Date()
    return (
        <footer className="footer text-light py-3">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} className="text-center">
                        <p className="mb-0">
                            <span className="footer-brand">
                                <BrandLogo showIcon={false} variant="footer" />
                            </span>
                            <span className="footer-tagline ms-2">
                                &mdash; Find your perfect stay
                            </span>
                        </p>
                        <p className="footer-tagline mb-0 mt-1" style={{ fontSize: "0.8rem" }}>
                            &copy; {today.getFullYear()} StaySure. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
