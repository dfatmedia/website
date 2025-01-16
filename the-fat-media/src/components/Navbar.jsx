import './styles/Navbar.css'
import Button from './Button'

const Navbar = () => {
  return (
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
    </nav>
  );
};
export default Navbar;
