import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Footer from './Footer';

const ContactPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      // Handle the form submission (e.g., API call) here
      alert('Thank you for contacting us! We will get back to you shortly.');
      form.reset();
      setValidated(false);
      return;
    }
    setValidated(true);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5 mb-5" style={{ borderRadius: '20px', marginTop: '20px' }}>
        <Container className="text-center">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead mb-0">We'd love to hear from you. Reach out with any questions or feedback!</p>
        </Container>
      </div>

      <Container className="my-5 py-4">
        <Row className="mb-5">
          {/* Contact Information & Map */}
          <Col lg={5} className="mb-5 mb-lg-0 pe-lg-5">
            <h2 className="fw-bold mb-4">Get in Touch</h2>
            <p className="text-muted mb-5 fs-5">
              Have a question about our menu, reservations, or just want to say hi? Drop us a line or visit us at our location.
            </p>
            
            <div className="d-flex mb-4 align-items-center">
              <div className="bg-primary text-white rounded-circle p-3 me-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h5 className="mb-1 fw-bold">Our Location</h5>
                <p className="text-muted mb-0">123 Culinary Avenue, Food City, FC 90210</p>
              </div>
            </div>

            <div className="d-flex mb-4 align-items-center">
              <div className="bg-primary text-white rounded-circle p-3 me-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h5 className="mb-1 fw-bold">Phone Number</h5>
                <p className="text-muted mb-0">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="d-flex mb-4 align-items-center">
              <div className="bg-primary text-white rounded-circle p-3 me-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                <FaEnvelope size={20} />
              </div>
              <div>
                <h5 className="mb-1 fw-bold">Email Address</h5>
                <p className="text-muted mb-0">hello@bitesrestaurant.com</p>
              </div>
            </div>
            
            {/* Embedded Google Map */}
            <div className="mt-5 rounded overflow-hidden shadow-sm" style={{ height: '300px' }}>
              <iframe 
                title="Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d100939.98555098464!2d-122.50764017948534!3d37.75781499660172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <Card className="border-0 shadow-sm h-100" style={{ borderRadius: '20px' }}>
              <Card.Body className="p-4 p-md-5">
                <h3 className="fw-bold mb-4">Send Us a Message</h3>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4" controlId="contactFirstName">
                        <Form.Label className="fw-semibold">First Name</Form.Label>
                        <Form.Control required type="text" placeholder="John" style={{ padding: '0.8rem', borderRadius: '10px' }} />
                        <Form.Control.Feedback type="invalid">Please provide your first name.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4" controlId="contactLastName">
                        <Form.Label className="fw-semibold">Last Name</Form.Label>
                        <Form.Control required type="text" placeholder="Doe" style={{ padding: '0.8rem', borderRadius: '10px' }} />
                        <Form.Control.Feedback type="invalid">Please provide your last name.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4" controlId="contactEmail">
                    <Form.Label className="fw-semibold">Email Address</Form.Label>
                    <Form.Control required type="email" placeholder="john@example.com" style={{ padding: '0.8rem', borderRadius: '10px' }} />
                    <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="contactSubject">
                    <Form.Label className="fw-semibold">Subject</Form.Label>
                    <Form.Control required type="text" placeholder="How can we help?" style={{ padding: '0.8rem', borderRadius: '10px' }} />
                    <Form.Control.Feedback type="invalid">Please provide a subject.</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-5" controlId="contactMessage">
                    <Form.Label className="fw-semibold">Message</Form.Label>
                    <Form.Control required as="textarea" rows={5} placeholder="Type your message here..." style={{ padding: '0.8rem', borderRadius: '10px' }} />
                    <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit" size="lg" className="w-100" style={{ padding: '0.8rem', borderRadius: '10px' }}>
                    Send Message
                  </Button>
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

export default ContactPage;
