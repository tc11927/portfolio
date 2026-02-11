import Footer from "../../../components/footer";
import "./paramore.css";
import NavBar from "../../../components/navbar";

export default function Paramore() {
    return (
        <div className="paramorepage-wrapper">
            <NavBar />

            <header className="paramorehero">
                <div className="paramorecontainer">
                    <h1 className="paramoreproject-title">Paramore E-magazine</h1>
                    <p className="paramoreproject-roles">
                        Roles: Design & Frontend Developer
                    </p>
                    <div className="paramoretags">
                        <span className="paramoretag1">Design</span>
                        <span className="paramoretag2">UI/UX</span>
                        <span className="paramoretag3">Motion Graphics</span>
                    </div>

                    <div className="paramorehero-content">
                        <div className="paramorehero-text">
                            <p>
                                Bandit Breakout is a multiplayer game created to
                                solve the problem of linear multiplayer
                                boardgames. Many multiplayer boardgames face the
                                struggle of being replayed until boredom, or
                                with becoming too predictable after a few too
                                many rounds.
                            </p>
                            <p className="paramorehero-text2">
                                My role was to blend stunning visual design with
                                engaging gameplay, to make gaming with friends
                                more interactive and personalized. I focused on
                                the design, artwork, and animation.
                            </p>
                        </div>

                        <div className="paramorehero-image">
                            <img
                                src="/work/bandit/banditmock.png"
                                className="paramoretitle-image"
                                alt="Bandit Breakout game mockup"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <nav className="paramoresection-nav">
                <div className="paramorecontainer">
                    <p className="paramoresection-title">View Section:</p>
                    <ul>
                        <li>
                            <a href="#problem">Problem</a>
                        </li>
                        <li>
                            <a href="#solution">Solution</a>
                        </li>
                        <li>
                            <a href="#research">Research</a>
                        </li>
                        <li>
                            <a href="#branding">
                                Sketching, Character Design, & Backgrounds
                            </a>
                        </li>
                        <li>
                            <a href="#animating">Animating</a>
                        </li>
                        <li>
                            <a href="#issue">Unexpected Issue</a>
                        </li>
                        <li>
                            <a href="#what-didnt-work">
                                What Didn't Work & How We Solved it
                            </a>
                        </li>
                        <li>
                            <a href="#final-design">Final Design & Showcase</a>
                        </li>
                        <li>
                            <a href="#Journey">The Journey and Impact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <section
                className="paramoresection"
                id="problem">
                <div className="paramorecontainer">
                    <div className="paramore-section-header">
                        <span className="paramore-section-number">01</span>
                        <div className="paramore-section-line"></div>
                        <span className="paramore-section-label">Problem</span>
                    </div>

                    <div className="paramore-two-column">
                        <div className="paramore-text-content paramore-process-text">
                            <h2>Problem</h2>
                            <p>
                                My group and I found taught multiplayer board
                                games fall into the trap of being repetitive,
                                boring, and straightforward after 2+ replays.
                                The lack of customization or surprises bore us,
                                and we find that normal board games lack the
                                visual appeal players desire.
                            </p>
                            <p>
                                This is why we made Bandit Breakout, to bring
                                players a chaotic, but fun, boardgame experience
                                with friends.
                            </p>
                        </div>

                        <div className="paramore-media-column">
                            <img
                                src="/work/bandit/problemo.svg"
                                alt=""
                                className="paramore-large-media"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="paramoresection paramoresection-alt"
                id="solution">
                <div className="paramorecontainer">
                    <div className="paramore-section-header">
                        <span className="paramore-section-number">02</span>
                        <div className="paramore-section-line"></div>
                        <span className="paramore-section-label">Solution</span>
                    </div>

                    <div className="paramore-two-column reverse">
                        <div className="paramore-media-column">
                            <iframe
                                src="https://drive.google.com/file/d/1H_q33nm2S5rGptYGcLII666p9jX3zRJp/preview"
                                className="paramore-process-video"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Bandit Breakout Solution & Gameplay Demo"
                            />
                        </div>

                        <div className="paramore-text-content paramore-process-text">
                            <h2>Solution</h2>
                            <p>
                                As the designer of Bandit Breakout, my goal was
                                to create a race-to-the-finish board game that
                                feels dynamic and player-driven rather than
                                strictly linear. Players race across the desert
                                to capture the villain terrorizing the land, but
                                how they get there is shaped by the choices they
                                make along the way.
                            </p>
                            <p>
                                Instead of a straightforward path from start to
                                finish, I designed Bandit Breakout to encourage
                                interaction, tension, and replayability. Every
                                turn offers opportunities for player choice and
                                disruption, creating a more engaging, visually
                                engaging, and unpredictable board game
                                experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="paramoresection"
                id="research">
                <div className="paramorecontainer">
                    <div className="paramore-section-header">
                        <span className="paramore-section-number">03</span>
                        <div className="paramore-section-line"></div>
                        <span className="paramore-section-label">Research</span>
                    </div>

                    <div className="paramore-two-column">
                        <div className="paramore-media-column">
                            <div className="paramore-research-image-wrapper">
                                <img
                                    src="/work/bandit/banditgraph.png"
                                    className="paramore-research-main-image paramore-large-media"
                                    alt="Research findings visualization"
                                />
                            </div>
                        </div>
                        <img
                            src="/work/minime/examine.svg"
                            className="floating-overlay1"
                        />
                        <div className="paramore-text-content paramore-research-text">
                            <h2>Research</h2>
                            <p>
                                Interviews with 12 board game players showed a
                                strong preference for collaborative,
                                story-driven play. Over 80% enjoyed cooperative
                                experiences, and 60% valued narrative-focused
                                games, leading me to design gameplay around
                                shared decision-making and visual progression.
                            </p>
                            <p>
                                Players expressed frustration with unsatisfying
                                endings, so I prioritised meaningful, fully
                                illustrated narrative conclusions. While
                                multiple endings increased engagement, ensuring
                                every ending felt complete became a key focus.
                            </p>
                            <p>
                                To support varied playstyles and replayable
                                multiplayer experiences, I emphasised
                                replayability through different choices,
                                interactions, and characters.
                            </p>
                            <p>
                                Secondary research reinforced the importance of
                                storytelling, lore, and consequence-driven
                                outcomes, guiding the creation of detailed,
                                unique characters.
                            </p>
                            <a
                                href="https://docs.google.com/document/d/12Z3Hw660hhzNR4QW1Gg4uPothI71lgKRqduENTvWCV4/edit?usp=sharing"
                                className="paramore-research-button"
                                target="_blank"
                                rel="noopener noreferrer">
                                View Report
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="paramoresection paramoresection-alt"
                id="branding">
                <div className="paramorecontainer">
                    <div className="paramore-section-header">
                        <span className="paramore-section-number">04</span>
                        <div className="paramore-section-line"></div>
                        <span className="paramore-section-label">
                            Sketching, Character Design, & Backgrounds
                        </span>
                    </div>

                    <div className="paramore-branding-text">
                        <h2>Sketching, Character Design, & Backgrounds</h2>
                        <p>
                            As the main Design lead, I was in charge of the art
                            direction for the game. We chose a rustic, yet
                            bright colour palette to help link with our cowboy
                            theme, all while being fun and stylistic. A crayon
                            like pen was chosen for the art to help each piece
                            feel hand drawn and lively.
                        </p>
                        <p>
                            Many sketches were made to use shape language and
                            simplification to make characters that stood out and
                            had different personalities. Final designs and
                            character turnarounds were made to make animation
                            easier and fully flesh out the characters. Many
                            iterations of each character were made to ensure
                            they all fit together perfectly.
                        </p>
                        <p>
                            Backgrounds were also made to help ease the time
                            taken animating. Each background was created with
                            the same brush as the characters to fully bring the
                            world to life.
                        </p>

                        <div className="paramore-branding-gallery">
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/bandit/charactersketch.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/bandit/buckshot.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/bandit/casino.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/bandit/grit.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/bandit/desert.png"
                                    className="paramore-gallery-imageb"
                                    alt="Desert background"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/bandit/scout.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/bandit/mansion.png"
                                    className="paramore-gallery-imageb"
                                    alt="Mansion background"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/bandit/serpy.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/bandit/oasis.png"
                                    className="paramore-gallery-imageb"
                                    alt="Oasis background"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/bandit/solstice.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/bandit/slums.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/bandit/villain.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="paramoresection">
                <div className="paramorecontainer">
                    <div
                        className="paramore-section-header"
                        id="animating">
                        <span className="paramore-section-number">05</span>
                        <div className="paramore-section-line"></div>
                        <span className="paramore-section-label">Animating</span>
                    </div>

                    <div className="paramore-branding-text">
                        <h2>Animating</h2>
                        <p>
                            As the sole animator of the project, I was tasked
                            with creating all the cutscenes (beginning, multiple
                            endings, character and NPC interactions, dice
                            rolling, and battle animations). Work was cut down
                            through earlier work done (creating turnarounds and
                            reusable backgrounds) and reusable assets were made.
                            Specifically, work was cut for ending cutscenes, as
                            many of them had a variety of similarities in scenes
                            and character poses.
                        </p>
                        <p>
                            Storyboards were also made to ensure clarity in
                            animation, and direction for how things needed to be
                            animated.
                        </p>

                        <div className="paramore-branding-gallery">
                            <div className="paramore-gallery-item2">
                                <iframe
                                    className="paramore-gallery-image2"
                                    src="https://drive.google.com/file/d/1d5crYQis-p6lTQxiYStTWwC_Hlf9COGU/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Animation example 1"
                                />
                            </div>
                            <div className="paramore-gallery-item2">
                                <iframe
                                    className="paramore-gallery-image2"
                                    src="https://drive.google.com/file/d/1et0O71TMl0e-_YCrheM3KowCVTFR8jPC/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Animation example 2"
                                />
                            </div>
                            <div className="paramore-gallery-item2">
                                <iframe
                                    className="paramore-gallery-image2"
                                    src="https://drive.google.com/file/d/1Xgnq8EwQZBTAzW02nlNAa5SNC1o4PxmS/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Animation example 3"
                                />
                            </div>
                            <div className="paramore-gallery-item2">
                                <iframe
                                    className="paramore-gallery-image2"
                                    src="https://drive.google.com/file/d/1hQLragBWHltzCuw2LgS9zp25fWd6WsAl/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Animation example 4"
                                />
                            </div>
                            <div className="paramore-gallery-item2">
                                <iframe
                                    className="paramore-gallery-image2"
                                    src="https://drive.google.com/file/d/1Fy-yC9TSeoBj2ZlHReuVNpCsIzJ4NeQ-/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Animation example 5"
                                />
                            </div>
                            <div className="paramore-gallery-item2">
                                <img
                                    src="/work/bandit/storyboard!!.png"
                                    className="paramore-gallery-image2"
                                    alt="Storyboard"
                                />
                            </div>
                            <div className="paramore-gallery-item2">
                                <img
                                    src="/work/bandit/buckshotsketch.jpg"
                                    className="paramore-gallery-image2"
                                    alt="Buckshot sketch"
                                />
                            </div>
                            <div className="paramore-gallery-item2">
                                <img
                                    src="/work/bandit/gritsketch.jpg"
                                    className="paramore-gallery-image2"
                                    alt="Grit sketch"
                                />
                            </div>
                            <div className="paramore-gallery-item2">
                                <img
                                    src="/work/bandit/serpysketch.jpg"
                                    className="paramore-gallery-image2"
                                    alt="Serpy sketch"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="paramoresection paramoresection-warning">
                <div
                    className="paramorecontainer"
                    id="issue">
                    <div className="paramore-section-header">
                        <span className="paramore-section-number">06</span>
                        <div className="paramore-section-line"></div>
                        <span className="paramore-section-label">
                            Unexpected Issue
                        </span>
                    </div>
                    <img
                        src="/work/minime/confusion.svg"
                        className="floating-overlay2"
                    />
                    <div className="paramore-two-column">
                        <div className="paramore-media-column">
                            <img
                                src="/work/bandit/issue.svg"
                                alt=""
                                className="paramore-large-media"
                            />
                        </div>

                        <div className="paramore-text-content">
                            <h2>Unexpected Issue</h2>
                            <p>
                                As we worked, we found it difficult to find ways
                                to create our board, and were stuck on designing
                                it and reiterating over and over again. This was
                                due to our own personal dissatisfaction and
                                multiple rounds of user testing. Both us and our
                                users felt like something was missing, and that
                                our board could have more.
                            </p>
                            <p>
                                As the Design lead, I found myself having a hard
                                time to make sure the board was visually
                                appealing, and aligned with the game design
                                team's vision. Many ideas were thrown around and
                                none truly stuck.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="paramoresection">
                <div className="paramorecontainer">
                    <div
                        className="paramore-section-header"
                        id="what-didnt-work">
                        <span className="paramore-section-number">07</span>
                        <div className="paramore-section-line"></div>
                        <span className="paramore-section-label">
                            What Didn't Work & How We Solved it
                        </span>
                    </div>
                    <img
                        src="/work/minime/study.svg"
                        className="floating-overlay3"
                    />
                    <div className="paramore-branding-text">
                        <h2>What Didn't Work & How We Solved it</h2>
                        <p>
                            Our whole team was unsure about what direction to go
                            in, the game design team was struggling to implement
                            gameplay mechanics, while the design team was
                            struggling to create what was needed because of
                            this.
                        </p>
                        <p>
                            This issue was solved through a design idea where
                            the thought that seperate designed areas would look
                            cool. After art and sketches of these areas and NPCs
                            for them were made, the game design team delved
                            deeper into it and created working mechanics for
                            this idea.
                        </p>
                        <p>
                            In the end, the issue I faced was that we didn't
                            have a clear design direction, and to solve it, I
                            had to ideate and make creative solutions and
                            designs to help inspire the whole team.
                        </p>

                        <div className="paramore-branding-gallery">
                            <div className="paramore-gallery-item2">
                                <img
                                    src="/work/bandit/problem3.png"
                                    className="paramore-gallery-image2"
                                    alt=""
                                />
                            </div>
                            <div className="paramore-gallery-item2">
                                <img
                                    src="/work/bandit/problem2.png"
                                    className="paramore-gallery-image2"
                                    alt=""
                                />
                            </div>
                            <div className="paramore-gallery-item2">
                                <img
                                    src="/work/bandit/problem.png"
                                    className="paramore-gallery-image2"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="paramoresection paramoresection-warning">
                <div
                    className="paramorecontainer"
                    id="final-design">
                    <div className="paramore-section-header">
                        <span className="paramore-section-number">08</span>
                        <div className="paramore-section-line"></div>
                        <span className="paramore-section-label">
                            Final Design & Showcase
                        </span>
                    </div>

                    <div className="paramore-two-column">
                        <div className="paramore-media-column">
                            <img
                                src="/work/bandit/celebrate!.jpg"
                                alt=""
                                className="paramore-large-media"
                            />
                        </div>

                        <div className="paramore-text-content">
                            <h2 id="final-design">Final Design & Showcase</h2>
                            <p>
                                On Friday, May 16th, 2025, Team Command Z
                                presented Bandit Breakout. Although competition
                                was close, Bandit Breakout came out on top!
                            </p>
                            <p>
                                Getting to work with such an amazing, creative
                                team was a delight, and an experience I’ll
                                forever look back at fondly. Thank you Command
                                Z!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="paramoresection paramoresection-alt"
                id="Journey">
                <div
                    className="paramorecontainer"
                    id="Journey">
                    <div className="paramore-section-header">
                        <span className="paramore-section-number">09</span>
                        <div className="paramore-section-line"></div>
                        <span className="paramore-section-label">
                            The Journey and Impact
                        </span>
                    </div>

                    <div className="paramore-journey-video-wrapper">
                        <iframe
                            className="paramore-journey-video"
                            src="https://drive.google.com/file/d/12swoFYtPBM5Aux6h3PBawqkMnkNhqftX/preview"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Bandit Breakout – The Journey"
                        />
                    </div>
                    <img
                        src="/work/minime/celebrate.svg"
                        className="floating-overlay4"
                    />
                    <div className="paramore-branding-text">
                        <h2>The Journey & Impact</h2>
                        <p>
                            Bandit Breakout is more than just a game. It’s
                            something the team made to bring joy and creativity
                            into the current straightforward boardgame scene. By
                            addressing the repetitive, single storyline driven
                            boardgames of today’s world, it provides a solution
                            that goes beyond aesthetics, but also brings
                            competitive and casual fun to its players.
                        </p>
                        <p>
                            I’ve learned a lot through this project, and have
                            grown as a Graphic designer and Motion Graphics.
                            It’s taught me a lot about user-centered design,
                            creative thinking, and has reminded me about my
                            passion and love for the arts.
                        </p>
                        <p>Thank you for reading!</p>

                        <div className="paramore-site-button-wrapper">
                            <a
                                href="https://bandit-breakout.vercel.app/"
                                className="paramore-site-button"
                                target="_blank"
                                rel="noopener noreferrer">
                                View Site
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}