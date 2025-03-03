import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import pages

import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"

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
        <Route path="/product" element={<ProductDetail/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  )
}

export default App
