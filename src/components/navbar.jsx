import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="whole-nav">
            <Link
                to="/home"
                className="logo-link"
                aria-label="Home">
                <img
                    className="logo"
                    src="/personalLogo.svg"
                    alt="Logo"
                />
            </Link>

            <div className="nav-links">
                <Link
                    to="/work"
                    className="work-nav">
                    Work
                </Link>
                <Link
                    to="/add"
                    className="gallery-nav">
                    Gallery
                </Link>
                <Link
                    to="/about"
                    className="about-nav">
                    About
                </Link>
                <Link
                    to="/contact"
                    className="contact-nav">
                    Contact
                </Link>
            </div>
        </div>
    );
}
