import React from 'react'
import { Card, Col } from 'react-bootstrap';
import '../styles/CircularCard.css';


const CircularCard = ({ image, name }) => {
  return (
    <Col xs={6} md={4} lg={3} className="mb-4" text-center>
      <Card className="category-card border-0">
        <Card.Img variant="top" src={image} className="category-card-image" />
        <Card.Body>
          <Card.Title className="category-card-title">{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CircularCard;
