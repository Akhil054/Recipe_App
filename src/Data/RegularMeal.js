// /src/Data/RegularMenu.js

// It's a good practice to organize your images
import ChickenTikka from '../assets/ChickenTikka.jpg';
import MuttonCurry from '../assets/ChickenTikka.jpg';
// import PaneerMasala from '../assets/PaneerMasala.jpg';
import DalMakhani from '../assets/DalMakhani.jpg';
// import PannerTikka from '../assets/PaneerTikka.jpg';

const RegularMeal = [
  // --- Non-Vegetarian Dishes (from your data) ---
  {
    id: 'nv1', // Unique ID
    image: ChickenTikka, // Image for every item
    name: 'Chicken Tikka Masala',
    category: 'Non-Veg',
    price: '280',
    type: 'non-veg', // Type for filtering
  },
  {
    id: 'nv2',
    image: MuttonCurry,
    name: 'Mutton Curry',
    category: 'Non-Veg',
    price: '350',
    type: 'non-veg',
  },

  // --- Vegetarian Dishes (expanded from your data) ---
  {
    id: 'v1',
    image: PannerTikka,
    name: 'Paneer Butter Masala',
    category: 'Veg',
    price: '240',
    type: 'veg',
  },
  {
    id: 'v2',
    image: MuttonCurry,
    name: 'Paneer Tikka Starter',
    category: 'Veg',
    price: '220',
    type: 'veg',
  },
  {
    id: 'v3',
    image: DalMakhani,
    name: 'Dal Makhani',
    category: 'Veg',
    price: '200',
    type: 'veg',
  },
   {
    id: 'v4',
    image: MuttonCurry, // Reusing image for example
    name: 'Shahi Paneer',
    category: 'Veg',
    price: '260',
    type: 'veg',
  },
];

export default RegularMeal;