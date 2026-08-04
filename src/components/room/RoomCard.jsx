import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RoomCard({ room }) {
    return (
        <Col>
            <Card className="mb-3">
                <Card.Body className="d-flex flex-wrap align-items-center p-4">
                    <div className="flex-shrink-0 me-3 mb-3 mb-md-0">
                        <Link to={`/book-room/${room.id}`}>
                            <Card.Img
                                variant='top'
                                src={`data:image/png;base64, ${room.photo}`}
                                alt="Room Photo"
                                style={{
                                    width: "200px",
                                    height: "150px",
                                    objectFit: "cover",
                                    borderRadius: "8px"
                                }}
                            />
                        </Link>
                    </div>

                    <div className="flex-grow-1">
                        <Card.Title className="hotel-color fw-semibold mb-1">{room.roomType}</Card.Title>
                        <Card.Text className="room-price mb-2">${room.roomPrice} / night</Card.Text>
                        <Card.Text className="text-muted small">Comfortable room with modern amenities for a relaxing stay.</Card.Text>
                    </div>

                    <div className="flex-shrink-0 mt-3 mt-md-0">
                        <Link to={`/book-room/${room.id}`} className="btn btn-hotel">
                            Book Now
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}
