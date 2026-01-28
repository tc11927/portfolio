import "./navbar.css";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="whole-nav">
      <img className="logo" src="/home/personalLogo.svg" />

      <div className="nav-links">
        <div Link to="/about" className="about-nav">About</div>
        <div className="work-nav">Work</div>
        <div className="gallery-nav">Gallery</div>
        <div className="contact-nav">Contact</div>
      </div>
    </div>
  );
}
