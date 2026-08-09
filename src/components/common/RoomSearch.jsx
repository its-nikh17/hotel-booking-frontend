import React, { useState } from 'react'
import moment from 'moment'
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import { FaSearch } from 'react-icons/fa'
import RoomSearchResult from './RoomSearchResult'
import RoomTypeSelector from './RoomTypeSelector'
import { getAvailableRooms } from '../utils/ApiFunction'

export default function RoomSearch() {
  const initialSearchQuery = {
    checkInDate: "",
    checkOutDate: "",
    roomType: ""
  }
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery)

  const [availableRooms, setAvailableRooms] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = (event) => {
    event.preventDefault()

    const checkInMoment = moment(searchQuery.checkInDate)
    const checkOutMoment = moment(searchQuery.checkOutDate)

    if (!checkInMoment.isValid() || !checkOutMoment.isValid()) {
      setErrorMessage("Please enter valid dates")
      return
    }

    if (!checkOutMoment.isSameOrAfter(checkInMoment)) {
      setErrorMessage("Check-out date must be after check-in date")
      return
    }

    setIsLoading(true)

    getAvailableRooms(searchQuery.checkInDate, searchQuery.checkOutDate, searchQuery.roomType)
      .then((rooms) => {
        setAvailableRooms(rooms)
        setErrorMessage(rooms.length === 0 ? "No rooms available for the selected dates and room type." : "")
      })
      .catch((error) => {
        setErrorMessage(error.message)
        setAvailableRooms([])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSearchQuery({ ...searchQuery, [name]: value })

    const checkInDate = moment(searchQuery.checkInDate)
    const checkOutDate = moment(searchQuery.checkOutDate)
    if (checkInDate.isValid() && checkOutDate.isValid()) {
      setErrorMessage("")
    }
  }

  const handleClearSearch = () => {
    setSearchQuery(initialSearchQuery)
    setAvailableRooms([])
  }

  return (
    <Container className="search-box mb-5 px-4 py-4">
      <h5 className="section-title mb-1">Find Your Room</h5>
      <p className="section-subtitle mb-4">Search available rooms by date and type</p>

      <Form onSubmit={handleSearch}>
        <Row className="g-3 align-items-end">
          <Col xs={12} md={3}>
            <Form.Group controlId="checkInDate">
              <Form.Label>Check-in Date</Form.Label>
              <Form.Control
                type="date"
                name="checkInDate"
                value={searchQuery.checkInDate}
                onChange={handleInputChange}
                min={moment().format("YYYY-MM-DD")}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={3}>
            <Form.Group controlId="checkOutDate">
              <Form.Label>Check-out Date</Form.Label>
              <Form.Control
                type="date"
                name="checkOutDate"
                value={searchQuery.checkOutDate}
                onChange={handleInputChange}
                min={moment().format("YYYY-MM-DD")}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={3}>
            <Form.Group controlId="roomType">
              <Form.Label>Room Type</Form.Label>
              <RoomTypeSelector
                handleRoomInputChange={handleInputChange}
                newRoom={searchQuery}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={3}>
            <Button type="submit" className="btn btn-hotel w-100">
              <FaSearch className="me-2" /> Search
            </Button>
          </Col>
        </Row>
      </Form>

      {isLoading ? (
        <p className="mt-4 text-muted">Finding available rooms...</p>
      ) : (
        <RoomSearchResult results={availableRooms} onClearSearch={handleClearSearch} />
      )}

      {errorMessage && <p className="text-danger mt-3 mb-0">{errorMessage}</p>}
    </Container>
  )
}
