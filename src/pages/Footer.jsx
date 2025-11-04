// /src/pages/Footer.jsx
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css'; // We'll create this CSS file

const Footer = () => {
  return (
    <footer className="app-footer mt-5">
      <Container>
        {/* Top Section: Subscribe */}
        <Row className="py-5 justify-content-center text-center">
          <Col md={8} lg={6}>
            <h3 className="footer-title">Subscribe Our Newsletter</h3>
            <p className="text-muted">
              Receive the latest news, special offers, and exclusives.
            </p>
            <Form className="subscribe-form">
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                className="subscribe-input"
              />
              <Button variant="primary" className="subscribe-button">→</Button>
            </Form>
          </Col>
        </Row>

        <hr />

        {/* Bottom Section: Links and Socials */}
        <Row className="py-5">
          <Col md={4} className="mb-4">
            <h4 className="footer-brand">🍴 Bites</h4>
            <div className="social-icons mt-3">
              <a href="#!"><FaFacebookF /></a>
              <a href="#!"><FaTwitter /></a>
              <a href="#!"><FaInstagram /></a>
              <a href="#!"><FaYoutube /></a>
            </div>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <h6 className="footer-heading">Service</h6>
            <ul className="list-unstyled">
              <li><a href="#!">Online Order</a></li>
              <li><a href="#!">Pre-Reservation</a></li>
              <li><a href="#!">24/7 Services</a></li>
            </ul>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#!">Menu</a></li>
              <li><a href="#!">Reviews</a></li>
              <li><a href="#!">Blog</a></li>
            </ul>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <h6 className="footer-heading">About</h6>
            <ul className="list-unstyled">
              <li><a href="#!">Our Story</a></li>
              <li><a href="#!">Our Chefs</a></li>
              <li><a href="#!">Contact</a></li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="text-center pb-4 text-muted">
          © {new Date().getFullYear()} Copyright: Bites.com
        </div>
      </Container>
    </footer>
  );
};

export default Footer;