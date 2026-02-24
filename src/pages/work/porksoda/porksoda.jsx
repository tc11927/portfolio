import Footer from "../../../components/footer";
import "./porksoda.css";
import NavBar from "../../../components/navbar";

export default function PorkSoda() {
    return (
        <div className="porksoda-page-wrapper">
            <NavBar />

            <header className="porksoda-hero-fullscreen">
                <img
                    src="/work/porksoda/header.gif"
                    alt="This is Paramore – hero background"
                    className="porksoda-hero-fullscreen-image"
                />
            </header>

            <section className="porksoda-section">
                <div className="porksoda-container">
                    <h1 className="porksoda-project-title">Pork Soda</h1>
                    <p className="porksoda-project-roles">
                        Roles: Designer & Animator
                    </p>

                    <div className="porksoda-tags">
                        <span className="porksoda-tag1">Design</span>
                        <span className="porksoda-tag3">Motion Graphics</span>
                    </div>

                    <div className="porksoda-hero-content">
                        <div className="porksoda-hero-text"></div>

                        <div className="porksoda-hero-image">
                            <p className="porksoda-hero-text1">
                                Pork Soda is a creative, colourful, fun, and
                                stylized lyric music video to the song Pork Soda
                                by Glass Animals. The vision with this project
                                was to make something that showcased the
                                slightly psychedelic lyrics and meaning behind
                                the song, all while keeping it bright and
                                colourful like the beat suggests.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="porksoda-section-nav">
                <div className="porksoda-container">
                    <div className="porksoda-two-column">
                        <div className="porksoda-text-content">
                            <p className="porksoda-section-title">
                                View Section:
                            </p>
                            <ul>
                                <li>
                                    <a href="#inspo">01. Inspiration</a>
                                </li>
                                <li>
                                    <a href="#styleguide">02. Storyboarding</a>
                                </li>
                                <li>
                                    <a href="#iteration">03. Animating</a>
                                </li>
                                <li>
                                    <a href="#final">04. Final Product</a>
                                </li>
                                <li>
                                    <a href="#Journey">
                                        05. The Journey and Impact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="porksoda-media-column">
                            <div className="porksoda-nav-image">
                                <img
                                    src="/work/porksoda/nav.png"
                                    className="porksoda-large-media"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section
                className="porksoda-section"
                id="inspo">
                <div className="porksoda-container">
                    <div className="porksoda-section-header">
                        <span className="porksoda-section-number">01</span>
                        <div className="porksoda-section-line"></div>
                        <span className="porksoda-section-label">
                            Inspiration
                        </span>
                    </div>

                    <div className="porksoda-branding-text">
                        <p>
                            Pork Soda was made from my love for animation, and
                            my love for the fun and interesting imagery Glass
                            Animals adds to their songs. I wanted to use bright
                            vibrant colours, with cartoony imagery, to both
                            display the fun upbeat tune of the song, and the
                            slightly more impactful lyrics.
                        </p>

                        <div className="porksoda-journey-video-wrapper2">
                            <img
                                className="porksoda-journey"
                                src="/work/porksoda/inspo.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="porksoda-section porksoda-section-alt"
                id="styleguide">
                <div className="porksoda-container">
                    <div className="porksoda-section-header">
                        <span className="porksoda-section-number">02</span>
                        <div className="porksoda-section-line"></div>
                        <span className="porksoda-section-label">
                            Storyboarding
                        </span>
                    </div>

                    <div className="porksoda-branding-text">
                        <p>
                            The storyboard for this project was mainly focused
                            on interconnecting each panel in a smooth way that
                            also used imagery to help support the lyrics.
                        </p>

                        <div className="porksoda-journey-video-wrapper1">
                            <img
                                className="porksoda-journey"
                                src="/work/porksoda/storyboard.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="porksoda-section"
                id="iteration">
                <div className="porksoda-container">
                    <div className="porksoda-section-header">
                        <span className="porksoda-section-number">03</span>
                        <div className="porksoda-section-line"></div>
                        <span className="porksoda-section-label">
                            Animating
                        </span>
                    </div>

                    <div className="porksoda-branding-text">
                        <p>
                            With a clear goal and image in mind, making the
                            visuals in Illustrator and animating them in After
                            Effects was next. Getting each part to sync up to
                            the music, as well as blend smoothly together when
                            putting them side by side was a challenge, but with
                            time and detail, it was done.
                        </p>

                        <div className="porksoda-journey-video-wrapper">
                            <img
                                className="porksoda-journey"
                                src="/work/porksoda/animating.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="porksoda-section"
                id="final">
                <div className="porksoda-container">
                    <div className="porksoda-section-header">
                        <span className="porksoda-section-number">04</span>
                        <div className="porksoda-section-line"></div>
                        <span className="porksoda-section-label">
                            Final Product
                        </span>
                    </div>

                    <div className="porksoda-branding-text">
                        <p></p>

                        <div className="porksoda-gallery-item2">
                            <iframe
                                className="porksoda-gallery-image2"
                                src="https://drive.google.com/file/d/1vLhxmw3Hlnouz9QohWt1LKpMmcITCfyk/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 5"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="porksoda-section porksoda-section-alt"
                id="Journey">
                <div
                    className="porksoda-container"
                    id="Journey">
                    <div className="porksoda-section-header">
                        <span className="porksoda-section-number">05</span>
                        <div className="porksoda-section-line"></div>
                        <span className="porksoda-section-label">
                            The Journey and Impact
                        </span>
                    </div>

                    <div className="porksoda-branding-gallery">
                        <div className="porksoda-gallery-item2">
                            <iframe
                                className="porksoda-gallery-image2"
                                src="https://drive.google.com/file/d/1JzvPmbTOgA-x-R5lH987_M_PLoDtrqZd/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 1"
                            />
                        </div>
                        <div className="porksoda-gallery-item2">
                            <iframe
                                className="porksoda-gallery-image2"
                                src="https://drive.google.com/file/d/1uqZG9jDRh802FjRnpOXBK7PdThTk3rGQ/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 1"
                            />
                        </div>
                    </div>
                    <img
                        src="/work/minime/celebrate.svg"
                        className="porksoda-floating-overlay4"
                    />
                    <div className="porksoda-branding-text">
                        <p>
                            I’ve always had a love for animating and art, it was
                            my first and current love and passion. Getting the
                            chance to animate and create something from scratch
                            made this project truly enjoyable.
                        </p>
                        <p>
                            I learned a lot about animating full sequences,
                            storyboarding, and have grown as an animator and
                            Graphic designer. It’s taught me a lot about the
                            process, and attention to detail each piece needs to
                            make one coherent and amazing product.
                        </p>
                        <p>
                            It's also taught me to have fun, test new methods,
                            and to try new things and expand my knowledge! Enjoy
                            some of my test videos :)
                        </p>

                        <p>Thank you for reading!</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
