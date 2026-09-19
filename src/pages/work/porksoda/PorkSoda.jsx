import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteNav from "../../../components/SiteNav.jsx";
import ProjectFooter from "../../../components/ProjectFooter.jsx";
import "../CaseStudy.css";

export default function PorkSoda() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-page-wrapper">
            <SiteNav />

            <section className="case case-head">
                <h1 className="case-title">Pork Soda</h1>
                <p className="case-lead">
                    Pork Soda is a creative, colourful, fun, and stylized lyric
                    music video to the song Pork Soda by Glass Animals. The
                    vision with this project was to make something that
                    showcased the slightly psychedelic lyrics and meaning behind
                    the song, all while keeping it bright and colourful like the
                    beat suggests.
                </p>
                <dl className="case-meta">
                    <div>
                        <dt>Role</dt>
                        <dd>Designer &amp; Animator</dd>
                    </div>
                    <div>
                        <dt>Tools & Skills</dt>
                        <dd>Illustrator, After Effects</dd>
                    </div>
                    <div>
                        <dt>Categories</dt>
                        <dd>Design, Motion Graphics</dd>
                    </div>
                </dl>
            </section>

            <div className="case case-visual">
                <img
                    className="case-img"
                    src="/work/porksoda/header.gif"
                    alt="Pork Soda project hero"
                />
            </div>

            <section className="case case-section">
                <p className="eyebrow">Inspiration</p>
                <h2 className="case-h2">
                    Inspiration and <span className="accent">colours</span>
                </h2>
                <p className="case-body">
                    Pork Soda was made from my love for animation, and my love
                    for the fun and interesting imagery Glass Animals adds to
                    their songs. I wanted to use bright vibrant colours, with
                    cartoony imagery, to both display the fun upbeat tune of the
                    song, and the slightly more impactful lyrics.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/porksoda/inspo.png"
                    alt="Pork Soda inspiration"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Storyboarding</p>
                <h2 className="case-h2">
                    Connecting each <span className="accent">panel</span>
                </h2>
                <p className="case-body">
                    The storyboard for this project was mainly focused on
                    interconnecting each panel in a smooth way that also used
                    imagery to help support the lyrics.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/porksoda/storyboard.png"
                    alt="Pork Soda storyboard"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Design process</p>
                <h2 className="case-h2">
                    From Illustrator to{" "}
                    <span className="accent">After Effects</span>
                </h2>

                <div className="step">
                    <h3 className="step__t">1. Animating</h3>
                    <p className="step__d">
                        With a clear goal and image in mind, making the visuals
                        in Illustrator and animating them in After Effects was
                        next. Getting each part to sync up to the music, as well
                        as blend smoothly together when putting them side by
                        side was a challenge, but with time and detail, it was
                        done.
                    </p>
                    <img
                        className="step__vid"
                        src="/work/porksoda/animating.png"
                        alt="Pork Soda animating process"
                    />
                </div>

                <div className="step">
                    <h3 className="step__t">2. Final product</h3>
                    <iframe
                        src="https://drive.google.com/file/d/1vLhxmw3Hlnouz9QohWt1LKpMmcITCfyk/preview"
                        className="step__vid step__iframe"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Pork Soda final music video"
                    />
                </div>
            </section>

            <section className="case case-section">
                <p className="eyebrow">Reflection</p>
                <h2 className="case-h2">What this taught me</h2>
                <p className="case-body">
                    I’ve always had a love for animating and art, it was my
                    first and current love and passion. Getting the chance to
                    animate and create something from scratch made this project
                    truly enjoyable.
                </p>
                <p className="case-body">
                    I learned a lot about animating full sequences,
                    storyboarding, and have grown as an animator and Graphic
                    designer. It&apos;s taught me a lot about the process, and
                    attention to detail each piece needs to make one coherent
                    and amazing product.
                </p>
                <p className="case-body">
                    It&apos;s also taught me to have fun, test new methods, and
                    to try new things and expand my knowledge! Enjoy some of my
                    test videos.
                </p>

                <div className="case-gallery case-gallery--2">
                    <div className="case-gallery__item">
                        <iframe
                            src="https://drive.google.com/file/d/1JzvPmbTOgA-x-R5lH987_M_PLoDtrqZd/preview"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Pork Soda test video 1"
                        />
                    </div>
                    <div className="case-gallery__item">
                        <iframe
                            src="https://drive.google.com/file/d/1uqZG9jDRh802FjRnpOXBK7PdThTk3rGQ/preview"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Pork Soda test video 2"
                        />
                    </div>
                </div>

                <p className="case-body case-body--spaced">
                    Thank you for reading.
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
