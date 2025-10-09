import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
// import {
//   FaInstagram,
//   FaLinkedin,
//   FaXTwitter,
//   FaYoutube,
//   FaFacebook,
//   FaGlobe,
// } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3 border-top mt-5">
      <Container>
        <Row className="align-items-start mb-4">
          {/* Logo */}
          <Col md={2} className="mb-3">
            <h3 className="fw-bold">zomato</h3>
          </Col>

          {/* Country and Language */}
          <Col
            md={{ span: 2, offset: 8 }}
            className="d-flex justify-content-end gap-2"
          >
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" size="sm">
                India
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>USA</Dropdown.Item>
                <Dropdown.Item>UK</Dropdown.Item>
                <Dropdown.Item>Canada</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" size="sm">
                English
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Hindi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row className="mt-4">
          {/* ABOUT ZOMATO */}
          <Col md={2} sm={6} className="mb-3">
            <h6 className="fw-bold">ABOUT ZOMATO</h6>
            <ul className="list-unstyled small">
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
              <li>Press Kit</li>
              <li>Contact Us</li>
            </ul>
          </Col>

          {/* ZOMAVERSE */}
          <Col md={2} sm={6} className="mb-3">
            <h6 className="fw-bold">ZOMAVERSE</h6>
            <ul className="list-unstyled small">
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomaland</li>
            </ul>
          </Col>

          {/* FOR RESTAURANTS */}
          <Col md={2} sm={6} className="mb-3">
            <h6 className="fw-bold">FOR RESTAURANTS</h6>
            <ul className="list-unstyled small">
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
          </Col>

          {/* LEARN MORE */}
          <Col md={2} sm={6} className="mb-3">
            <h6 className="fw-bold">LEARN MORE</h6>
            <ul className="list-unstyled small">
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
            </ul>
          </Col>

          {/* SOCIAL LINKS */}
          <Col md={4} className="mb-3">
            <h6 className="fw-bold">SOCIAL LINKS</h6>
            <div className="d-flex gap-3 fs-5 mb-3">
              <FaLinkedin />
              <FaInstagram />
              <FaXTwitter />
              <FaYoutube />
              <FaFacebook />
            </div>
            <div className="d-flex flex-column gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29_logo.svg"
                alt="App Store"
                width="120"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                width="130"
              />
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <hr />
        <Row>
          <Col className="text-center small text-muted">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. © 2025 Zomato™ Ltd. All
            rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
