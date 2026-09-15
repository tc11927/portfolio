import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteNav from "../../../components/SiteNav.jsx";
import ProjectFooter from "../../../components/ProjectFooter.jsx";
import "../CaseStudy.css";

export default function Paramore() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-page-wrapper">
            <SiteNav />

            <section className="case case-head">
                <h1 className="case-title">This is Paramore</h1>
                <p className="case-lead">
This is Paramore was a project where we were given freedom to build an interactive and informational digital media piece of whatever we desired. The goal of this project was to create an e-magazine that was both fun, stylish, and creative, but also detailed and informative. The result of this was ‘This is Paramore’, a homage to Paramore and their history.
                </p>
                <dl className="case-meta">
                    <div>
                        <dt>Role</dt>
                        <dd>Main Designer, UI/UX Designer &amp; Frontend Developer</dd>
                    </div>
                    <div>
                        <dt>Platform</dt>
                        <dd>E-Magazine</dd>
                    </div>
                    <div>
                        <dt>Skills</dt>
                        <dd>Design, UI/UX, Front-end</dd>
                    </div>
                </dl>
            </section>

            <div className="case case-visual">
                <img
                    className="case-img"
                    src="/work/paramore/headerimage.jpg"
                    alt="This is Paramore hero"
                />
            </div>

            <section className="case case-section">
                <p className="eyebrow">Overview</p>
                <h2 className="case-h2">
                    What is <span className="accent">This is Paramore?</span>
                </h2>
                <p className="case-body">
               This is Paramore is an interactive digital e-book/magazine displaying the history and tracks of Paramore. Each page describes an era and time they’ve had as a band, covering the music, themes, and artistic direction they chose to go through. This project is a homage to our love for the band, and how far they’ve come.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/paramore/paramore2.png"
                    alt="This is Paramore overview"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Concept</p>
                <h2 className="case-h2">
                    Why <span className="accent">Paramore?</span>
                </h2>
                <p className="case-body">
                    Paramore is a band that formed in 2004. My groupmate and I
                    are quite passionate about their music and love the visuals
                    they use in their albums. Each album is unique and different
                    from the last, with the songs reflecting that period of time
                    in the band&apos;s life. We love the visuals in these albums,
                    and had many ideas for how we could tie them into each other
                    and weave a story through their years.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/paramore/Storyboard.png"
                    alt="Paramore storyboard"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Research</p>
                <h2 className="case-h2">
                    Finding the right <span className="accent">format</span>
                </h2>
                <p className="case-body">
                    A competitive analysis was done to see how other sites
                    created and laid out their e-magazines. Through this
                    research, a few things were found, drawn from, and used as
                    inspiration to build the site.
                </p>
                <p className="case-body">
                    We also researched what format we wanted for this project, as
                    there was full creative freedom to do whatever we wanted.
                    With the goal to both cover Paramore&apos;s history and to
                    represent their style, a digital e-magazine seemed like the
                    best option to fully relay the idea.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/paramore/research.png"
                    alt="Paramore research"
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
                    Moodboards, storyboards, and <span className="accent">mockups</span>
                </h2>
                <p className="case-body">
                    As the main designer of this project, it was my role to help
                    find ideas, and style all the pages to match and feel
                    cohesive. Many different ideas and inspiration was taken
                    from their albums to make each of our pages. We aimed to
                    showcase the grunge rock aesthetic the band displayed through
                    layout, fonts, and colours.
                </p>
                <p className="case-body">
                    Once the moodboard was created, we moved onto storyboarding
                    each section, and how each interaction would connect within
                    a page. After that, mockups and a style guide were created
                    to help us further understand the vision we wanted.
                </p>

                <div className="case-gallery">
                    <div className="case-gallery__item">
                        <img src="/work/paramore/moodboard1.png" alt="Moodboard 1" />
                    </div>
                    <div className="case-gallery__item">
                        <img src="/work/paramore/moodboard2.png" alt="Moodboard 2" />
                    </div>
                    <div className="case-gallery__item">
                        <img src="/work/paramore/storyboard1.png" alt="Storyboard 1" />
                    </div>
                    <div className="case-gallery__item">
                        <img src="/work/paramore/storyboard2.png" alt="Storyboard 2" />
                    </div>
                    <div className="case-gallery__item">
                        <img src="/work/paramore/mockup1.png" alt="Mockup 1" />
                    </div>
                    <div className="case-gallery__item">
                        <img src="/work/paramore/mockup2.png" alt="Mockup 2" />
                    </div>
                </div>

                <div className="step">
                    <h3 className="step__t">Development</h3>
                    <p className="step__d">
                        Due to the limited amount of time to finish the project,
                        there were a lot of time constraints. We had around 1.5
                        months to get it done, from start to finish. There was a
                        lot of pressure put on me due to this, as not only did I
                        have to ideate, but also code, and design at the same
                        time.
                    </p>
                    <img
                        className="step__vid"
                        src="/work/paramore/code.png"
                        alt="Paramore development"
                    />
                </div>

                <div className="step">
                    <h3 className="step__t">How was it overcome?</h3>
                    <p className="step__d">
                        Despite the time rush, there were ways we found ways we could
                        keep my work high quality and keep my work ethic.
                        Setting clear schedules, communication with my teammate
                        through sending videos of our progress, and constantly
                        asking for feedback and help when needed really helped
                        reduce the workload and made the process easier.
                    </p>
                    <iframe
                        src="https://drive.google.com/file/d/1eywQV6aPGIRZ8o2-4LbLxS-P5_b4v8Ul/preview"
                        className="step__vid step__iframe"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Paramore development walkthrough"
                    />
                </div>
            </section>

            <section className="case case-section">
                <p className="eyebrow">Outcome</p>
                <h2 className="case-h2">What we shipped</h2>
                <p className="case-body">
                    This is Paramore is a love letter to a band that we all love
                    and have heard, even if we weren&apos;t aware. It&apos;s
                    something my teammate and I created to share our passion and
                    joy about music to those who are willing to learn. By mixing
                    information with aesthetics and interactivity, this
                    e-magazine brings both an informative and fun experience to
                    users.
                </p>
                <p className="case-body">
                    Throughout this project, we learned a lot about mixing code
                    and design to create interactive and informative projects.
                    It also taught me a lot about coding and designing under
                    pressure, and helped me realize that as a designer and
                    developer, I&apos;m capable of making projects that are
                    filled with quality and care despite the stress that came
                    alongside the time limit.
                </p>
                <img
                    className="case-img case-img--mt"
                    src="/work/paramore/reflect.png"
                    alt="Paramore reflection"
                />
             
                <div className="case-actions">
                    <a
                        href="https://paramore-emagazine.vercel.app/"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer">
                        View site <span aria-hidden="true">→</span>
                    </a>
                </div>
                <p className="case-body case-body--spaced">Thank you for reading!</p>
            </section>

            <div className="case case-cta">
                <Link className="btn" to="/#work">
                    More projects <span aria-hidden="true">→</span>
                </Link>
            </div>

            <ProjectFooter />
        </div>
    );
}
