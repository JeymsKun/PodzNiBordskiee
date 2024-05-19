import logo from '../logo.svg';
import '../css/style.css';
import '../css/responsive.css';
import '../App.css';
import projectLogo from '../img/logo.png';

function HeaderAbout() {
    return (
      <header className="header">
          <a href="index.html" className="logo"><img src={projectLogo} alt="logo"/></a>
  
          <input type="checkbox" id="check"/>
          <label htmlFor="check" className="icons">
              <i className='bx bx-menu' id="menu-icon"></i>
              <i className='bx bx-x' id="close-icon"></i>
          </label>
  
          <nav className="navbar">
              <a href="index.html" style={{"--i": "0"}} className="home-btn">Home</a>
              <a href="recipes.html" style={{"--i": "1"}} className="recipes-btn">Recipes</a>
              <a href="about-us.html" style={{"--i": "2"}} className="about-us-btn">About Us</a>
              <a href="contact-us.html" style={{"--i": "3"}} className="contact-btn">Contact Us</a>
              <a href="sign-up.html" style={{"--i": "4"}} className="login-btn">Sign Up</a>
          </nav>
      </header>
    );
  }
  
export default HeaderAbout;
  