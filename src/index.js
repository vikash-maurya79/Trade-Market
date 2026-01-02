import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing-page/home/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './landing-page/signup/Signup';
import About from './landing-page/about/AboutPage';
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';
import NotFound from './landing-page/NotFound';
import ProductPage from './landing-page/products/Universe';
import PricingPage from './landing-page/pricing/PricingPage';
import SupportPage from './landing-page/support/SupportPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>}/>

      
    </Routes>
    <Footer/>
  </BrowserRouter>
);


