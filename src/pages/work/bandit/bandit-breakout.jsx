import Footer from "../../../components/footer";
import "./BanditBreakout.css";
import NavBar from "../../../components/navbar";

export default function BanditBreakout() {
    return (
        <div className="banditpage-wrapper">
            <NavBar />

            <header className="bandithero">
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
                        <div className="bandithero-text">
                            <p>
                                Bandit Breakout is a multiplayer game created to
                                solve the problem of linear multiplayer
                                boardgames. Many multiplayer boardgames face the
                                struggle of being replayed until boredom, or
                                with becoming too predictable after a few too
                                many rounds.
                            </p>
                            <p className="bandithero-text2">
                                Designed for all gamers, Bandit Breakout blends
                                stunning visual design with engaging gameplay,
                                making gaming with friends more interactive and
                                personalized.
                            </p>
                        </div>

                        <div className="bandithero-image">
                            <img
                                src="/work/bandit/banditmock.png"
                                className="bandittitle-image"
                                alt="Bandit Breakout game mockup"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <nav className="banditsection-nav">
                <div className="banditcontainer">
                    <p className="banditsection-title">View Section:</p>
                    <ul>
                        <li>
                            <a
                                href="#problem"
                                className="banditlinks">
                                Problem
                            </a>
                        </li>
                        <li>
                            <a
                                href="#solution"
                                className="banditlinks">
                                Solution
                            </a>
                        </li>
                        <li>
                            <a
                                href="#research"
                                className="banditlinks">
                                Research
                            </a>
                        </li>
                        <li>
                            <a
                                href="#branding"
                                className="banditlinks">
                                Sketching, Character Design, & Backgrounds
                            </a>
                        </li>
                        <li>
                            <a
                                href="#animating"
                                className="banditlinks">
                                Animating
                            </a>
                        </li>
                        <li>
                            <a
                                href="#issue"
                                className="banditlinks">
                                Unexpected Issue
                            </a>
                        </li>
                        <li>
                            <a
                                href="#what-didnt-work"
                                className="banditlinks">
                                What Didn't Work & How We Solved it
                            </a>
                        </li>
                        <li>
                            <a
                                href="#final-design"
                                className="banditlinks">
                                Final Design & Showcase
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Journey"
                                className="banditlinks">
                                The Journey and Impact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <section
                className="banditsection bandit-process-section"
                id="problem">
                <div className="banditcontainer">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">01</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">Problem</span>
                    </div>

                    <div className="bandit-two-column">
                        <div className="bandit-text-column process-text-block">
                            <h2>Problem</h2>
                            <p>
                                Many multiplayer board games fall into the trap
                                of being repetitive, boring, and straightforward
                                after 2+ replays. The lack of customization or
                                surprises bore many players, and many find
                                normal board games lack the visual appeal
                                players desire.
                            </p>
                            <p>
                                This is why Bandit Breakout was made, to bring
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
                className="banditsection section-alt"
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

                        <div className="bandit-text-column process-text-block">
                            <h2>Solution</h2>
                            <p>
                                Bandit Breakout is a race to the finish line
                                type board game. The main objective of the
                                player is to get to the end and capture the
                                villain who’s terrorizing the desert. You
                                accomplish this by navigating through the board,
                                moving by rolling dice, gaining items to
                                progress yourself or move others back, and
                                decision spaces that determine where you go.
                            </p>
                            <p>
                                Instead of the linear, straightforward gameplay
                                many boardgames have, Bandit Breakout offers a
                                fun, interactive boardgame experience.
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
                            <div className="research-image-wrapper">
                                <img
                                    src="/work/bandit/banditgraph.png"
                                    className="research-main-image bandit-large-media"
                                    alt="Research findings visualization"
                                />
                            </div>
                        </div>

                        <div className="bandit-text-column">
                            <h2>Research</h2>
                            <p>
                                Interviews with 12 boardgame players showed us
                                how over 80% of players enjoy playing
                                collaboratively with friends, and over 60% enjoy
                                storybased games.
                            </p>
                            <p>
                                Many users were dissatisfied with certain
                                endings from games, and found multiple endings
                                interesting, but didn’t mind one as long as it
                                ended satisfyingly.
                            </p>
                            <p>
                                12 boardgame players, with different playstyle
                                and gaming methods, all searching for
                                multiplayer games that can be replayed with
                                friends.
                            </p>
                            <p>
                                Secondary research displayed how important
                                storytelling and lore is to many players,
                                highlighting how important endings and choice
                                based actions and outcomes were to players.
                            </p>
                            <a
                                href="https://docs.google.com/document/d/12Z3Hw660hhzNR4QW1Gg4uPothI71lgKRqduENTvWCV4/edit?usp=sharing"
                                className="research-button"
                                target="_blank"
                                rel="noopener noreferrer">
                                View Report
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="banditsection section-alt"
                id="branding">
                <div className="banditcontainer">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">04</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">
                            Sketching, Character Design, & Backgrounds
                        </span>
                    </div>

                    <div className="branding-content">
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

                        <div className="branding-gallery">
                            <div className="gallery-itemb">
                                <img
                                    src="/work/bandit/charactersketch.png"
                                    className="gallery-imageb"
                                />
                            </div>
                            <div className="gallery-itemb">
                                <img
                                    src="/work/bandit/buckshot.png"
                                    className="gallery-imageb"
                                />
                            </div>
                            <div className="gallery-itemb">
                                <img
                                    src="/work/bandit/casino.png"
                                    className="gallery-imageb"
                                />
                            </div>
                            <div className="gallery-itemb">
                                <img
                                    src="/work/bandit/grit.png"
                                    className="gallery-imageb"
                                />
                            </div>
                            <div className="gallery-itemb">
                                <img
                                    src="/work/bandit/desert.png"
                                    alt="Character design iterations"
                                    className="gallery-imageb"
                                />
                            </div>
                            <div className="gallery-itemb">
                                <img
                                    src="/work/bandit/scout.png"
                                    className="gallery-imageb"
                                />
                            </div>
                            <div className="gallery-itemb">
                                <img
                                    src="/work/bandit/mansion.png"
                                    alt="Character design iterations"
                                    className="gallery-imageb"
                                />
                            </div>
                            <div className="gallery-itemb">
                                <img
                                    src="/work/bandit/serpy.png"
                                    className="gallery-imageb"
                                />
                            </div>
                            <div className="gallery-itemb">
                                <img
                                    src="/work/bandit/oasis.png"
                                    alt="Character design iterations"
                                    className="gallery-imageb"
                                />
                            </div>
                            <div className="gallery-itemb">
                                <img
                                    src="/work/bandit/solstice.png"
                                    className="gallery-imageb"
                                />
                            </div>
                            <div className="gallery-itemb">
                                <img
                                    src="/work/bandit/slums.png"
                                    className="gallery-imageb"
                                />
                            </div>
                            <div className="gallery-itemb">
                                <img
                                    src="/work/bandit/villain.png"
                                    className="gallery-imageb"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="banditsection"
                id="animating">
                <div className="banditcontainer">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">05</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">Animating</span>
                    </div>

                    <div className="branding-content">
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

                        <div className="branding-gallery">
                            <div className="gallery-item2">
                                <iframe
                                    className="gallery-image2"
                                    src="https://drive.google.com/file/d/1d5crYQis-p6lTQxiYStTWwC_Hlf9COGU/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Bandit Breakout – Version 2 Full Gameplay Demo"
                                />
                            </div>
                            <div className="gallery-item2">
                                <iframe
                                    className="gallery-image2"
                                    src="https://drive.google.com/file/d/1et0O71TMl0e-_YCrheM3KowCVTFR8jPC/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Bandit Breakout – Version 2 Full Gameplay Demo"
                                />
                            </div>
                            <div className="gallery-item2">
                                <iframe
                                    className="gallery-image2"
                                    src="https://drive.google.com/file/d/1Xgnq8EwQZBTAzW02nlNAa5SNC1o4PxmS/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Bandit Breakout – Version 2 Full Gameplay Demo"
                                />
                            </div>
                            <div className="gallery-item2">
                                <iframe
                                    className="gallery-image2"
                                    src="https://drive.google.com/file/d/1hQLragBWHltzCuw2LgS9zp25fWd6WsAl/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Bandit Breakout – Version 2 Full Gameplay Demo"
                                />
                            </div>
                            <div className="gallery-item2">
                                <iframe
                                    className="gallery-image2"
                                    src="https://drive.google.com/file/d/1Fy-yC9TSeoBj2ZlHReuVNpCsIzJ4NeQ-/preview"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Bandit Breakout – Version 2 Full Gameplay Demo"
                                />
                            </div>
                            <div className="gallery-item2">
                                <img
                                    src="/work/bandit/buckshotsketch.jpg"
                                    className="gallery-image2"
                                />
                            </div>
                            <div className="gallery-item2">
                                <img
                                    src="/work/bandit/crowsketch.jpg"
                                    className="gallery-image2"
                                />
                            </div>
                            <div className="gallery-item2">
                                <img
                                    src="/work/bandit/gritsketch.jpg"
                                    className="gallery-image2"
                                />
                            </div>
                            <div className="gallery-item2">
                                <img
                                    src="/work/bandit/serpysketch.jpg"
                                    className="gallery-image2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="banditsection section-warning"
                id="issue">
                <div className="banditcontainer">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">06</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">
                            Unexpected Issue
                        </span>
                    </div>

                    <div className="bandit-two-column">
                        <div className="bandit-media-column">
                            <img
                                src="/work/bandit/problem.png"
                                alt=""
                                className="bandit-large-media"
                            />
                        </div>

                        <div className="bandit-text-column">
                            <h2>Unexpected Issue</h2>
                            <p>
                                Due to the division of work, some of the main
                                researchers or gameplay designers found
                                themselves empty handed, while the designers and
                                developers were packed with work. This created
                                unbalanced work loads during certain times for
                                each team.
                            </p>
                            <p>
                                At the time, it didn’t seem like much of an
                                issue due to how certain team members had
                                backgrounds in certain things and were able to
                                churn out things quickly. But certain members
                                felt guilty about how undivided work seemed at
                                certain times.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="banditsection"
                id="what-didnt-work">
                <div className="banditcontainer">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">07</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">
                            What Didn't Work & How We Solved it
                        </span>
                    </div>

                    <div className="bandit-two-column">
                        <div className="bandit-media-column">
                            <img
                                src="/work/bandit/problem2.jpg"
                                alt=""
                                className="bandit-large-media"
                            />
                        </div>

                        <div className="bandit-text-column">
                            <h2>What Didn't Work & How We Solved it</h2>
                            <p>
                                Our whole team was unbalanced in our skills and
                                roles, so our task delegation didn’t work. We
                                relied too much to staying in our own lanes and
                                comfort zones, instead of taking risks and
                                branching out from our own areas.
                            </p>
                            <p>
                                We solved this issue through communication and
                                discussion, which led to even task distribution
                                and gave teammates a chance to try and work on
                                other sections of our project.
                            </p>
                            <p>
                                Although some issues did arise from this, for
                                example, the designers had quite a fun time
                                figuring out how to code properly. But in the
                                end, each team figured it out.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="banditsection section-warning"
                id="final-design">
                <div className="banditcontainer">
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
                                src="/work/bandit/winning.jpg"
                                alt=""
                                className="bandit-large-media"
                            />
                        </div>

                        <div className="bandit-text-column">
                            <h2>Final Design & Showcase</h2>
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
                className="banditsection section-alt"
                id="Journey">
                <div className="banditcontainer">
                    <div className="bandit-section-header">
                        <span className="bandit-section-number">09</span>
                        <div className="bandit-section-line"></div>
                        <span className="bandit-section-label">
                            The Journey and Impact
                        </span>
                    </div>

                    <div className="journey-video-wrapper">
                        <iframe
                            className="journey-video"
                            src="https://drive.google.com/file/d/12swoFYtPBM5Aux6h3PBawqkMnkNhqftX/preview"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Bandit Breakout – Version 2 Full Gameplay Demo"
                        />
                    </div>

                    <div className="branding-content">
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

                        <div className="site-button-wrapper">
                            <a
                                href="https://bandit-breakout.vercel.app/"
                                className="site-button"
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
