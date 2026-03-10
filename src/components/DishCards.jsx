// /src/components/DishCards.jsx
import React, { useState } from 'react'; // <-- Import useState
import { Card, Button, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import '../styles/DishCard.css';

const DishCard = ({ id, image, name, description, price }) => {
  const { addToCart } = useCart();
  // State to track if the item has been added to the cart
  const [isAdded, setIsAdded] = useState(false);

  // Function to handle the click event
  const handleAddToCart = () => {
    // Set the state to 'added'
    setIsAdded(true);

    // Call cart context function
    addToCart({ id, name, image, price });
    console.log(`${name} added to cart!`);

    // After 2 seconds, revert the button back to its original state
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
      <Card className="dish-card h-100 border-0" style={{ width: '100%', maxWidth: '350px' }}>
        <Card.Img variant="top" src={image} className="dish-card-image" />
        <Card.Body className="text-center d-flex flex-column p-4">
          <Card.Title className="dish-card-title mb-2">{name}</Card.Title>
          <div className="text-warning mb-3">⭐⭐⭐</div>
          <Card.Text className="dish-card-description mb-4">{description}</Card.Text>
          <div className="mt-auto d-flex justify-content-between align-items-center w-100">
            <span className="dish-card-price">${price}</span>

            {/* --- UPDATED BUTTON LOGIC --- */}
            <Button
              variant={isAdded ? 'success' : 'outline-primary'}
              className="dish-card-btn"
              onClick={handleAddToCart}
              disabled={isAdded} // Disable button when item is added
            >
              {isAdded ? '✓ Added' : 'Add'}
            </Button>

          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DishCard;