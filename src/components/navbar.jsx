import "./navbar.css";

export default function NavBar() {
  return (
    <div className="whole-nav">
      <img className="logo" src="/home/personalLogo.svg" />

      <div className="nav-links">
        <div className="about-nav">About</div>
        <div className="work-nav">Work</div>
        <div className="gallery-nav">Gallery</div>
        <div className="contact-nav">Contact</div>
      </div>
    </div>
  );
}
