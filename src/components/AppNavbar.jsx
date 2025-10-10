import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Use Link for client-side routing
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import SearchBar from './SearchBar';


const AppNavbar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Recipe App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">HomePage</Nav.Link>
                <SearchBar/>
                <Nav.Link as={Link} to="/">Contact Us </Nav.Link>
                <Nav.Link as={Link} to="/">My Orders </Nav.Link>
                
                {/* <Nav.Link as={Link} to="/login">Login</Nav.Link>        
                <Nav.Link as={Link} to="/register">Register</Nav.Link> */}
                </Nav>
                </Navbar.Collapse> 
            </Container>
        </Navbar>
        
    </div>
  )
}
export default AppNavbar;
