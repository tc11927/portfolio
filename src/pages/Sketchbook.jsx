import { useEffect } from "react";
import SiteNav from "../components/SiteNav.jsx";
import SketchbookGallery from "../components/Sketchbook.jsx";
import "./Sketchbook.css";

export default function Sketchbook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sketchbook-page">
      <SiteNav active="sketchbook" />
      <SketchbookGallery />
    </div>
  );
}
