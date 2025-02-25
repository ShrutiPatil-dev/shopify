import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Cart from './components/Cart'
import Productdetail from './pages/Productdetail'
import ProductList from './components/ProductList'
import About from './components/About'

function App() {
  return (
    <>
     <CartProvider>
      <Router>
      <Navbar/>
       <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/cart" element={<Cart />} />
         <Route path="/list" element={<ProductList />} />
         <Route path="/about" element={<About />} />
         <Route path="/product/:id" element={<Productdetail />} />
        </Routes>
      </Router>
     
    
    </CartProvider>
    </>
  
  )
}

export default App
