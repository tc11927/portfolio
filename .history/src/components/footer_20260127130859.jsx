import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <a href="https://linkedin.com/in/theacalaquian" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <img src="./footer/linkedin.svg" alt="LinkedIn" />
      </a>
      
      <div className="footer-center">
        <p className="footer-main-text">let's make something meaningful</p>
        <p className="footer-credit">© Thea Calaquian 2026</p>
      </div>
      
      <a href="mailto:your-email@example.com" className="footer-icon">
        <img src="/footer/email.svg" alt="Email" />
      </a>
    </div>
  );
}