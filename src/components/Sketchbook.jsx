import { useState } from "react";
import { sketchbook } from "../data/content.js";
import "./Sketchbook.css";
import Contact from "./Contact.jsx";
import FadeInSection from "./FadeInSection.jsx";

export default function Sketchbook() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <section className="sketchbook">
                <header className="sketchbook__header">
                    <FadeInSection delay={0}>
                        <p className="sketchbook__label">
                            A Collection of Varying Sketches, Client Projects
                            and Commissions, and Personal Work!
                        </p>
                    </FadeInSection>
                    <FadeInSection delay={0.5}>
                        <h1 className="sketchbook__title">
                            {sketchbook.title}
                        </h1>
                    </FadeInSection>
                </header>
                <FadeInSection delay={1}>
                    <div className="sketchbook__grid">
                        {sketchbook.images.map((image) => (
                            <button
                                key={image.id}
                                type="button"
                                className="sketchbook__item"
                                onClick={() => setSelectedImage(image)}
                                aria-label={`View ${image.alt}`}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="sketchbook__image"
                                />
                            </button>
                        ))}
                    </div>
                </FadeInSection>
                {selectedImage && (
                    <div
                        className="sketchbook__modal"
                        onClick={() => setSelectedImage(null)}
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedImage.alt}>
                        <button
                            type="button"
                            className="sketchbook__modal-close"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close">
                            ×
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="sketchbook__modal-image"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
            </section>
            <Contact />
        </div>
    );
}
