import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteNav from "../../../components/SiteNav.jsx";
import ProjectFooter from "../../../components/ProjectFooter.jsx";
import "../CaseStudy.css";

export default function BanditBreakout() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-page-wrapper">
            <SiteNav />

            <section className="case case-head">
                <h1 className="case-title">Bandit Breakout</h1>
                <p className="case-lead">
                    Bandit Breakout is a multiplayer board game created to solve
                    the common problem with linear multiplayer board games:
                    after just a few plays they become repetitive, predictable,
                    and lose their excitement. 
                </p>
                <dl className="case-meta">
                    <div>
                        <dt>Role</dt>
                        <dd>Design &amp; Project Lead, UI/UX Designer</dd>
                    </div>
                    <div>
                        <dt>Platform</dt>
                        <dd>Board Game</dd>
                    </div>
                    <div>
                        <dt>Skills</dt>
                        <dd>Design, UI/UX, Motion Graphics</dd>
                    </div>
                </dl>
            </section>

            <div className="case case-visual">
                <img
                    className="case-img"
                    src="/work/bandit/header.jpg"
                    alt="Bandit Breakout hero"
                />
            </div>

            <section className="case case-section">
                <p className="eyebrow">The problem</p>
                <h2 className="case-h2">
                    Board games get <span className="accent">repetitive</span>
                </h2>
                <p className="case-body">
                    We found that multiplayer board games fall into
                    the trap of being repetitive, boring, and straightforward
                    after 2+ replays. The lack of customization or surprises
                    bore us, and we find that normal board games lack the visual
                    appeal players desire.
                </p>
                <p className="case-body">
                    This is why we made Bandit Breakout, to bring players a
                    chaotic, but fun, boardgame experience with friends.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/bandit/problemo.svg"
                    alt="Problem overview"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">The solution</p>
                <h2 className="case-h2">
                    Dynamic, player-driven{" "}
                    <span className="accent">gameplay</span>
                </h2>
                <p className="case-body">
                    As the designer of Bandit Breakout, my goal was to create a
                    race-to-the-finish board game that feels dynamic and
                    player-driven rather than strictly linear. Players race
                    across the desert to capture the villain terrorizing the
                    land, but how they get there is shaped by the choices they
                    make along the way.
                </p>
                <p className="case-body">
                    Instead of a straightforward path from start to finish, we
                    designed Bandit Breakout to encourage interaction, tension,
                    and replayability. Every turn offers opportunities for
                    player choice and disruption, creating a more engaging,
                    visually engaging, and unpredictable board game experience.
                </p>
                <iframe
                    src="https://drive.google.com/file/d/1H_q33nm2S5rGptYGcLII666p9jX3zRJp/preview"
                    className="step__vid step__iframe case-img--mt"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Bandit Breakout gameplay demo"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Research</p>
                <h2 className="case-h2">
                    What players <span className="accent">want</span>
                </h2>
                <p className="case-body">
                    Interviews with 12 board game players showed a strong
                    preference for collaborative, story-driven play. Over 80%
                    enjoyed cooperative experiences, and 60% valued
                    narrative-focused games, leading me to design gameplay
                    around shared decision-making and visual progression.
                </p>
                <p className="case-body">
                    Players expressed frustration with unsatisfying endings, so
                    we prioritised meaningful, fully illustrated narrative
                    conclusions. To support varied playstyles and replayable
                    multiplayer experiences, we emphasised replayability through
                    different choices, interactions, and characters.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/bandit/banditgraph.png"
                    alt="Research findings"
                />
                <p className="case-body case-body--spaced">
                    <a
                        href="https://docs.google.com/document/d/12Z3Hw660hhzNR4QW1Gg4uPothI71lgKRqduENTvWCV4/edit?usp=sharing"
                        className="case-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        View the full research report →
                    </a>
                </p>
            </section>

            <section className="case case-section">
                <p className="eyebrow">Design process</p>
                <h2 className="case-h2">
                    Characters, backgrounds, and{" "}
                    <span className="accent">animation</span>
                </h2>

                <div className="step">
                    <h3 className="step__t">
                        1. Sketching, character design &amp; backgrounds
                    </h3>
                    <p className="step__d">
                        As the main Design lead, I was in charge of the art
                        direction for the game. We chose a rustic, yet bright
                        colour palette to help link with our cowboy theme, all
                        while being fun and stylistic. A crayon like pen was
                        chosen for the art to help each piece feel hand drawn
                        and lively.
                    </p>
                    <p className="step__d">
                        Many sketches were made to use shape language and
                        simplification to make characters that stood out and had
                        different personalities. Backgrounds were also made to
                        help ease the time taken animating.
                    </p>
                    <div className="case-gallery">
                        <div className="case-gallery__item">
                            <img
                                src="/work/bandit/charactersketch.png"
                                alt="Character sketch"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <img
                                src="/work/bandit/buckshot.png"
                                alt="Buckshot character"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <img
                                src="/work/bandit/casino.png"
                                alt="Casino background"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <img
                                src="/work/bandit/grit.png"
                                alt="Grit character"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <img
                                src="/work/bandit/desert.png"
                                alt="Desert background"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <img
                                src="/work/bandit/scout.png"
                                alt="Scout character"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <img
                                src="/work/bandit/mansion.png"
                                alt="Mansion background"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <img
                                src="/work/bandit/serpy.png"
                                alt="Serpy character"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <img
                                src="/work/bandit/oasis.png"
                                alt="Oasis background"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <img
                                src="/work/bandit/solstice.png"
                                alt="Solstice character"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <img
                                src="/work/bandit/slums.png"
                                alt="Slums background"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <img
                                src="/work/bandit/villain.png"
                                alt="Villain character"
                            />
                        </div>
                    </div>
                </div>

                <div className="step">
                    <h3 className="step__t">2. Animating</h3>
                    <p className="step__d">
                        As the sole animator of the project, I was tasked with
                        creating all the cutscenes (beginning, multiple endings,
                        character and NPC interactions, dice rolling, and battle
                        animations). Storyboards were also made to ensure
                        clarity in animation, and direction for how things
                        needed to be animated.
                    </p>
                    <div className="case-gallery case-gallery--2">
                        <div className="case-gallery__item">
                            <iframe
                                src="https://drive.google.com/file/d/1d5crYQis-p6lTQxiYStTWwC_Hlf9COGU/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 1"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <iframe
                                src="https://drive.google.com/file/d/1et0O71TMl0e-_YCrheM3KowCVTFR8jPC/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 2"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <iframe
                                src="https://drive.google.com/file/d/1Xgnq8EwQZBTAzW02nlNAa5SNC1o4PxmS/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 3"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <iframe
                                src="https://drive.google.com/file/d/1hQLragBWHltzCuw2LgS9zp25fWd6WsAl/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 4"
                            />
                        </div>
                        <div className="case-gallery__item">
                            <iframe
                                src="https://drive.google.com/file/d/1Fy-yC9TSeoBj2ZlHReuVNpCsIzJ4NeQ-/preview"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Animation example 5"
                            />
                        </div>
                        
                    </div>
                </div>
            </section>

       

            <section className="case case-section">
                <p className="eyebrow">Challenge</p>
                <h2 className="case-h2">
                    The board that{" "}
                    <span className="accent">wouldn&apos;t stick</span>
                </h2>
                <p className="case-body">
                    As we worked, we found it difficult to find ways to create
                    our board, and were stuck on designing it and reiterating
                    over and over again. This was due to our own personal
                    dissatisfaction and multiple rounds of user testing. Both us
                    and our users felt like something was missing, and that our
                    board could have more.
                </p>
                <p className="case-body">
                    Our whole team was unsure about what direction to go in.
                    This issue was solved through a design idea where separate
                    designed areas would look cool. After art and sketches of
                    these areas and NPCs for them were made, the game design
                    team delved deeper into it and created working mechanics for
                    this idea.
                </p>
                <div className="case-gallery">
                    <div className="case-gallery__item">
                        <img
                            src="/work/bandit/problem3.png"
                            alt="Board problem iteration 3"
                        />
                    </div>
                    <div className="case-gallery__item">
                        <img
                            src="/work/bandit/problem2.png"
                            alt="Board problem iteration 2"
                        />
                    </div>
                    <div className="case-gallery__item">
                        <img
                            src="/work/bandit/problem.png"
                            alt="Board problem iteration 1"
                        />
                    </div>
                </div>
            </section>
     

            <section className="case case-section">
                <p className="eyebrow">Outcome</p>
                <h2 className="case-h2">What we created</h2>
                <p className="case-body">
                    On Friday, May 16th, 2025, Team Command Z presented Bandit
                    Breakout. Although competition was close, Bandit Breakout
                    came out on top! Getting to work with such an amazing,
                    creative team was a delight, and an experience I&apos;ll
                    forever look back at fondly.
                </p>

                <div className="ocards">
                    <article className="ocard">
                        <img
                            className="ocard__img"
                            src="/work/bandit/celebrate!.jpg"
                            alt="Team celebrating win"
                        />
                        <h3>Showcase winner</h3>
                        <p>
                            Presented and won at the BCIT showcase! Our competition
                            was close, but Bandit Breakout came out on top.
                        </p>
                    </article>
                    <article className="ocard">
                        <img
                            className="ocard__img"
                            src="/work/bandit/banditmock.png"
                            alt="Bandit Breakout mockup"
                        />
                        <h3>Replayable fun</h3>
                        <p>
                            A chaotic, player-driven board game that brings
                            competitive and casual fun to every session!
                        </p>
                    </article>
                </div>

                <div className="case-actions">
                    <a
                        href="https://bandit-breakout.vercel.app/"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer">
                        View site <span aria-hidden="true">→</span>
                    </a>
                </div>
            </section>

            <section className="case case-section">
                <p className="eyebrow">Reflection</p>
                <h2 className="case-h2">What this taught me</h2>
                <p className="case-body">
                    Bandit Breakout is more than just a game. It&apos;s
                    something the team made to bring joy and creativity into the
                    current straightforward boardgame scene. By addressing the
                    repetitive, single storyline driven boardgames of
                    today&apos;s world, it provides a solution that goes beyond
                    aesthetics.
                </p>
                <p className="case-body">
                    I&apos;ve learned a lot through this project, and have grown
                    as a Graphic designer and Motion Graphics artist. It&apos;s
                    taught me a lot about user-centered design, creative
                    thinking, and has reminded me about my passion and love for
                    the arts.
                </p>
                <iframe
                    src="https://drive.google.com/file/d/12swoFYtPBM5Aux6h3PBawqkMnkNhqftX/preview"
                    className="step__vid step__iframe case-img--mt"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Bandit Breakout journey video"
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
