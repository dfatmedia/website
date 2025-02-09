import { useState } from 'react';
import './Navbar.css'
import Button from '../Button/Button'

const Navbar = () => {
  
 const[menuOpen, setMenuOpen] = useState(false)

 const toggleMenu = () =>{
  setMenuOpen(!menuOpen)
 }

 const closeMenu = () =>{
  setMenuOpen(false);
 }

  return(
    <nav className="navbar">
    <div className="navbar-logo">
      <img src="/Logo.png" alt="Logo" />
    </div>
    <ul className="navbar-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#about">About</a></li>
    </ul>
    <div className="navbar-button">
      <Button>Let's Talk</Button>
    </div>

    
      {/* Hamburger Menu for Mobile */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Sliding Menu for Mobile */}
      <div className={`navbar-slide-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#about" onClick={closeMenu}>About</a>
      </div>

       {/* Gradient Background */}
       <div
        className={`navbar-gradient ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      ></div> 

  </nav>
  
  )
  
};
export default Navbar;
