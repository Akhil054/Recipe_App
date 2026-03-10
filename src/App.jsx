import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import './App.css'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage' // <- Added Menu Page import
import AboutUsPage from './pages/AboutUsPage' // <- Added About Us Page
import ReserveTablePage from './pages/ReserveTablePage' // <- Added Reserve Table Page
import ContactPage from './pages/ContactPage' // <- Added Contact Page
import BlogPage from './pages/BlogPage' // <- Added Blog Page
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage' 
import AppNavbar from './components/AppNavbar';
import CircularCard from './components/CircularCard';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <div className="App">
        <AppNavbar/>
        <Container className="mt-4"> {/* Add a container for page content */}
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutUsPage/>} />
          <Route path='/menu' element={<MenuPage/>} />
          <Route path='/reserve' element={<ReserveTablePage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/blog' element={<BlogPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          
          {/* <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} /> */}
        </Routes>
        </Container>
      </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App


