import { Link, useLocation, useNavigate } from "react-router-dom";
import { hero, navLinks } from "../data/content.js";
import "./SiteNav.css";

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function SiteNav({ active = "home" }) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSectionClick = (scrollId) => {
        if (location.pathname === "/") {
            scrollTo(scrollId);
            return;
        }
        navigate(`/#${scrollId}`);
    };

    return (
        <header className="site-nav">
            <Link
                to="/"
                className="site-nav__logo-link"
                aria-label="Home">
                <img
                    src="/personalLogo.svg"
                    alt="Thea C logo"
                    className="site-nav__logo"
                />
            </Link>

            <nav
                className="site-nav__links"
                aria-label="Primary">
                {navLinks.map((link) => {
                    const isExternal = link.path?.startsWith("http");

                    if (isExternal) {
                        return (
                            <a
                                key={link.id}
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`site-nav__link site-nav__link--${link.hoverColor}`}>
                                {link.label}
                            </a>
                        );
                    }

                    if (link.path) {
                        return (
                            <Link
                                key={link.id}
                                to={link.path}
                                className={`site-nav__link site-nav__link--${link.hoverColor} ${
                                    active === link.id
                                        ? "site-nav__link--active"
                                        : ""
                                }`}>
                                {link.label}
                            </Link>
                        );
                    }

                    return (
                        <button
                            key={link.id}
                            type="button"
                            className={`site-nav__link site-nav__link--${link.hoverColor}`}
                            onClick={() => handleSectionClick(link.scrollId)}>
                            {link.label}
                        </button>
                    );
                })}
            </nav>
        </header>
    );
}
