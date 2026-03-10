// /src/components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

const AppNavbar = () => {
  const { cartCount } = useCart();
  return (
    <Navbar bg="light" variant="light" expand="lg" className="app-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          {/* You can use an icon or text here */}
          🍴 Bites
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* mx-auto centers the links */}
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <Button variant="primary" as={Link} to="/cart" className="position-relative border-0 shadow-sm" style={{ padding: '0.6rem' }}>
              <FaShoppingCart size={20} className="text-white" />
              {cartCount > 0 && (
                <Badge 
                  bg="danger" 
                  pill 
                  className="position-absolute translate-middle"
                  style={{ top: '5%', left: '95%' }}
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
            <Button variant="outline-primary" as={Link} to="/reserve" className="fw-bold">Reserve Table</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;