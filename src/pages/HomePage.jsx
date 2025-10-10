import React from 'react'
import CircularCard from '../components/CircularCard';
import { Container , Row} from 'react-bootstrap';
import collabs from '../Data/Collabs.js';
import category from '../Data/Category.js';
import HCard from '../Data/HCard.js';
import '../styles/HomePage.css';

import Cards from '../components/Cards';

// importing images directly
import Burger from '../assets/burgirr.jpg';
import Footer from './Footer.jsx';
import HorizontalCard from '../components/HorizontalCard.jsx';

const categories = [
    {
        name : "Pizza",
        image: Burger,
    },
    {
        name : "Burger",
        image: Burger,
    },
    {
        name : "Pasta",
        image: Burger,
    },
    {
        name : "Salad",
        image: Burger,
    }
];



const HomePage = () => {
  return (
    <Container className="my-5">

      <h2 className='mb-4'>Our Varieties</h2>

      <Row>
        {categories.map((category) => (
          <CircularCard
            key={category.name}
            name={category.name}
            image={category.image}
          />
        ))}
      </Row>

      {/* <section className="Collabs-sec">
        <h2 className='mb-4'>Our Collabs</h2>
      
        <div className="Horizontal-scroll-container">

         <div className="card-wrapper">
            {collabs.map((collabs) => (
              <CircularCard
                key={collabs.name}
                name={collabs.name}
                image={collabs.image}
              />
            ))}
          </div>

        </div>

      </section> */}



    <h2 className='mb-4 mt-5'>Popular Recipes</h2>

      <Row>
        {category.map((category) => (
          <Cards
            key={category.name}
            name={category.name}
            image={category.image}
            category={category.category}
            price={category.price}
          />
        ))}
      </Row>
      <Row>
        {category.map((category) => (
          <Cards
            key={category.name}
            name={category.name}
            image={category.image}
            category={category.category}
            price={category.price}
          />
        ))}
      </Row>
      <Row>
        {category.map((category) => (
          <Cards
            key={category.name}
            name={category.name}
            image={category.image}
            category={category.category}
            price={category.price}
          />
        ))}
      </Row>

    <section className="my-6" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>

    <h2 className='mb-4 mt-3'>Explore Options </h2>

    {HCard.map((item, idx) => (
      <HorizontalCard 
        key={idx}
        title={item.title}
        content={item.content}
      />
    ))}
    
    </section>
    
    <br/>

    <Footer/>

    </Container>


  )
}
export default HomePage;