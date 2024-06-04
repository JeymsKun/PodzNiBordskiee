import '../css/style.css';
import '../css/responsive.css';
import React, { useState } from 'react';
import '../App.css';
import projectLogo from '../img/logo.webp';
import { Link } from 'react-router-dom';

function Header() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <header className="header">
      <Link to="/home" className="logo">
        <img src={projectLogo} alt="logo" />
      </Link>

      <input
        type="checkbox"
        id="check"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>

      <nav className="navbar">
        <Link to="/home" style={{ "--i": "0" }} className="home-btn">
          Home
        </Link>
        <Link to="/home/recipes" style={{ "--i": "1" }} className="recipes-btn">
          Recipes
        </Link>
        <Link to="/home/aboutus" style={{ "--i": "2" }} className="about-us-btn">
          About Us
        </Link>
        <Link to="/home/contactus" style={{ "--i": "3" }} className="contact-btn">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default Header;
