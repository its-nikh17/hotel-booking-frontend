import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { getAllRooms } from "../utils/ApiFunction";

export default function RoomCarousel() {
  const [rooms, setRooms] = useState([
    { id: "", roomType: "", roomPrice: 0, photo: null },
  ]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    setIsLoading(true);
    try {
      const result = await getAllRooms();
      setRooms(result);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <div className="text-center py-5 text-muted">Loading rooms...</div>;
  }

  if (errorMessage) {
    return (
      <div className="text-danger mb-5 mt-5 text-center">
        Error: {errorMessage}
      </div>
    );
  }

  return (
    <section className="rooms-section mb-5 mt-5">
      <Container>
        <div className="text-center mb-4">
          <h4 className="section-title">Featured Rooms</h4>
          <Link to={"/browse-all-rooms"} className="section-link">
            View all rooms &rarr;
          </Link>
        </div>

        <Carousel indicators={false}>
          {[...Array(Math.ceil(rooms.length / 4))].map((_, index) => (
            <Carousel.Item key={index}>
              <Row className="g-4 px-2">
                {rooms.slice(index * 4, index * 4 + 4).map((room) => (
                  <Col key={room.id} xs={12} md={6} lg={3}>
                    <Card className="h-100">
                      <Link to={`/book-room/${room.id}`}>
                        <Card.Img
                          variant="top"
                          src={`data:image/png;base64, ${room.photo}`}
                          alt="Room Photo"
                          className="w-100"
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                      </Link>
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="hotel-color fw-semibold">
                          {room.roomType}
                        </Card.Title>
                        <Card.Text className="room-price mb-3">
                          ₹{room.roomPrice} / night
                        </Card.Text>
                        <div className="mt-auto">
                          <Link
                            to={`/book-room/${room.id}`}
                            className="btn btn-hotel btn-sm w-100"
                          >
                            Book Now
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
