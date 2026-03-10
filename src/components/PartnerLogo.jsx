import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/PartnerLogo.css';

const PartnerLogo = ({ image, name }) => {
  return (
    <Card className="partner-card">
      <div className="partner-logo-image-wrapper">
        <Card.Img variant="top" src={image} alt={`${name} Logo`} className="partner-logo-image" />
      </div>
      <Card.Body className="pb-3 px-2 d-flex align-items-center justify-content-center">
        <Card.Text className="partner-logo-name m-0">{name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PartnerLogo;