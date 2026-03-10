import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaCalendarAlt, FaUserEdit } from 'react-icons/fa';
import Footer from './Footer';

// Using some local assets as placeholders for the blog posts
import HeroSaladImage from '../assets/hero-salad.jpg';
import ChefImage from '../assets/chef.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'The Secret to the Perfect Salad Dressing',
    excerpt: 'Discover how a simple combination of olive oil, fresh lemon juice, and a hint of garlic can elevate your daily greens to a gourmet level.',
    image: HeroSaladImage,
    author: 'Chef Mario',
    date: 'Oct 15, 2023',
    category: 'Recipe Tips'
  },
  {
    id: 2,
    title: 'A Day in the Life of Our Head Chef',
    excerpt: 'Step into our bustling kitchen and see what it takes to orchestrate the perfect dinner service, right from morning prep to the final dish.',
    image: ChefImage,
    author: 'Sarah Jenkins',
    date: 'Oct 10, 2023',
    category: 'Behind the Scenes'
  },
  {
    id: 3,
    title: 'Why Plant-Based Diets are Taking Over',
    excerpt: 'We explore the rising trend of veganism and how our kitchen is adapting to offer more wholesome, plant-based options without sacrificing flavor.',
    image: HeroSaladImage,
    author: 'Nutritionist Anna',
    date: 'Sep 28, 2023',
    category: 'Health & Wellness'
  },
  {
    id: 4,
    title: 'How to Pair Your Favorite Dishes with the Right Wine',
    excerpt: 'A comprehensive guide to understanding flavor profiles and selecting the perfect bottle to complement your next dinner reservation.',
    image: ChefImage,
    author: 'Sommelier Liam',
    date: 'Sep 15, 2023',
    category: 'Dining Guide'
  }
];

const BlogPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5 mb-5" style={{ borderRadius: '20px', marginTop: '20px' }}>
        <Container className="text-center">
          <h1 className="display-4 fw-bold">Our Blog</h1>
          <p className="lead mb-0">Stories, tips, and culinary adventures from our kitchen to yours.</p>
        </Container>
      </div>

      <Container className="my-5 py-3">
        <Row>
          {blogPosts.map((post) => (
            <Col md={6} lg={4} className="mb-5 d-flex align-items-stretch" key={post.id}>
              <Card className="border-0 shadow-sm w-100 dish-card" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <div style={{ position: 'relative' }}>
                  <Card.Img 
                    variant="top" 
                    src={post.image} 
                    alt={post.title} 
                    style={{ height: '220px', objectFit: 'cover' }} 
                  />
                  <Badge 
                    bg="primary" 
                    className="position-absolute" 
                    style={{ top: '15px', right: '15px', padding: '0.5rem 1rem', borderRadius: '10px' }}
                  >
                    {post.category}
                  </Badge>
                </div>
                
                <Card.Body className="p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between text-muted small mb-3">
                    <span className="d-flex align-items-center">
                      <FaUserEdit className="me-2" /> {post.author}
                    </span>
                    <span className="d-flex align-items-center">
                      <FaCalendarAlt className="me-2" /> {post.date}
                    </span>
                  </div>
                  
                  <Card.Title className="fw-bold mb-3 fs-4" style={{ color: '#2c3e50' }}>
                    {post.title}
                  </Card.Title>
                  
                  <Card.Text className="text-muted flex-grow-1">
                    {post.excerpt}
                  </Card.Text>
                  
                  <div className="mt-3">
                    <Button variant="outline-primary" className="fw-semibold px-4 w-100" style={{ borderRadius: '8px' }}>
                      Read Article
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <Footer />
    </>
  );
};

export default BlogPage;
