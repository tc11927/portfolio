import Footer from "../../../components/footer";
import "./tandemvideo.css";
import NavBar from "../../../components/navbar";

export default function TandemVideo() {
    return (
        <div className="tandemvideo-page-wrapper">
            <NavBar />

            <header className="tandemvideo-hero-fullscreen">
                <img
                    src="/work/tandemvideo/header.gif"
                    alt="This is Paramore – hero background"
                    className="tandemvideo-hero-fullscreen-image"
                />
            </header>

            <section className="tandemvideo-section">
                <div className="tandemvideo-container">
                    <h1 className="tandemvideo-project-title">
                        Tandem Video Ad
                    </h1>
                    <p className="tandemvideo-project-roles">
                        Role: Lead Designer, Lead Editor, & Lead Animator
                    </p>

                    <div className="tandemvideo-tags">
                        <span className="tandemvideo-tag1">Design</span>
                        <span className="tandemvideo-tag3">
                            Motion Graphics
                        </span>
                    </div>

                    <div className="tandemvideo-hero-content">
                        <div className="tandemvideo-hero-text"></div>

                        <div className="tandemvideo-hero-image">
                            <p className="tandemvideo-hero-text1">
                                The Tandem video ad tells the story of a
                                stressed trades parent, drawing from real
                                experiences to highlight the daily pressures and
                                imbalances they face. Designed to build empathy
                                and understanding, it sheds light on realities
                                often unseen by those outside the trades. By
                                showcasing these routines, the video positions
                                Tandem as a supportive, reliable tool, offering
                                accessible and trustworthy childcare support
                                while reinforcing its goal of bridging the gap
                                between work and family life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="tandemvideo-section-nav">
                <div className="tandemvideo-container">
                    <div className="tandemvideo-two-column">
                        <div className="tandemvideo-text-content">
                            <p className="tandemvideo-section-title">
                                View Section:
                            </p>
                            <ul>
                                <li>
                                    <a href="#inspo">01. Inspiration</a>
                                </li>
                                <li>
                                    <a href="#ideation">02. Ideation</a>
                                </li>
                                <li>
                                    <a href="#storyboarding">
                                        03. Storyboarding
                                    </a>
                                </li>
                                <li>
                                    <a href="#reiteration">
                                        04. Reiteration and Challenges
                                    </a>
                                </li>
                                <li>
                                    <a href="#film">05. Filming and Editing</a>
                                </li>
                                <li>
                                    <a href="#final">06. Final Product</a>
                                </li>
                                <li>
                                    <a href="#Journey">
                                        07. The Journey and Impact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="tandemvideo-media-column">
                            <div className="tandemvideo-nav-image">
                                <img
                                    src="/work/tandemvideo/nav.png"
                                    className="tandemvideo-large-media"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section
                className="tandemvideo-section"
                id="inspo">
                <div className="tandemvideo-container">
                    <div className="tandemvideo-section-header">
                        <span className="tandemvideo-section-number">01</span>
                        <div className="tandemvideo-section-line"></div>
                        <span className="tandemvideo-section-label">
                            Inspiration
                        </span>
                    </div>

                    <div className="tandemvideo-branding-text">
                        <h2>Inspiration</h2>
                        <p>
                            My group's main inspiration for this video ad was
                            the various emotional based video ads we found
                            online. Alongside that, we were inspired by
                            interesting camera angles, shots, and transitions
                            that could emulate the feeling of stress that many
                            trade parents face.
                        </p>

                        <div className="tandemvideo-journey-video-wrapper">
                            <img
                                className="tandemvideo-journey"
                                src="/work/tandemvideo/inspo.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemvideo-section tandemvideo-section-alt"
                id="ideation">
                <div className="tandemvideo-container">
                    <div className="tandemvideo-section-header">
                        <span className="tandemvideo-section-number">02</span>
                        <div className="tandemvideo-section-line"></div>
                        <span className="tandemvideo-section-label">
                            Ideation
                        </span>
                    </div>

                    <div className="tandemvideo-two-column">
                        <div className="tandemvideo-text-content tandemvideo-process-text">
                            <h2>Ideation</h2>
                            <p>
                                All group members came up with their own ideas,
                                written or storyboarded. Each idea was based on
                                a general storyline we had agreed on. Then each
                                story was discussed with the group.
                            </p>
                            <p>
                                Multiple ideas related to the idea of childcare
                                and how balance is key were created for variety.
                                The idea wasn’t for perfection, but for multiple
                                ideas to draw from.
                            </p>
                        </div>

                        <div className="tandemvideo-media-column">
                            <img
                                src="/work/tandemvideo/ideation.png"
                                alt=""
                                className="tandemvideo-large-media"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemvideo-section"
                id="storyboarding">
                <div className="tandemvideo-container">
                    <div className="tandemvideo-section-header">
                        <span className="tandemvideo-section-number">03</span>
                        <div className="tandemvideo-section-line"></div>
                        <span className="tandemvideo-section-label">
                            Storyboarding
                        </span>
                    </div>

                    <div className="tandemvideo-branding-text">
                        <h2>Storyboarding</h2>
                        <p>
                            Once we decided upon what parts and aspects conveyed
                            what Tandem was made to solve, a first storyboard
                            draft was created by me. Multiple ideas were cut
                            into certain scenes to make editing and filming
                            easier. Clear arrows and directions were added to
                            make each panel more understandable.
                        </p>

                        <div className="tandemvideo-journey-video-wrapper">
                            <img
                                className="tandemvideo-journey"
                                src="/work/tandemvideo/storyboard.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemvideo-section"
                id="reiteration">
                <div className="tandemvideo-container">
                    <div className="tandemvideo-section-header">
                        <span className="tandemvideo-section-number">04</span>
                        <div className="tandemvideo-section-line"></div>
                        <span className="tandemvideo-section-label">
                            Reiteration and Challenges
                        </span>
                    </div>

                    <div className="tandemvideo-branding-text">
                        <h2> Reiteration and Challenges</h2>
                        <p>
                            After feedback and viewing, reiterations and
                            rewrites were done to further convey the emotional
                            tones needed for the advertisement, and connect how
                            Tandem was here to help. Additional scenes were
                            added, and the storyboard was animated to make it
                            more clear.
                        </p>
                        <p>
                            One of the biggest challenges I faced while
                            storyboarding was considering available environments
                            and actors, which is where a lot of creativity with
                            cut shots and certain framing and sound effects were
                            used.
                        </p>

                        <div className="tandemvideo-gallery-item2">
                            <iframe
                                className="tandemvideo-gallery-image2"
                                src="https://drive.google.com/file/d/19Z6BWXvVnNxYYkbKnWgUWsQe9prZFixM/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 5"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemvideo-section"
                id="film">
                <div className="tandemvideo-container">
                    <div className="tandemvideo-section-header">
                        <span className="tandemvideo-section-number">05</span>
                        <div className="tandemvideo-section-line"></div>
                        <span className="tandemvideo-section-label">
                            Filming and Editing
                        </span>
                    </div>

                    <div className="tandemvideo-two-column reverse">
                        <div className="tandemvideo-media-column">
                            <iframe
                                src="https://drive.google.com/file/d/10T_ClKHSHufgU1j4ZxB4G-ZyKshMSdtn/preview"
                                className="tandemvideo-process-video"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Bandit Breakout Solution & Gameplay Demo"
                            />
                        </div>

                        <div className="tandemvideo-text-content tandemvideo-process-text">
                            <h2>Filming and Editing</h2>
                            <p>
                                Once changes were confirmed, actors were secured
                                and filming commenced. Multiple locations and
                                props were used to showcase the reality of many
                                trades parents.
                            </p>
                            <p>
                                Once multiple takes of videos were shot, editing
                                on Premiere Pro was done to ensure audio,
                                visuals, and clips synced up perfectly. Many
                                reiterations and edits were done based on
                                feedback from teammates and trade parents. One
                                of the biggest issues I faced was syncing audio
                                to clips, as we had many audio issues during our
                                recording sessions. Thankfully, with enough time
                                and patience, the audio issues were fixed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemvideo-section"
                id="final">
                <div className="tandemvideo-container">
                    <div className="tandemvideo-section-header">
                        <span className="tandemvideo-section-number">06</span>
                        <div className="tandemvideo-section-line"></div>
                        <span className="tandemvideo-section-label">
                            Final Product
                        </span>
                    </div>

                    <div className="tandemvideo-branding-text">
                        <h2>Final Product</h2>
                        <p></p>

                        <div className="tandemvideo-gallery-item2">
                            <iframe
                                className="tandemvideo-gallery-image2"
                                src="https://drive.google.com/file/d/1OaxVXS2Z1XvUKYy3UgPR4W_Xht5q3wHK/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 5"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemvideo-section tandemvideo-section-alt"
                id="Journey">
                <div
                    className="tandemvideo-container"
                    id="Journey">
                    <div className="tandemvideo-section-header">
                        <span className="tandemvideo-section-number">07</span>
                        <div className="tandemvideo-section-line"></div>
                        <span className="tandemvideo-section-label">
                            The Journey and Impact
                        </span>
                    </div>

                    <div className="tandemvideo-branding-gallery">
                        <div className="tandemvideo-gallery-item2">
                            <iframe
                                className="tandemvideo-gallery-image2"
                                src="https://drive.google.com/file/d/1x8joe0b1iCGu_Dkwj35EqeFPDHJQA164/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 1"
                            />
                        </div>
                        <div className="tandemvideo-gallery-item2">
                            <iframe
                                className="tandemvideo-gallery-image2"
                                src="https://drive.google.com/file/d/156crefT1wjKnaEurCXJs3UILAfDwzEcy/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 1"
                            />
                        </div>
                    </div>
                    <img
                        src="/work/minime/celebrate.svg"
                        className="tandemvideo-floating-overlay4"
                    />
                    <div className="tandemvideo-branding-text">
                        <h2>The Journey & Impact</h2>
                        <p>
                            Getting to film and create this video was an amazing
                            experience. It was great to see the process from
                            start to finish, and to see how much work and effort
                            goes into creating a video like this.
                        </p>
                        <p>
                            I learned a lot about video editing, audio
                            adjusting, and how to create and tell a story
                            through video. I also learned how to work with a
                            team to create a cohesive product, and how to take
                            feedback and make changes based on that feedback.
                        </p>
                        <p>
                            It was a wonderful and amazing experience to get to
                            film with everyone. Enjoy some of our bloopers! 
                        </p>

                        <p>Thank you for reading!</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
