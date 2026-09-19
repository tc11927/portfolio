import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteNav from "../../../components/SiteNav.jsx";
import ProjectFooter from "../../../components/ProjectFooter.jsx";
import Cans from "./cans.jsx";
import "../CaseStudy.css";

export default function Popunk() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-page-wrapper">
            <SiteNav />

            <section className="case case-head">
                <h1 className="case-title">POPUNK!</h1>
                <p className="case-lead">
                    POPUNK! Is a high voltage energy drink created for the late
                    nights, fun times, and chaotic energy everyone needs during
                    their late night fun with friends. The goal was to make a
                    product that was both fun and bright, but also marketed
                    towards an older demographic with bold and vibrant imagery.
                </p>
                <dl className="case-meta">
                    <div>
                        <dt>Role</dt>
                        <dd>Designer</dd>
                    </div>
                    <div>
                        <dt>Tools & Skills</dt>
                        <dd>Illustrator, Photoshop</dd>
                    </div>
                    <div>
                        <dt>Category</dt>
                        <dd>Design</dd>
                    </div>
                </dl>
            </section>

            <div className="case case-visual">
                <img
                    className="case-img"
                    src="/work/popunk/header.jpg"
                    alt="POPUNK! project hero"
                />
            </div>

            <section className="case case-section">
                <p className="eyebrow">Inspiration</p>
                <h2 className="case-h2">
                    From cat to <span className="accent">concept</span>
                </h2>
                <p className="case-body">
                    POPUNK! was made from many sources of inspiration, with my
                    primary inspiration coming from my lovely ragdoll cat.
                    She&apos;s always beside me as I work, and I thought she
                    deserved to be featured in some sort of way in my projects!
                    This started my journey into finding different styles and
                    imagery I wanted to go with.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/popunk/inspo.png"
                    alt="POPUNK! inspiration"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Styleguide</p>
                <h2 className="case-h2">
                    Neon colours and <span className="accent">personality</span>
                </h2>
                <p className="case-body">
                    The style guide for this drink line was made focusing on
                    bright neon colours, fun text, and stylized imagery. Because
                    of the amount of products in the line, I tried to also
                    correlate colours to the energy and vibes of the roles that
                    the cats took (singer, drummer, and guitarist). Keeping this
                    in mind, I composed images and colours I wanted.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/popunk/styleguide.png"
                    alt="POPUNK! styleguide"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Design process</p>
                <h2 className="case-h2">
                    Iteration to <span className="accent">final product</span>
                </h2>

                <div className="step">
                    <h3 className="step__t">1. Iteration</h3>
                    <p className="step__d">
                        With a clear goal and image in mind, iteration went
                        fairly smoothly. Only small adjustments to colour and
                        cat design were made to ensure each product had a
                        distinct identity and was easy to differentiate.
                    </p>
                    <img
                        className="step__vid"
                        src="/work/popunk/iteration.png"
                        alt="POPUNK! iteration"
                    />
                </div>

                <div className="step">
                    <h3 className="step__t">2. Final product</h3>
                    <Cans />
                    <img
                        className="step__vid case-img--mt"
                        src="/work/popunk/all.png"
                        alt="POPUNK! full product line"
                    />
                </div>
            </section>

            <section className="case case-section">
                <p className="eyebrow">Reflection</p>
                <h2 className="case-h2">What this taught me</h2>
                <p className="case-body">
                    POPUNK! was created out of my love for both design and my
                    cat, and was a project I enjoyed deeply. It was a mix of
                    both my passion for creation and my own interest and
                    hobbies, which made this project so memorable.
                </p>
                <p className="case-body">
                    I learned a lot about product design, and have grown as a
                    Graphic designer and creator. It&apos;s taught me a lot
                    about discovering my own distinct style, and rekindled my
                    love for creation.
                </p>
                <img
                    className="case-img case-img--mt"
                    src="/work/popunk/journey.png"
                    alt="POPUNK! journey and impact"
                />
                <p className="case-body case-body--spaced">
                    Thank you for reading!
                </p>
            </section>

            <div className="case case-cta">
                <Link
                    className="btn"
                    to="/#work">
                    More projects <span aria-hidden="true">→</span>
                </Link>
            </div>

            <ProjectFooter />
        </div>
    );
}
