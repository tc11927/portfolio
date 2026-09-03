import { useEffect } from "react";
import SiteNav from "../components/SiteNav.jsx";

import { profile, aboutPage } from "../data/content.js";
import "./About.css";
import Contact from "../components/Contact.jsx";
import FadeInSection from "../components/FadeInSection.jsx";

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const contactUrl = profile.socials[0]?.url || `mailto:${profile.email}`;

    return (
        <div className="about-page">
            <div
                className="about-page__grid-bg"
                aria-hidden="true"
            />
            <SiteNav active="about" />

            <section className="about-intro">
                <FadeInSection delay={0}>
                    <div className="about-intro__visual">
                        <img
                            src="/about/moii.jpg"
                            alt="Thea illustration"
                            className="about-intro__gif"
                        />
                    </div>
                </FadeInSection>
                <div className="about-intro__text">
                    <FadeInSection delay={0.5}>
                        <h1 className="about-intro__heading">
                            {aboutPage.heading}
                        </h1>
                    </FadeInSection>
                    <FadeInSection delay={1}>
                        {aboutPage.paragraphs.map((paragraph) => (
                            <p
                                key={paragraph.slice(0, 24)}
                                className="about-intro__paragraph">
                                {paragraph}
                            </p>
                        ))}
                    </FadeInSection>
                    <FadeInSection delay={1.5}>
                        <div className="about-intro__skills">
                            {aboutPage.skills.map((skill, i) => (
                                <span
                                    key={skill}
                                    className={`about-intro__skill about-intro__skill--${i % 4}`}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </FadeInSection>
                </div>
            </section>

            <Contact />
        </div>
    );
}
