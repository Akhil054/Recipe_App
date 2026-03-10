import React, { useState, useEffect } from "react";
import { Container, Row, Button, Col } from "react-bootstrap"; // Added Col for better DishCard layout
import DishCard from "../components/DishCards.jsx";
import RegularMeal from "../Data/RegularMeal.js"; // Ensure this path is correct
import "../styles/main.css"; // Global styles
import "../styles/MenuPage.css"; // Specific menu page styles

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredDishes, setFilteredDishes] = useState([]); // Initialize with empty array

  useEffect(() => {
    // Filter logic
    if (activeFilter === "All") {
      setFilteredDishes(RegularMeal);
    } else {
      setFilteredDishes(
        RegularMeal.filter((dish) => dish.type === activeFilter)
      );
    }
  }, [activeFilter]); // Re-run effect when activeFilter changes

  // Initialize dishes when component mounts for the first time
  useEffect(() => {
    setFilteredDishes(RegularMeal);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Container className="my-5 py-5">
      <h1 className="text-center fw-bold mb-4">Our Delicious Menu 🍽️</h1>
      <p className="text-center text-muted mb-5">
        Explore our wide range of dishes, crafted by top chefs with fresh ingredients.
      </p>

      {/* --- Filter Buttons --- */}
      <div className="text-center mb-5 d-flex flex-wrap justify-content-center"> {/* Added d-flex and flex-wrap for better responsiveness */}
        <Button
          className="filter-button mx-2 mb-2" // Added mb-2 for spacing on small screens
          variant={activeFilter === "All" ? "primary" : "outline-primary"}
          onClick={() => setActiveFilter("All")}
        >
          All
        </Button>
        <Button
          className="filter-button mx-2 mb-2"
          variant={activeFilter === "veg" ? "primary" : "outline-primary"}
          onClick={() => setActiveFilter("veg")}
        >
          Veg
        </Button>
        <Button
          className="filter-button mx-2 mb-2"
          variant={activeFilter === "non-veg" ? "primary" : "outline-primary"}
          onClick={() => setActiveFilter("non-veg")}
        >
          Non-Veg
        </Button>
        <Button
          className="filter-button mx-2 mb-2"
          variant={activeFilter === "dessert" ? "primary" : "outline-primary"}
          onClick={() => setActiveFilter("dessert")}
        >
          Dessert
        </Button>
      </div>

      {/* --- Filtered Menu Dishes --- */}
      <Row className="justify-content-center"> {/* Centered rows if not full width */}
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <Col key={dish.id || dish.name} sm={12} md={6} lg={4} className="mb-4 d-flex"> {/* Added Col for responsive grid, d-flex for equal height cards */}
              <DishCard
                // Destructure dish object for cleaner props
                {...dish}
                description={dish.description || "A delicious treat you'll love."} // Fallback description
              />
            </Col>
          ))
        ) : (
          <p className="text-center text-muted fs-5">No dishes available in this category.</p>
        )}
      </Row>
    </Container>
  );
};

export default Menu;