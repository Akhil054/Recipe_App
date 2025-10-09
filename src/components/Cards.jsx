import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../styles/Cards.css';

const Cards = ({ image, name, category, price }) => {
  return (
    <Col xs={6} md={4} lg={3} className="mb-4 text-center">
      <Card className="main-card border-0">
        <Card.Img variant="top" src={image} className="main-card-image" alt={name}/>
        <Card.Body>
          <Card.Title className="main-card-title">{name}</Card.Title>
          <Card.Text className="main-card-category">{category}</Card.Text>
          <Card.Text className="main-card-price">{price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
