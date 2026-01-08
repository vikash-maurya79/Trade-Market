import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import { UserContextProvider } from './components/AuthContext';
import { StockContextProvider } from './components/Context/StockContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <StockContextProvider>
          <Routes>
            <Route path='/*' element={<Home />} />
          </Routes>
        </StockContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


