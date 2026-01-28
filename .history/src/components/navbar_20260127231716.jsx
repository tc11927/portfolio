import "./navbar.css";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="whole-nav">
   <Link to="/home" >  
        <img className="logo" src="/home/personalLogo.svg" alt="Home" />
      </Link>

      <div className="nav-links">
        <Link to="/about" className="about-nav">About</Link>
        <Link to="/work" className="work-nav">Work</Link>
        <Link to="/add" className="gallery-nav">Gallery</Link>
        <Link to="/contact" className="contact-nav">Contact</Link>
      </div>
    </div>
  );
}
