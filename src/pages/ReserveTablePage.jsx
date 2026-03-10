import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Footer from './Footer';

const ReserveTablePage = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    people: '1',
    preference: 'Veg',
    date: '',
    time: ''
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      // Handle actual reservation logic here
      alert(`Reservation Successful for ${formData.name}! We'll prepare the best ${formData.preference} dishes for your table of ${formData.people}.`);
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="bg-primary text-white py-5 mb-5" style={{ borderRadius: '20px', marginTop: '20px' }}>
        <Container className="text-center">
          <h1 className="display-4 fw-bold">Reserve a Table</h1>
          <p className="lead mb-0">Book your table in advance and skip the line.</p>
        </Container>
      </div>

      <Container className="my-5 py-4">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="border-0 shadow-sm" style={{ borderRadius: '20px' }}>
              <Card.Body className="p-4 p-md-5">
                <h3 className="fw-bold mb-4 text-center">Reservation Details</h3>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  
                  {/* Customer Name */}
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Label className="fw-semibold">Customer Name</Form.Label>
                    <Form.Control 
                      required 
                      type="text" 
                      placeholder="Enter your full name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ padding: '0.8rem', borderRadius: '10px' }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Number of People */}
                  <Form.Group className="mb-4" controlId="formPeople">
                    <Form.Label className="fw-semibold">Number of People</Form.Label>
                    <Form.Select 
                      required
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                      style={{ padding: '0.8rem', borderRadius: '10px' }}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6+">6+ People</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Veg / Non-Veg Preference */}
                  <Form.Group className="mb-4" controlId="formPreference">
                    <Form.Label className="fw-semibold">Food Preference</Form.Label>
                    <div className="d-flex gap-4">
                      <Form.Check 
                        type="radio"
                        id="pref-veg"
                        label="Vegetarian 🥗"
                        name="preference"
                        value="Veg"
                        checked={formData.preference === 'Veg'}
                        onChange={handleChange}
                      />
                      <Form.Check 
                        type="radio"
                        id="pref-non-veg"
                        label="Non-Vegetarian 🍗"
                        name="preference"
                        value="Non-Veg"
                        checked={formData.preference === 'Non-Veg'}
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>

                  <Row>
                    {/* Date */}
                    <Col sm={6}>
                      <Form.Group className="mb-4" controlId="formDate">
                        <Form.Label className="fw-semibold">Date</Form.Label>
                        <Form.Control 
                          required 
                          type="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          style={{ padding: '0.8rem', borderRadius: '10px' }}
                        />
                         <Form.Control.Feedback type="invalid">
                          Please select a date.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    {/* Time */}
                    <Col sm={6}>
                      <Form.Group className="mb-5" controlId="formTime">
                        <Form.Label className="fw-semibold">Time</Form.Label>
                        <Form.Control 
                          required 
                          type="time" 
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          style={{ padding: '0.8rem', borderRadius: '10px' }}
                        />
                         <Form.Control.Feedback type="invalid">
                          Please select a time.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="d-grid mt-2">
                    <Button variant="primary" size="lg" type="submit" style={{ padding: '0.8rem', borderRadius: '10px' }}>
                      Confirm Reservation
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </>
  );
};

export default ReserveTablePage;
