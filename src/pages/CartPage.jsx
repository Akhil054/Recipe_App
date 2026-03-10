import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const deliveryCharge = cartItems.length > 0 ? 5.0 : 0;
  const payableAmount = cartTotal + deliveryCharge;

  if (cartItems.length === 0) {
    return (
      <Container className="py-5 text-center mt-5">
        <h2>Your Cart is Empty</h2>
        <p className="text-muted">Looks like you haven't added any dishes yet.</p>
        <Button as={Link} to="/menu" variant="primary" className="mt-3">
          Browse Menu
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5" style={{ marginTop: '20px' }}>
      <h2 className="mb-4 text-primary fw-bold">My Cart</h2>
      <Row>
        <Col lg={8} className="mb-4">
          <Card className="shadow-sm border-0 rounded-4">
            <Card.Body>
              <Table responsive className="align-middle">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px' }}
                            className="me-3"
                          />
                          <span className="fw-semibold">{item.name}</span>
                        </div>
                      </td>
                      <td>${Number(item.price).toFixed(2)}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td>${(Number(item.price) * item.quantity).toFixed(2)}</td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm border-0 rounded-4">
            <Card.Body>
              <h4 className="mb-4 fw-bold">Order Summary</h4>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotal</span>
                <span className="fw-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Delivery Charge</span>
                <span className="fw-semibold">${deliveryCharge.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold fs-5">Total Payable</span>
                <span className="fw-bold fs-5 text-primary">${payableAmount.toFixed(2)}</span>
              </div>
              <Button variant="success" size="lg" className="w-100 fw-bold rounded-pill">
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
