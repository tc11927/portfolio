import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="whole-nav">
            <Link to="/">
                {" "}
                {/* ← change from "/home" */}
                <img
                    className="logo"
                    src="/personalLogo.svg" // assuming you fixed the path as discussed
                    alt="Logo"
                />
            </Link>

            <div className="nav-links">
                <Link
                    to="/about"
                    className="about-nav">
                    About
                </Link>
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
                    to="/contact"
                    className="contact-nav">
                    Contact
                </Link>
            </div>
        </div>
    );
}
