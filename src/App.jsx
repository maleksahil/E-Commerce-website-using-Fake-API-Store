import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import pages

import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import Product from "./pages/Product"
import AboutUs from "./pages/About"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Categories from './pages/Categories';

//import components

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  )
}

export default App
