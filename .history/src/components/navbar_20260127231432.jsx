import "./navbar.css";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="whole-nav">
      <img className="logo" src="/home/personalLogo.svg" />

      <div className="nav-links">
        <Link Link to="/about" className="about-nav">About</Link>
        <Link className="work-nav">Work</Link>
        <Link className="gallery-nav">Gallery</Link>
        <Link className="contact-nav">Contact</Link>
      </div>
    </div>
  );
}
