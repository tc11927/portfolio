import { profile, hero } from "../data/content.js";

import "./Hero.css";
import FadeInSection from "./FadeInSection.jsx";

export default function Hero() {
    const { statement } = hero;

    return (
        <section
            id="hero"
            className="hero">
            <div className="hero__content">
                <div className="hero__copy">
                    <div className="hero__typography">
                        <FadeInSection delay={0}>
                            <h1 className="hero__headline">
                                <div className="hero__greeting">
                                    {hero.greeting}
                                </div>
                                <span className="hero__name">
                                    {hero.firstName}
                                </span>
                            </h1>
                        </FadeInSection>
                    </div>

                    <div className="hero__statement-block">
                        <FadeInSection delay={0.5}>
                            <blockquote className="hero__statement">
                                {statement.before}{" "}
                                <em className="hero__accent">
                                    {statement.accent1}
                                </em>
                                {statement.middle}{" "}
                                <em className="hero__accent">
                                    {statement.accent2}
                                </em>
                                {statement.after}
                            </blockquote>
                        </FadeInSection>
                        <p className="hero__tags">
                            <FadeInSection delay={1}>
                                <div className="hero_tags_area">
                                    <p className="hero_tags_1">
                                        Digital Design
                                    </p>
                                    <p className="hero_tags_2">UI/UX Design</p>
                                    <p className="hero_tags_3">
                                        Motion Graphics
                                    </p>
                                    <p className="hero_tags_4">Illustrations</p>
                                </div>
                            </FadeInSection>
                        </p>
                    </div>
                </div>

                <FadeInSection delay={1.5}>
                    <div className="hero__visual">
                        <img
                            src="/home/me.svg"
                            alt="Thea waving"
                            className="hero__me-gif"
                        />
                    </div>
                </FadeInSection>
            </div>

            <div
                className="hero__marquee"
                aria-label="Visual storytelling rooted in curiosity and care">
                <div
                    className="hero__marquee-grid"
                    aria-hidden="true"
                />
                <div className="hero__marquee-track">
                    {Array.from({ length: 2 }).map((_, i) => (
                        <p
                            key={i}
                            className="hero__marquee-text">
                            {hero.marquee.line1}{" "}
                            <span className="hero__marquee-accent">
                                {hero.marquee.accent1}
                            </span>{" "}
                            {hero.marquee.connector}{" "}
                            <span className="hero__marquee-accent">
                                {hero.marquee.accent2}
                            </span>
                            <span className="hero__marquee-sep"> · </span>
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
