import { profile, about } from "../data/content.js";

import "./Contact.css";

export default function Contact() {
    const year = new Date().getFullYear();

    return (
        <footer
            id="contact"
            className="contact">
            <div className="contact__main">
                <div className="contact__left">
                    <h2 className="contact__title">
                        Let's Make Something
                        <br />
                        <div className="meaningful">Meaningful</div>
                    </h2>
                    <div className="contact__grid">
                        <a
                            href={
                                profile.socials[0]?.url ||
                                `mailto:${profile.email}`
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="contact__cta">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact__bottom">
                <span>Designed by Thea Calaquian</span>
                <span> © Thea Calaquian 2026</span>
            </div>
        </footer>
    );
}
