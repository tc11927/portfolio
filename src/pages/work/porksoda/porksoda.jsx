import Footer from "../../../components/footer";
import "./porksoda.css";
import NavBar from "../../../components/navbar";

export default function PorkSoda() {
    return (
        <div className="popunkpage-wrapper">
            <NavBar />

            <header className="popunk-hero-fullscreen">
                <img
                    src="/work/popunk/header.jpg"
                    alt="This is Paramore – hero background"
                    className="popunk-hero-fullscreen-image"
                />
            </header>

            <section className="banditsection">
                <div className="banditcontainer">
                    <h1 className="banditproject-title">Pork Soda</h1>
                    <p className="banditproject-roles">
                        Role: Designer & Animator
                    </p>

                    <div className="bandittags">
                        <span className="bandittag1">Design</span>
                        <span className="bandittag3">Motion Graphics</span>
                    </div>

                    <div className="bandithero-content">
                        <div className="bandithero-text"></div>

                        <div className="bandithero-image">
                            <p className="bandithero-text1">
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

            <nav className="popunksection-nav">
                <div className="popunkcontainer">
                    <div className="popunk-two-column">
                        <div className="popunk-text-content">
                            <p className="popunksection-title">View Section:</p>
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

                        <div className="popunk-media-column">
                            <div className="popunk-nav-image">
                                <img
                                    src="/work/popunk/nav.png"
                                    className="popunk-large-media"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="popunksection">
                <div className="popunkcontainer">
                    <div
                        className="popunk-section-header"
                        id="inspo">
                        <span className="popunk-section-number">01</span>
                        <div className="popunk-section-line"></div>
                        <span className="popunk-section-label">
                            Inspiration
                        </span>
                    </div>

                    <div className="popunk-branding-text">
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

                        <div className="popunk-journey-video-wrapper">
                            <img
                                className="popunk-journey"
                                src="/work/popunk/inspo.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="popunksection popunksection-alt"
                id="styleguide">
                <div className="popunkcontainer">
                    <div className="popunk-section-header">
                        <span className="popunk-section-number">02</span>
                        <div className="popunk-section-line"></div>
                        <span className="popunk-section-label">Styleguide</span>
                    </div>

                    <div className="popunk-branding-text">
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

                        <div className="popunk-journey-video-wrapper">
                            <img
                                className="popunk-journey"
                                src="/work/popunk/styleguide.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="popunksection">
                <div className="popunkcontainer">
                    <div
                        className="popunk-section-header"
                        id="iteration">
                        <span className="popunk-section-number">03</span>
                        <div className="popunk-section-line"></div>
                        <span className="popunk-section-label">Iteration</span>
                    </div>

                    <div className="popunk-branding-text">
                        <h2>Iteration</h2>
                        <p>
                            With a clear goal and image in mind, iteration went
                            fairly smoothly. Only small adjustments to colour
                            and cat design were made to ensure each product had
                            a distinct identity and was easy to differentiate.
                        </p>

                        <div className="popunk-journey-video-wrapper">
                            <img
                                className="popunk-journey"
                                src="/work/popunk/iteration.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="popunksection">
                <div className="popunkcontainer">
                    <div
                        className="popunk-section-header"
                        id="final">
                        <span className="popunk-section-number">04</span>
                        <div className="popunk-section-line"></div>
                        <span className="popunk-section-label">
                            Final Product
                        </span>
                    </div>

                    <div className="popunk-branding-text">
                        <h2>Final Product</h2>
                        <p></p>

                        <div className="popunk-journey-video-wrapper">
                            <img
                                className="popunk-journey"
                                src="/work/popunk/all.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="popunksection popunksection-alt"
                id="Journey">
                <div
                    className="popunkcontainer"
                    id="Journey">
                    <div className="popunk-section-header">
                        <span className="popunk-section-number">05</span>
                        <div className="popunk-section-line"></div>
                        <span className="popunk-section-label">
                            The Journey and Impact
                        </span>
                    </div>

                    <div className="popunk-journey-video-wrapper">
                        <img
                            src="/work/popunk/journey.png"
                            className="popunk-journey"
                            alt="Reflection and key learnings visualization"
                        />
                    </div>
                    <img
                        src="/work/minime/celebrate.svg"
                        className="popunk-floating-overlay4"
                    />
                    <div className="popunk-branding-text">
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
