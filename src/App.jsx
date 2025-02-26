import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Cart from './components/Cart'
import Productdetail from './pages/ProductDetail'
import ProductList from './components/ProductList'
import About from './components/About'
import CheckoutForm from './components/CheckoutForm'

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
         <Route path="/bill" element={<CheckoutForm/>}/>
        </Routes>
      </Router>
     
    
    </CartProvider>
    </>
  
  )
}

export default App
