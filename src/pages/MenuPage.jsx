import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import DishCard from '../components/DishCards.jsx';
import Footer from './Footer.jsx';

// Data Imports
import RegularMeal from '../Data/RegularMeal.js'; 
import categoryData from '../Data/Category.js';

// Combine datasets for the full menu
const allRawDishes = [
  ...RegularMeal,
  ...categoryData.map((item, index) => ({
    id: `cat-${index}`,
    image: item.image,
    name: item.name,
    category: item.category,
    price: item.price,
    type: item.category.toLowerCase() === 'veg' ? 'veg' : 'non-veg', // Normalizing the type
  }))
];

// Sort so that all Non-Veg items come first, and Veg items follow
const allDishes = allRawDishes.sort((a, b) => {
  if (a.type === 'non-veg' && b.type === 'veg') return -1;
  if (a.type === 'veg' && b.type === 'non-veg') return 1;
  return 0; 
});

const MenuPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDishes, setFilteredDishes] = useState(allDishes);

  // Filter Logic
  useEffect(() => {
    let result = allDishes;

    if (activeFilter !== 'All') {
      result = result.filter(dish => dish.type === activeFilter);
    }

    if (searchQuery) {
      result = result.filter(dish => 
        dish.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredDishes(result);
  }, [activeFilter, searchQuery]);

  return (
    <>
      {/* Menu Header / Hero */}
      <div className="bg-primary text-white py-5 mb-5" style={{ borderRadius: '20px', marginTop: '20px' }}>
        <Container className="text-center">
          <h1 className="display-4 fw-bold">Our Full Menu</h1>
          <p className="lead mb-0">Explore our wide variety of delicious meals curated just for you.</p>
        </Container>
      </div>

      <Container className="mb-5 py-3">
        {/* Controls: Search and Filters */}
        <Row className="mb-5 align-items-center justify-content-between flex-column-reverse flex-md-row gap-4 gap-md-0">
          
          <Col xs={12} md={6}>
            <div className="d-grid d-sm-flex gap-2 w-100">
              <Button
                className="px-4 py-2 w-100 w-sm-auto"
                variant={activeFilter === 'All' ? 'primary' : 'outline-primary'}
                onClick={() => setActiveFilter('All')}
              >
                All Menu
              </Button>
              <Button
                className="px-4 py-2 w-100 w-sm-auto"
                variant={activeFilter === 'veg' ? 'primary' : 'outline-primary'}
                onClick={() => setActiveFilter('veg')}
              >
                Veg
              </Button>
              <Button
                className="px-4 py-2 w-100 w-sm-auto"
                variant={activeFilter === 'non-veg' ? 'primary' : 'outline-primary'}
                onClick={() => setActiveFilter('non-veg')}
              >
                Non-Veg
              </Button>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <InputGroup size="lg">
              <InputGroup.Text id="search-icon" className="bg-white border-end-0">🔍</InputGroup.Text>
              <Form.Control
                placeholder="Search dishes..."
                aria-label="Search"
                className="border-start-0 ps-0"
                style={{ boxShadow: 'none' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputGroup>
          </Col>

        </Row>

        {/* Menu Grid */}
        <Row>
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish, index) => (
              <DishCard
                key={dish.id || index}
                id={dish.id || index}
                image={dish.image}
                name={dish.name}
                description={`A beautifully curated ${dish.category} dish ready for you to enjoy.`}
                price={dish.price}
              />
            ))
          ) : (
            <Col xs={12} className="text-center py-5">
              <h3 className="text-muted">No dishes found matching your criteria.</h3>
            </Col>
          )}
        </Row>
      </Container>
      
      <Footer />
    </>
  );
};

export default MenuPage;
