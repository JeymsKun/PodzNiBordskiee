import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Legal from './pages/Legal';
import Cookie from './pages/Cookie';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
          <Route path="/home/" element={<Home />} />
          <Route path="/home/recipes" element={<Recipes />} />
          <Route path="/home/aboutus" element={<AboutUs />} />
          <Route path="/home/contactus" element={<ContactUs />} />
          <Route path='/home/legal' element={<Legal />} />
          <Route path='/home/cookie' element={<Cookie />} />
          <Route path='/home/privacy' element={<Privacy />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
