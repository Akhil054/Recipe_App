import React from 'react'
import CircularCard from '../components/CircularCard';
import { Container , Row} from 'react-bootstrap';
import collabs from '../Data/Collabs.js';
import category from '../Data/Category.js';

import Cards from '../components/Cards';

// importing images directly
import Burger from '../assets/burgirr.jpg';

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


      <h2 className='mb-4'>Our Collabs</h2>
      <Row>
        {collabs.map((collabs) => (
          <CircularCard
            key={collabs.name}
            name={collabs.name}
            image={collabs.image}
          />
        ))}
      </Row>



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


    </Container>
  )
}
export default HomePage;