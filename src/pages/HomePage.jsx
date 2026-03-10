import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Components
import DishCard from '../components/DishCards.jsx';
import Footer from './Footer.jsx';
import PartnerLogo from '../components/PartnerLogo.jsx';

// Data Imports
import categoryData from '../Data/Category.js';   // For Popular Dishes
import RegularMeal from '../Data/RegularMeal.js'; // For Regular Menu
import collabs from '../Data/Collabs.js';

// Images & Styles
import HeroSaladImage from '../assets/hero-salad.jpg';
import ChefImage from '../assets/chef.jpg';
import '../styles/HomePage.css';
import '../styles/main.css';

const HomePage = () => {
  // --- STATE MANAGEMENT FOR MENU ---
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredDishes, setFilteredDishes] = useState(RegularMeal);

  // --- FILTERING LOGIC ---
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredDishes(RegularMeal);
    } else {
      const filtered = RegularMeal.filter(dish => dish.type === activeFilter);
      setFilteredDishes(filtered);
    }
  }, [activeFilter]);

  return (
    <>
      {/* --- Hero Section --- */}
      <Container as="section" className="my-5 py-md-5">
        <Row className="align-items-center flex-column-reverse flex-md-row">
          <Col xs={12} md={6} className="text-center text-md-start mt-5 mt-md-0">
            <h1 className="fw-bold mb-3 mb-md-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
              We Serve The Taste<br className="d-none d-md-block" />You Love 😍
            </h1>
            <p className="lead text-muted my-4 fs-6 fs-md-5">
              This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks.
            </p>
            <div className="d-grid d-sm-flex justify-content-sm-center justify-content-md-start gap-3 w-100" style={{ maxWidth: '400px', margin: '0 auto' }}>
              <Button variant="primary" size="lg" className="px-sm-4 w-100 w-sm-auto">Explore Food</Button>
              <Button variant="outline-primary" size="lg" className="px-sm-4 w-100 w-sm-auto">🔍 Search</Button>
            </div>
          </Col>
          <Col xs={12} md={6} className="text-center px-4 px-md-3">
            <Image src={HeroSaladImage} fluid className="w-100" style={{ maxWidth: '450px' }} />
          </Col>
        </Row>
      </Container>

      {/* --- Our Partners Section --- */}
      <Container as="section" className="my-5 text-center">
        <h2 className="fw-bold mb-5">Our Trusted Partners</h2>
        <div className="horizontal-scroll-container">
          <div className="partner-logos-wrapper">
            {collabs.map((partner) => (
              <PartnerLogo
                key={partner.name}
                name={partner.name}
                image={partner.image}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* --- Popular Dishes Section --- */}
      <Container as="section" className="my-5 py-5">
        <h2 className="text-center fw-bold mb-5">Popular Dishes</h2>
        <Row>
          {categoryData.slice(0, 4).map((dish, index) => (
            <DishCard
              key={index}
              id={dish.id || `pop-${index}`}
              image={dish.image}
              name={dish.name}
              description={`A popular ${dish.category} dish loved by everyone.`}
              price={dish.price}
            />
          ))}
        </Row>
      </Container>

      {/* --- "More Than a Service" Section --- */}
      <Container as="section" className="my-5 py-5">
        <Row className="align-items-center flex-column-reverse flex-lg-row">
          <Col xs={12} lg={6} className="mt-5 mt-lg-0 text-center px-4">
            <Image src={ChefImage} fluid className="w-100 rounded shadow-sm" style={{ maxWidth: '450px' }} />
          </Col>
          <Col xs={12} lg={6} className="text-center text-lg-start">
            <h2 className="fw-bold mb-4 fs-2 fs-lg-1">We Are More Than<br className="d-none d-lg-block" />Multiple Service</h2>
            <p className="text-muted mb-4 lead fs-6 fs-md-5">
              Experience the best of dining with our additional services designed for your convenience and pleasure.
            </p>
            <Row className="text-start justify-content-center justify-content-lg-start px-3 px-sm-0">
              <Col xs={12} sm={6} className="mb-3">
                <h5 className="d-flex align-items-center fs-6 fs-sm-5"><span className="text-primary me-2 fw-bold">✓</span> Online Order</h5>
              </Col>
              <Col xs={12} sm={6} className="mb-3">
                <h5 className="d-flex align-items-center fs-6 fs-sm-5"><span className="text-primary me-2 fw-bold">✓</span> Pre-Reservation</h5>
              </Col>
              <Col xs={12} sm={6} className="mb-3">
                <h5 className="d-flex align-items-center fs-6 fs-sm-5"><span className="text-primary me-2 fw-bold">✓</span> 24/7 Service</h5>
              </Col>
              <Col xs={12} sm={6} className="mb-3">
                <h5 className="d-flex align-items-center fs-6 fs-sm-5"><span className="text-primary me-2 fw-bold">✓</span> Super Chefs</h5>
              </Col>
              <Col xs={12} sm={6} className="mb-3">
                <h5 className="d-flex align-items-center fs-6 fs-sm-5"><span className="text-primary me-2 fw-bold">✓</span> Clean Kitchen</h5>
              </Col>
            </Row>
            <div className="d-grid d-sm-block mt-4 mt-md-5 px-3 px-sm-0">
              <Button as={Link} to="/about" variant="primary" size="lg" className="px-sm-5 w-100 w-sm-auto">About Us</Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* --- Regular Menu Section --- */}
      <Container as="section" className="my-5 py-5 px-3">
        <h2 className="text-center fw-bold mb-4 fs-2 fs-md-1">Our Regular Menu Pack</h2>

        {/* Filter Buttons */}
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5 px-2">
          <Button
            className="filter-button px-4 py-2 w-100 w-sm-auto"
            variant={activeFilter === 'All' ? 'primary' : 'outline-primary'}
            onClick={() => setActiveFilter('All')}
          >
            All
          </Button>
          <Button
            className="filter-button px-4 py-2 w-100 w-sm-auto"
            variant={activeFilter === 'veg' ? 'primary' : 'outline-primary'}
            onClick={() => setActiveFilter('veg')}
          >
            Veg
          </Button>
          <Button
            className="filter-button px-4 py-2 w-100 w-sm-auto"
            variant={activeFilter === 'non-veg' ? 'primary' : 'outline-primary'}
            onClick={() => setActiveFilter('non-veg')}
          >
            Non-Veg
          </Button>
        </div>

        {/* Filtered Dishes */}
        <Row>
          {filteredDishes.map((dish, index) => (
            <DishCard
              key={index}
              id={dish.id || `reg-${index}`}
              image={dish.image}
              name={dish.name}
              description={`A popular ${dish.category} dish loved by everyone.`}
              price={dish.price}
            />
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default HomePage;
