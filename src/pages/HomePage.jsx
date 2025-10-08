import React from 'react'
import CircularCard from '../components/CircularCard';
import { Container , Row} from 'react-bootstrap';

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
    </Container>
  )
}
export default HomePage;