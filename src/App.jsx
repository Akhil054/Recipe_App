import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage' 
import AppNavbar from './components/AppNavbar';
import CircularCard from './components/CircularCard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar/>
        <Container className="mt-4"> {/* Add a container for page content */}
        <Routes>
          <Route path='/' element={<HomePage/>} />
          
          {/* <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} /> */}
        </Routes>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App


