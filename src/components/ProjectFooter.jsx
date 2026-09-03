import { profile } from "../data/content.js";
import "./ProjectFooter.css";

export default function ProjectFooter() {
  const year = new Date().getFullYear();

  return (
    <div className="footer-container">
      <a
        href={profile.socials[0]?.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon"
      >
        <img src="/home/footer/linkedin.svg" alt="LinkedIn" />
      </a>

      <div className="footer-center">
        <p className="footer-main-text">Let's make something meaningful!</p>
        <p className="footer-credit">© Thea Calaquian {year}</p>
      </div>

      <a href={`mailto:${profile.email}`} className="footer-icon">
        <img src="/home/footer/email.svg" alt="Email" />
      </a>
    </div>
  );
}
