import Footer from "../../../components/footer";
import "./moolahmate.css";
import NavBar from "../../../components/navbar";

export default function MoolahMate() {
    return (
        <div className="moolahmate-page-wrapper">
            <NavBar />

            <header className="moolahmate-hero-fullscreen">
                <img
                    src="/work/moolahmate/header.png"
                    alt="This is Paramore – hero background"
                    className="moolahmate-hero-fullscreen-image"
                />
            </header>

            <section className="moolahmate-section">
                <div className="moolahmate-container">
                    <h1 className="moolahmate-project-title">MoolahMate</h1>
                    <p className="moolahmate-project-roles">
                        Roles: Graphic Designer, UI/UX Designer & Animator
                    </p>

                    <div className="moolahmate-tags">
                        <span className="moolahmate-tag1">Design</span>
                        <span className="moolahmate-tag2">UI/UX</span>
                        <span className="moolahmate-tag3">Motion Graphics</span>
                        <span className="moolahmate-tag4">Front-end</span>
                    </div>

                    <div className="moolahmate-hero-content">
                        <div className="moolahmate-hero-text"></div>

                        <div className="moolahmate-hero-image">
                            <p className="moolahmate-hero-text1">
                                MoolahMate is a money management tracker for
                                university students, with a twist. Moolahmate
                                uses fun gaming mechanics to reduce the stress
                                and complexities of finance tracking that many
                                younger students face with the temptations of
                                the present world.
                            </p>
                            <p className="moolahmate-hero-text2">
                                MoolahMate is a gamified budgeting app that not
                                only helps people save money and track their
                                spending, but also makes it a fun, engaging
                                process with our fun mascot, MooMoo the
                                money-saving cow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="moolahmate-section-nav">
                <div className="moolahmate-container">
                    <div className="moolahmate-two-column">
                        <div className="moolahmate-text-content">
                            <p className="moolahmate-section-title">
                                View Section:
                            </p>
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

                        <div className="moolahmate-media-column">
                            <div className="moolahmate-nav-image">
                                <img
                                    src="/work/moolahmate/moodance.gif"
                                    className="moolahmate-large-media"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section
                className="moolahmate-section"
                id="inspo">
                <div className="moolahmate-container">
                    <div className="moolahmate-section-header">
                        <span className="moolahmate-section-number">01</span>
                        <div className="moolahmate-section-line"></div>
                        <span className="moolahmate-section-label">
                            Inspiration
                        </span>
                    </div>

                    <div className="moolahmate-branding-text">
                        <h2>Inspiration</h2>
                        <p>
                            Through our research, we found out about the
                            struggles the younger generation has when it comes
                            to saving money. We learned about how disengaging
                            normal budgeting apps can be, and wanted to make a
                            gamified version to increase engagement and
                            interest!
                        </p>

                        <div className="moolahmate-journey-video-wrapper2">
                            <img
                                className="moolahmate-journey"
                                src="/work/moolahmate/Ideation.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="moolahmate-section moolahmate-section-alt"
                id="styleguide">
                <div className="moolahmate-container">
                    <div className="moolahmate-section-header">
                        <span className="moolahmate-section-number">02</span>
                        <div className="moolahmate-section-line"></div>
                        <span className="moolahmate-section-label">
                            Styleguide
                        </span>
                    </div>

                    <div className="moolahmate-branding-text">
                        <h2> Styleguide </h2>
                        <p>
                            The style guide for MoolahMate was made to be clear,
                            calming, and simple, as we didn’t want to confuse
                            our users with our design. We used simple, calming
                            colours to make sure users could see everything
                            clearly.
                        </p>
                        <p>
                            We wanted our app to not only be calming, but fun
                            and engaging, which is where MooMoo came in. Having
                            been in charge of making our main mascot, I wanted
                            to make sure he was made out of round shapes to calm
                            users. I also made sure his design was fairly simple
                            to match our app theme, and to allow for later
                            customization by users.
                        </p>

                        <div className="moolahmate-journey-video-wrapper">
                            <img
                                className="moolahmate-journey"
                                src="/work/moolahmate/styleguide.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="moolahmate-section"
                id="iteration">
                <div className="moolahmate-container">
                    <div className="moolahmate-section-header">
                        <span className="moolahmate-section-number">03</span>
                        <div className="moolahmate-section-line"></div>
                        <span className="moolahmate-section-label">
                            Iteration
                        </span>
                    </div>

                    <div className="moolahmate-branding-text">
                        <h2>Iteration</h2>
                        <p>
                            With everything we had planned, our ideas and
                            features we wanted to implement were too
                            complicated, and some of them confused our users,
                            which we found out during user testing. To fix this,
                            we narrowed our goal and simplified our app even
                            further.
                        </p>
                        <p>
                            Through iterations, an issue with combining both
                            design and code came up. It was the first time for
                            all of us to combine code and design to make a
                            functioning app, which was confusing. Having better
                            communication, seeking help from others when needed,
                            and constantly learning helped solve this problem.
                        </p>

                        <div className="moolahmate-journey-video-wrapper">
                            <img
                                className="moolahmate-journey"
                                src="/work/moolahmate/iteration.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="moolahmate-section"
                id="final">
                <div className="moolahmate-container">
                    <div className="moolahmate-section-header">
                        <span className="moolahmate-section-number">04</span>
                        <div className="moolahmate-section-line"></div>
                        <span className="moolahmate-section-label">
                            Final Product
                        </span>
                    </div>

                    <div className="moolahmate-branding-text">
                        <h2>Final Product</h2>

                        <div className="moolahmate-gallery-item2">
                            <iframe
                                className="moolahmate-gallery-image2"
                                src="https://drive.google.com/file/d/1bqDa1u7zkX9Jw4Nltx_ITX8Z0zd4HFKz/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 5"
                            />
                        </div>
                        <p>
                            <div className="paramore-site-button-wrapper">
                                <a
                                    href="https://github.com/AlyssaHug/Design02_App"
                                    className="paramore-site-button"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    View Code
                                </a>
                            </div>
                        </p>
                    </div>
                </div>
            </section>

            <section
                className="moolahmate-section moolahmate-section-alt"
                id="Journey">
                <div
                    className="moolahmate-container"
                    id="Journey">
                    <div className="moolahmate-section-header">
                        <span className="moolahmate-section-number">05</span>
                        <div className="moolahmate-section-line"></div>
                        <span className="moolahmate-section-label">
                            The Journey and Impact
                        </span>
                    </div>

                        <div className="moolahmate-journey-video-wrapper">
                            <img
                                className="moolahmate-journey"
                                src="/work/moolahmate/reflect.png"
                            />
                        </div>
                    <img
                        src="/work/minime/celebrate.svg"
                        className="moolahmate-floating-overlay4"
                    />
                    <div className="moolahmate-branding-text">
                        <h2>The Journey & Impact</h2>
                        <p>
                            MoolahMate was a project that encouraged growth and
                            learning, having been the first time I’ve ever
                            combined design and code to create a fully
                            functioning app. It mixed both my technical and
                            creative skills and opened my eyes to how to make
                            sure both sides work in harmony.
                        </p>
                        <p>
                            I learned a lot about coding going hand in hand with
                            design, and it’s taught me a lot about how to make
                            the two go hand in hand. It was definitely a good
                            learning experience and I’ve taken a lot from it!
                        </p>

                        <p>Thank you for reading!</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
