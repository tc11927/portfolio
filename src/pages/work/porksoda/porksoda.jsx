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
                        Role: Designer & Animator
                    </p>

                    <div className="porksoda-tags">
                        <span className="porksoda-tag1">Design</span>
                        <span className="porksoda-tag3">Motion Graphics</span>
                    </div>

                    <div className="porksoda-hero-content">
                        <div className="porksoda-hero-text"></div>

                        <div className="porksoda-hero-image">
                            <p className="porksoda-hero-text1">
                                POPUNK! Is a high voltage energy drink created
                                for the late nights, fun times, and chaotic
                                energy everyone needs during their late night
                                fun with friends. The goal was to make a product
                                that was both fun and bright, but also marketed
                                towards an older demographic with bold and
                                vibrant imagery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="porksoda-section-nav">
                <div className="porksoda-container">
                    <div className="porksoda-two-column">
                        <div className="porksoda-text-content">
                            <p className="porksoda-section-title">View Section:</p>
                            <ul>
                                <li>
                                    <a href="#inspo">01. Inspiration</a>
                                </li>
                                <li>
                                    <a href="#styleguide">02. Styleguide</a>
                                </li>
                                <li>
                                    <a href="#iteration">03. Iteration</a>
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
                                    src="/work/popunk/nav.png"
                                    className="porksoda-large-media"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="porksoda-section" id="inspo">
                <div className="porksoda-container">
                    <div className="porksoda-section-header">
                        <span className="porksoda-section-number">01</span>
                        <div className="porksoda-section-line"></div>
                        <span className="porksoda-section-label">
                            Inspiration
                        </span>
                    </div>

                    <div className="porksoda-branding-text">
                        <h2>Inspiration</h2>
                        <p>
                            POPUNK! was made from many sources of inspiration,
                            with my primary inspiration coming from my lovely
                            ragdoll cat. She’s always beside me as I work, and I
                            thought she deserved to be featured in some sort of
                            way in my projects! This started my journey into
                            finding different styles and imagery I wanted to go
                            with.
                        </p>

                        <div className="porksoda-journey-video-wrapper">
                            <img
                                className="porksoda-journey"
                                src="/work/popunk/inspo.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="porksoda-section porksoda-section-alt" id="styleguide">
                <div className="porksoda-container">
                    <div className="porksoda-section-header">
                        <span className="porksoda-section-number">02</span>
                        <div className="porksoda-section-line"></div>
                        <span className="porksoda-section-label">Styleguide</span>
                    </div>

                    <div className="porksoda-branding-text">
                        <h2> Styleguide </h2>
                        <p>
                            The style guide for this drink line was made
                            focusing on bright neon colours, fun text, and
                            stylized imagery. Because of the amount of products
                            in the line, I tried to also correlate colours to
                            the energy and vibes of the roles that the cats took
                            (singer, drummer, and guitarist). Keeping this in
                            mind, I composed images and colours I wanted.
                        </p>

                        <div className="porksoda-journey-video-wrapper">
                            <img
                                className="porksoda-journey"
                                src="/work/popunk/styleguide.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="porksoda-section" id="iteration">
                <div className="porksoda-container">
                    <div className="porksoda-section-header">
                        <span className="porksoda-section-number">03</span>
                        <div className="porksoda-section-line"></div>
                        <span className="porksoda-section-label">Iteration</span>
                    </div>

                    <div className="porksoda-branding-text">
                        <h2>Iteration</h2>
                        <p>
                            With a clear goal and image in mind, iteration went
                            fairly smoothly. Only small adjustments to colour
                            and cat design were made to ensure each product had
                            a distinct identity and was easy to differentiate.
                        </p>

                        <div className="porksoda-journey-video-wrapper">
                            <img
                                className="porksoda-journey"
                                src="/work/popunk/iteration.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="porksoda-section" id="final">
                <div className="porksoda-container">
                    <div className="porksoda-section-header">
                        <span className="porksoda-section-number">04</span>
                        <div className="porksoda-section-line"></div>
                        <span className="porksoda-section-label">
                            Final Product
                        </span>
                    </div>

                    <div className="porksoda-branding-text">
                        <h2>Final Product</h2>
                        <p></p>

                        <div className="porksoda-journey-video-wrapper">
                            <img
                                className="porksoda-journey"
                                src="/work/popunk/all.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="porksoda-section porksoda-section-alt" id="Journey">
                <div className="porksoda-container" id="Journey">
                    <div className="porksoda-section-header">
                        <span className="porksoda-section-number">05</span>
                        <div className="porksoda-section-line"></div>
                        <span className="porksoda-section-label">
                            The Journey and Impact
                        </span>
                    </div>

                    <div className="porksoda-journey-video-wrapper">
                        <img
                            src="/work/popunk/journey.png"
                            className="porksoda-journey"
                            alt="Reflection and key learnings visualization"
                        />
                    </div>
                    <img
                        src="/work/minime/celebrate.svg"
                        className="porksoda-floating-overlay4"
                    />
                    <div className="porksoda-branding-text">
                        <h2>The Journey & Impact</h2>
                        <p>
                            POPUNK! was created out of my love for both design
                            and my cat, and was a project I enjoyed deeply. It
                            was a mix of both my passion for creation and my own
                            interest and hobbies, which made this project so
                            memorable.
                        </p>
                        <p>
                            I learned a lot about product design, and have grown
                            as a Graphic designer and creator. It’s taught me a
                            lot about discovering my own distinct style, and
                            rekindled my love for creation.
                        </p>

                        <p>Thank you for reading!</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}