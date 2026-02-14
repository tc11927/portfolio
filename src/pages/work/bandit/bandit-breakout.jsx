import Footer from "../../../components/footer";
import "./BanditBreakout.css";
import NavBar from "../../../components/navbar";

export default function BanditBreakout() {
    return (
        <div className="banditpage-wrapper">
            <NavBar />

            <header className="bandit-hero-fullscreen">
                <img
                    src="/work/bandit/header.jpg" 
                    alt="Bandit Breakout – hero background"
                    className="bandit-hero-fullscreen-image"
                />
            </header>

            <section className="banditsection">
                <div className="banditcontainer">
                    <h1 className="banditproject-title">Bandit Breakout</h1>
                    <p className="banditproject-roles">
                        Roles: Design & Project Lead, UI/UX Designer
                    </p>

                    <div className="bandittags">
                        <span className="bandittag1">Design</span>
                        <span className="bandittag2">UI/UX</span>
                        <span className="bandittag3">Motion Graphics</span>
                    </div>

                    <div className="bandithero-content">
                        <div className="bandithero-text"></div>

                        <div className="bandithero-image">
                            <p className="bandithero-text1">
                                Bandit Breakout is a multiplayer board game
                                created to solve the common problem with linear
                                multiplayer board games: after just a few plays
                                they become repetitive, predictable, and lose
                                their excitement.
                            </p>
                            <p className="bandithero-text2">
                                My role was to blend striking visual design with
                                engaging, replayable gameplay — making every
                                session with friends feel fresh, chaotic, and
                                personal. I led all artwork, character design,
                                environments, and animations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="banditsection-nav">
                <div className="banditcontainer">
                    <div className="bandit-two-column">
                        <div className="bandit-text-content">
                            <p className="banditsection-title">View Section:</p>
                            <ul>
                                <li>
                                    <a href="#problem">01. Problem</a>
                                </li>
                                <li>
                                    <a href="#solution">02. Solution</a>
                                </li>
                                <li>
                                    <a href="#research">03. Research</a>
                                </li>
                                <li>
                                    <a href="#branding">
                                        04. Sketching, Character Design, &
                                        Backgrounds
                                    </a>
                                </li>
                                <li>
                                    <a href="#animating">05. Animating</a>
                                </li>
                                <li>
                                    <a href="#issue">06. Unexpected Issue</a>
                                </li>
                                <li>
                                    <a href="#what-didnt-work">
                                        07. What Didn't Work & How We Solved it
                                    </a>
                                </li>
                                <li>
                                    <a href="#final-design">
                                        08. Final Design & Showcase
                                    </a>
                                </li>
                                <li>
                                    <a href="#Journey">
                                        09. The Journey and Impact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="bandit-media-column">
                            <div className="bandit-nav-image">
                                <img
                                    src="/work/bandit/banditmock.png" 
                                    className="bandit-large-media"
                                    alt="Bandit Breakout navigation visual"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section
                className="banditsection"
                id="problem">
                <div className="banditcontainer">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">01</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">Problem</span>
                    </div>

                    <div className="bandit-two-column">
                        <div className="bandit-text-content bandit-process-text">
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

                        <div className="bandit-media-column">
                            <img
                                src="/work/bandit/problemo.svg"
                                alt=""
                                className="bandit-large-media"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="banditsection banditsection-alt"
                id="solution">
                <div className="banditcontainer">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">02</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">Solution</span>
                    </div>

                    <div className="bandit-two-column reverse">
                        <div className="bandit-media-column">
                            <iframe
                                src="https://drive.google.com/file/d/1H_q33nm2S5rGptYGcLII666p9jX3zRJp/preview"
                                className="bandit-process-video"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Bandit Breakout Solution & Gameplay Demo"
                            />
                        </div>

                        <div className="bandit-text-content bandit-process-text">
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
                className="banditsection"
                id="research">
                <div className="banditcontainer">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">03</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">Research</span>
                    </div>

                    <div className="bandit-two-column">
                        <div className="bandit-media-column">
                            <div className="bandit-research-image-wrapper">
                                <img
                                    src="/work/bandit/banditgraph.png"
                                    className="bandit-research-main-image bandit-large-media"
                                    alt="Research findings visualization"
                                />
                            </div>
                        </div>
                        <img
                            src="/work/minime/examine.svg"
                            className="banditfloating-overlay1"
                        />
                        <div className="bandit-text-content bandit-research-text">
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
                                className="bandit-research-button"
                                target="_blank"
                                rel="noopener noreferrer">
                                View Report
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="banditsection banditsection-alt"
                id="branding">
                <div className="banditcontainer">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">04</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">
                            Sketching, Character Design, & Backgrounds
                        </span>
                    </div>

                    <div className="bandit-branding-text">
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

                        <div className="bandit-branding-gallery">
                            <div className="bandit-gallery-itemb">
                                <img
                                    src="/work/bandit/charactersketch.png"
                                    className="bandit-gallery-imageb"
                                />
                            </div>
                            <div className="bandit-gallery-itemb">
                                <img
                                    src="/work/bandit/buckshot.png"
                                    className="bandit-gallery-imageb"
                                />
                            </div>
                            <div className="bandit-gallery-itemb">
                                <img
                                    src="/work/bandit/casino.png"
                                    className="bandit-gallery-imageb"
                                />
                            </div>
                            <div className="bandit-gallery-itemb">
                                <img
                                    src="/work/bandit/grit.png"
                                    className="bandit-gallery-imageb"
                                />
                            </div>
                            <div className="bandit-gallery-itemb">
                                <img
                                    src="/work/bandit/desert.png"
                                    className="bandit-gallery-imageb"
                                    alt="Desert background"
                                />
                            </div>
                            <div className="bandit-gallery-itemb">
                                <img
                                    src="/work/bandit/scout.png"
                                    className="bandit-gallery-imageb"
                                />
                            </div>
                            <div className="bandit-gallery-itemb">
                                <img
                                    src="/work/bandit/mansion.png"
                                    className="bandit-gallery-imageb"
                                    alt="Mansion background"
                                />
                            </div>
                            <div className="bandit-gallery-itemb">
                                <img
                                    src="/work/bandit/serpy.png"
                                    className="bandit-gallery-imageb"
                                />
                            </div>
                            <div className="bandit-gallery-itemb">
                                <img
                                    src="/work/bandit/oasis.png"
                                    className="bandit-gallery-imageb"
                                    alt="Oasis background"
                                />
                            </div>
                            <div className="bandit-gallery-itemb">
                                <img
                                    src="/work/bandit/solstice.png"
                                    className="bandit-gallery-imageb"
                                />
                            </div>
                            <div className="bandit-gallery-itemb">
                                <img
                                    src="/work/bandit/slums.png"
                                    className="bandit-gallery-imageb"
                                />
                            </div>
                            <div className="bandit-gallery-itemb">
                                <img
                                    src="/work/bandit/villain.png"
                                    className="bandit-gallery-imageb"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="banditsection">
                <div className="banditcontainer">
                    <div
                        className="bandit-section-header"
                        id="animating">
                        <span className="bandit-section-number">05</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">Animating</span>
                    </div>

                    <div className="bandit-branding-text">
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

                        <div className="bandit-branding-gallery">
                            <div className="bandit-gallery-item2">
                                <iframe
                                    className="bandit-gallery-image2"
                                    src="https://drive.google.com/file/d/1d5crYQis-p6lTQxiYStTWwC_Hlf9COGU/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Animation example 1"
                                />
                            </div>
                            <div className="bandit-gallery-item2">
                                <iframe
                                    className="bandit-gallery-image2"
                                    src="https://drive.google.com/file/d/1et0O71TMl0e-_YCrheM3KowCVTFR8jPC/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Animation example 2"
                                />
                            </div>
                            <div className="bandit-gallery-item2">
                                <iframe
                                    className="bandit-gallery-image2"
                                    src="https://drive.google.com/file/d/1Xgnq8EwQZBTAzW02nlNAa5SNC1o4PxmS/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Animation example 3"
                                />
                            </div>
                            <div className="bandit-gallery-item2">
                                <iframe
                                    className="bandit-gallery-image2"
                                    src="https://drive.google.com/file/d/1hQLragBWHltzCuw2LgS9zp25fWd6WsAl/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Animation example 4"
                                />
                            </div>
                            <div className="bandit-gallery-item2">
                                <iframe
                                    className="bandit-gallery-image2"
                                    src="https://drive.google.com/file/d/1Fy-yC9TSeoBj2ZlHReuVNpCsIzJ4NeQ-/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Animation example 5"
                                />
                            </div>
                            <div className="bandit-gallery-item2">
                                <img
                                    src="/work/bandit/storyboard!!.png"
                                    className="bandit-gallery-image2"
                                    alt="Storyboard"
                                />
                            </div>
                            <div className="bandit-gallery-item2">
                                <img
                                    src="/work/bandit/buckshotsketch.jpg"
                                    className="bandit-gallery-image2"
                                    alt="Buckshot sketch"
                                />
                            </div>
                            <div className="bandit-gallery-item2">
                                <img
                                    src="/work/bandit/gritsketch.jpg"
                                    className="bandit-gallery-image2"
                                    alt="Grit sketch"
                                />
                            </div>
                            <div className="bandit-gallery-item2">
                                <img
                                    src="/work/bandit/serpysketch.jpg"
                                    className="bandit-gallery-image2"
                                    alt="Serpy sketch"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="banditsection banditsection-warning">
                <div
                    className="banditcontainer"
                    id="issue">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">06</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">
                            Unexpected Issue
                        </span>
                    </div>
                    <img
                        src="/work/minime/confusion.svg"
                        className="banditfloating-overlay2"
                    />
                    <div className="bandit-two-column">
                        <div className="bandit-media-column">
                            <img
                                src="/work/bandit/issue.svg"
                                alt=""
                                className="bandit-large-media"
                            />
                        </div>

                        <div className="bandit-text-content">
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

            <section className="banditsection">
                <div className="banditcontainer">
                    <div
                        className="bandit-section-header"
                        id="what-didnt-work">
                        <span className="bandit-section-number">07</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">
                            What Didn't Work & How We Solved it
                        </span>
                    </div>
                    <img
                        src="/work/minime/study.svg"
                        className="banditfloating-overlay3"
                    />
                    <div className="bandit-branding-text">
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

                        <div className="bandit-branding-gallery">
                            <div className="bandit-gallery-item2">
                                <img
                                    src="/work/bandit/problem3.png"
                                    className="bandit-gallery-image2"
                                    alt=""
                                />
                            </div>
                            <div className="bandit-gallery-item2">
                                <img
                                    src="/work/bandit/problem2.png"
                                    className="bandit-gallery-image2"
                                    alt=""
                                />
                            </div>
                            <div className="bandit-gallery-item2">
                                <img
                                    src="/work/bandit/problem.png"
                                    className="bandit-gallery-image2"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="banditsection banditsection-warning">
                <div
                    className="banditcontainer"
                    id="final-design">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">08</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">
                            Final Design & Showcase
                        </span>
                    </div>

                    <div className="bandit-two-column">
                        <div className="bandit-media-column">
                            <img
                                src="/work/bandit/celebrate!.jpg"
                                alt=""
                                className="bandit-large-media"
                            />
                        </div>

                        <div className="bandit-text-content">
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
                className="banditsection banditsection-alt"
                id="Journey">
                <div
                    className="banditcontainer"
                    id="Journey">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">09</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">
                            The Journey and Impact
                        </span>
                    </div>

                    <div className="bandit-journey-video-wrapper">
                        <iframe
                            className="bandit-journey-video"
                            src="https://drive.google.com/file/d/12swoFYtPBM5Aux6h3PBawqkMnkNhqftX/preview"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Bandit Breakout – The Journey"
                        />
                    </div>
                    <img
                        src="/work/minime/celebrate.svg"
                        className="banditfloating-overlay4"
                    />
                    <div className="bandit-branding-text">
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

                        <div className="bandit-site-button-wrapper">
                            <a
                                href="https://bandit-breakout.vercel.app/"
                                className="bandit-site-button"
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
