// // /src/components/DishCard.jsx
// import React from 'react';
// import { Card, Button, Col } from 'react-bootstrap';
// import '../styles/DishCard.css';
// // Note the updated props to match the new design
// const DishCard = ({ image, name, description, price }) => {
//   return (
//     <Col md={6} lg={3} className="mb-4">
//       <Card className="dish-card h-100 border-0">
//         <Card.Img variant="top" src={image} className="dish-card-image" />
//         <Card.Body className="text-center d-flex flex-column">
//           <Card.Title className="dish-card-title">{name}</Card.Title>
//           {/* Placeholder for star ratings */}
//           <div className="text-warning my-2">⭐⭐⭐</div>
//           <Card.Text className="dish-card-description">{description}</Card.Text>
//           <div className="mt-auto d-flex justify-content-between align-items-center px-3">
//             <span className="dish-card-price">${price}</span>
//             <Button variant="outline-primary" size="sm" style={{ borderRadius: '15px', padding: '5px 15px' }}>
//                 Add To Cart
//             </Button>
//           </div>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// export default DishCard;

// /src/components/DishCards.jsx
import React, { useState } from 'react'; // <-- Import useState
import { Card, Button, Col } from 'react-bootstrap';
import '../styles/DishCard.css';

const DishCard = ({ image, name, description, price }) => {
  // State to track if the item has been added to the cart
  const [isAdded, setIsAdded] = useState(false);

  // Function to handle the click event
  const handleAddToCart = () => {
    // Set the state to 'added'
    setIsAdded(true);

    // In a real app, you would call your cart context function here
    // e.g., cart.addItem({ name, price, image });
    console.log(`${name} added to cart!`);

    // After 2 seconds, revert the button back to its original state
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <Col md={6} lg={3} className="mb-4">
      <Card className="dish-card h-100 border-0">
        <Card.Img variant="top" src={image} className="dish-card-image" />
        <Card.Body className="text-center d-flex flex-column">
          <Card.Title className="dish-card-title">{name}</Card.Title>
          <div className="text-warning my-2">⭐⭐⭐</div>
          <Card.Text className="dish-card-description">{description}</Card.Text>
          <div className="mt-auto d-flex justify-content-between align-items-center px-3">
            <span className="dish-card-price">${price}</span>

            {/* --- UPDATED BUTTON LOGIC --- */}
            <Button
              variant={isAdded ? 'success' : 'outline-primary'}
              size="sm"
              style={{ borderRadius: '15px', padding: '5px 15px', minWidth: '110px' }}
              onClick={handleAddToCart}
              disabled={isAdded} // Disable button when item is added
            >
              {isAdded ? '✓ Added' : 'Add To Cart'}
            </Button>
            
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DishCard;