import React from 'react';
import '../styles/PartnerLogo.css';

const PartnerLogo = ({ image, name }) => {
  return (
    // The main container for each partner "card"
    <div className="partner-card">
      <div className="partner-logo-image-wrapper">
        <img src={image} alt={`${name} Logo`} className="partner-logo-image" />
      </div>
      <p className="partner-logo-name">{name}</p>
    </div>
  );
};

export default PartnerLogo;