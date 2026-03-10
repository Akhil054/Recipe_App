import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import Footer from './Footer';

// Let's import some placeholders (we can reuse the chef image from home page, or just give it a placeholder URL)
import ChefImage from '../assets/chef.jpg';
import HeroSaladImage from '../assets/hero-salad.jpg';

const AboutUsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5 mb-5" style={{ borderRadius: '20px', marginTop: '20px' }}>
        <Container className="text-center">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead mb-0">Discover the story behind your favorite meals.</p>
        </Container>
      </div>

      <Container className="my-5 py-5">
        {/* Our Story Section */}
        <Row className="align-items-center mb-5 pb-5">
          <Col md={6} className="mb-4 mb-md-0 text-center">
            <Image src={ChefImage} fluid className="rounded shadow-sm" style={{ maxHeight: '400px', objectFit: 'cover' }} />
          </Col>
          <Col md={6} className="px-md-5">
            <h2 className="fw-bold mb-4">Our Journey</h2>
            <p className="text-muted fs-5 mb-4">
              It all started with a simple passion for creating delicious, wholesome meals that bring people together. We believe that food is not just about sustenance; it's an experience.
            </p>
            <p className="text-muted mb-4">
              Over the years, we have grown from a small family kitchen into a vibrant dining experience. Every dish we serve is crafted with fresh, local ingredients and a whole lot of love. Our chefs pour their heart into every recipe, ensuring every flavor is balanced to perfection.
            </p>
            <Button variant="outline-primary" size="lg">Read More</Button>
          </Col>
        </Row>

        {/* Vision & Mission Section */}
        <Row className="text-center mb-5 pb-5 gap-4 gap-md-0">
          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm p-4" style={{ borderRadius: '15px' }}>
              <Card.Body>
                <div className="display-4 mb-3">🎯</div>
                <Card.Title className="fw-bold fs-3 mb-3">Our Mission</Card.Title>
                <Card.Text className="text-muted">
                  To serve mouth-watering recipes that exceed expectations, bringing fresh smiles and unforgettable memories to every table.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm p-4" style={{ borderRadius: '15px' }}>
              <Card.Body>
                <div className="display-4 mb-3">👁️</div>
                <Card.Title className="fw-bold fs-3 mb-3">Our Vision</Card.Title>
                <Card.Text className="text-muted">
                  To become the community's first choice for dining out, known globally for our distinct flavor profile and unbeatable warm service.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Extra Info Block */}
        <div className="bg-light p-5 rounded-4 shadow-sm text-center mb-5">
          <h3 className="fw-bold mb-3">Want to join our amazing team?</h3>
          <p className="text-muted mb-4 fs-5">We are always on the lookout for talented chefs and friendly staff.</p>
          <Button variant="primary" size="lg">Careers</Button>
        </div>

      </Container>
      
      <Footer />
    </>
  );
};

export default AboutUsPage;
