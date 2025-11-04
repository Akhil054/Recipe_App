// import React from 'react'
// import CircularCard from '../components/CircularCard';
// import { Container , Row} from 'react-bootstrap';
// import collabs from '../Data/Collabs.js';
// import category from '../Data/Category.js';
// import HCard from '../Data/HCard.js';
// import HorizontalCard from '../components/HorizontalCard.jsx';
// import '../styles/HomePage.css';


// import Cards from '../components/DishCards.jsx';

// // importing images directly
// import Burger from '../assets/burgirr.jpg';
// import Footer from './Footer.jsx';

// const categories = [
//     {
//         name : "Pizza",
//         image: Burger,
//     },
//     {
//         name : "Burger",
//         image: Burger,
//     },
//     {
//         name : "Pasta",
//         image: Burger,
//     },
//     {
//         name : "Salad",
//         image: Burger,
//     }
// ];



// const HomePage = () => {
//   return (
//     <Container className="my-5">

//       <h2 className='mb-4'>Our Varieties</h2>

//       <Row>
//         {categories.map((category) => (
//           <CircularCard
//             key={category.name}
//             name={category.name}
//             image={category.image}
//           />
//         ))}
//       </Row>

//       <section className="Collabs-sec">
//         <h2 className='mb-4'>Our Collabs</h2>
      
//         <div className="Horizontal-scroll-container">

//          <div className="card-wrapper">
//             {collabs.map((collabs) => (
//               <CircularCard
//                 key={collabs.name}
//                 name={collabs.name}
//                 image={collabs.image}
//               />
//             ))}
//           </div>

//         </div>

//       </section>



//     <h2 className='mb-4 mt-5'>Popular Recipes</h2>

//       <Row>
//         {category.map((category) => (
//           <Cards
//             key={category.name}
//             name={category.name}
//             image={category.image}
//             category={category.category}
//             price={category.price}
//           />
//         ))}
//       </Row>
//       <Row>
//         {category.map((category) => (
//           <Cards
//             key={category.name}
//             name={category.name}
//             image={category.image}
//             category={category.category}
//             price={category.price}
//           />
//         ))}
//       </Row>
//       <Row>
//         {category.map((category) => (
//           <Cards
//             key={category.name}
//             name={category.name}
//             image={category.image}
//             category={category.category}
//             price={category.price}
//           />
//         ))}
//       </Row>

//     <section className="my-6" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>

//     <h2 className='mb-4 mt-3'>Explore Options </h2>

//     {HCard.map((item, idx) => (
//       <HorizontalCard 
//         key={idx}
//         title={item.title}
//         content={item.content}
//       />
//     ))}
    
//     </section>
    
//     <br/>

//     <Footer/>

//     </Container>


//   )
// }
// export default HomePage;


import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import { useState, useEffect } from 'react'; 


// Import your updated and restyled components
import DishCard from '../components/DishCards.jsx'; // Assuming this is your restyled card
import Footer from './Footer.jsx';
import PartnerLogo from '../components/PartnerLogo.jsx';


// Import your data - ensure it has the fields needed (image, name, price, category)
import categoryData from '../Data/Category.js';
import collabs from '../Data/Collabs.js';



// Import your hero image (place it in /src/assets/)
import HeroSaladImage from '../assets/hero-salad.jpg'; 
import ChefImage from '../assets/chef.jpg'; 
import '../styles/HomePage.css';
import '../styles/main.css';

const HomePage = () => {
  // --- STATE MANAGEMENT FOR MENU ---
  // State to track the currently selected filter ('All', 'veg', or 'non-veg')
  const [activeFilter, setActiveFilter] = useState('All');
  // State to hold the dishes that are currently displayed
  const [filteredDishes, setFilteredDishes] = useState(categoryData);

  // This effect runs whenever the `activeFilter` state changes
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredDishes(categoryData);
    } else {
      const filtered = categoryData.filter(dish => dish.type === activeFilter);
      setFilteredDishes(filtered);
    }
  }, [activeFilter]);
  return (
    <>
      {/* --- Hero Section --- */}
      <Container as="section" className="my-5 py-md-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-5 mb-md-0">
            <h1 className="display-3 fw-bold">
              We Serve The Test<br />You Love 😍
            </h1>
            <p className="lead text-muted my-4">
              This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks.
            </p>
            <Button variant="primary" className="me-3">Explore Food</Button>
            <Button variant="outline-primary">🔍 Search</Button>
          </Col>
          <Col md={6}>
            <Image src={HeroSaladImage} fluid />
          </Col>
        </Row>
      </Container>
      
       {/* --- NEW: Our Partners Section --- */}
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
          {/* We map ONCE and slice the array to show a specific number of items */}
          {categoryData.slice(0, 4).map((dish, index) => (
            <DishCard
              key={index}
              image={dish.image}
              name={dish.name}
              description={`A popular ${dish.category} dish loved by everyone.`}
              price={dish.price}
            />
          ))}
        </Row>
      </Container>

      {/* --- "More Than a Service" Section --- */}
      {/* This replaces your old accordion "HorizontalCard" section */}
      <Container as="section" className="my-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-5 mb-md-0">
             <Image src={ChefImage} fluid />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-4">We Are More Than<br/>Multiple Service</h2>
            <p className="text-muted mb-4">
              Experience the best of dining with our additional services designed for your convenience and pleasure.
            </p>
            <Row>
              <Col sm={6} className="mb-3"><h5>✓ Online Order</h5></Col>
              <Col sm={6} className="mb-3"><h5>✓ Pre-Reservation</h5></Col>
              <Col sm={6} className="mb-3"><h5>✓ 24/7 Service</h5></Col>
              <Col sm={6} className="mb-3"><h5>✓ Super Chefs</h5></Col>
              <Col sm={6} className="mb-3"><h5>✓ Clean Kitchen</h5></Col>
            </Row>
            <Button variant="primary" className="mt-3">About Us</Button>
          </Col>
        </Row>
      </Container>

      {/* --- NEW: Our Regular Menu Section --- */}
      <Container as="section" className="my-5 py-5">
        <h2 className="text-center fw-bold mb-4">Our Regular Menu Pack</h2>
        
        {/* Filter Buttons */}
        <div className="text-center mb-5">
          <Button
            className="filter-button"
            variant={activeFilter === 'All' ? 'primary' : 'outline-primary'}
            onClick={() => setActiveFilter('All')}
          >
            All
          </Button>
          <Button
            className="filter-button"
            variant={activeFilter === 'veg' ? 'primary' : 'outline-primary'}
            onClick={() => setActiveFilter('veg')}
          >
            Veg
          </Button>
          <Button
            className="filter-button"
            variant={activeFilter === 'non-veg' ? 'primary' : 'outline-primary'}
            onClick={() => setActiveFilter('non-veg')}
          >
            Non-Veg
          </Button>
        </div>

        {/* Filtered Dish Grid */}
        <Row>
          {/* We map over the `filteredDishes` state variable, NOT the original data */}
          {filteredDishes.map((dish, index) => (
            <DishCard
              key={index}
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