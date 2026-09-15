import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteNav from "../../../components/SiteNav.jsx";
import ProjectFooter from "../../../components/ProjectFooter.jsx";
import "../CaseStudy.css";

export default function TandemVideo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-page-wrapper">
            <SiteNav />

            <section className="case case-head">
                <h1 className="case-title">Tandem Video Ad</h1>
                <p className="case-lead">
                    The Tandem video ad tells the story of a stressed trades
                    parent, drawing from real experiences to highlight the daily
                    pressures and imbalances they face. Designed to build
                    empathy and understanding, it sheds light on realities often
                    unseen by those outside the trades. By showcasing these
                    routines, the video positions Tandem as a supportive,
                    reliable tool, offering accessible and trustworthy childcare
                    support while reinforcing its goal of bridging the gap
                    between work and family life
                </p>
                <dl className="case-meta">
                    <div>
                        <dt>Role</dt>
                        <dd>Lead Designer, Lead Editor &amp; Lead Animator</dd>
                    </div>
                    <div>
                        <dt>Platform</dt>
                        <dd>Video Ad</dd>
                    </div>
                    <div>
                        <dt>Skills</dt>
                        <dd>Design &amp; Motion Graphics</dd>
                    </div>
                </dl>
            </section>

            <div className="case case-visual">
                <img
                    className="case-img"
                    src="/work/tandemvideo/header.gif"
                    alt="Tandem Video Ad hero"
                />
            </div>

            <section className="case case-section">
                <p className="eyebrow">Inspiration</p>
                <h2 className="case-h2">
                    Emotional storytelling for{" "}
                    <span className="accent">empathy</span>
                </h2>
                <p className="case-body">
                    My group&apos;s main inspiration for this video ad was the
                    various emotional based video ads we found online. Alongside
                    that, we were inspired by interesting camera angles, shots,
                    and transitions that could emulate the feeling of stress
                    that many trade parents face.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/tandemvideo/inspo.png"
                    alt="Tandem video inspiration"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Ideation</p>
                <h2 className="case-h2">
                    Many ideas, one <span className="accent">storyline</span>
                </h2>
                <p className="case-body">
                    All group members came up with their own ideas, written or
                    storyboarded. Each idea was based on a general storyline we
                    had agreed on. Then each story was discussed with the group.
                </p>
                <p className="case-body">
                    Multiple ideas related to the idea of childcare and how
                    balance is key were created for variety. The idea
                    wasn&apos;t for perfection, but for multiple ideas to draw
                    from.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/tandemvideo/ideation.png"
                    alt="Tandem video ideation"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Design process</p>
                <h2 className="case-h2">
                    From storyboard to <span className="accent">screen</span>
                </h2>

                <div className="step">
                    <h3 className="step__t">1. Storyboarding</h3>
                    <p className="step__d">
                        Once we decided upon what parts and aspects conveyed
                        what Tandem was made to solve, a first storyboard draft
                        was created by me. Multiple ideas were cut into certain
                        scenes to make editing and filming easier. Clear arrows
                        and directions were added to make each panel more
                        understandable.
                    </p>
                    <img
                        className="step__vid"
                        src="/work/tandemvideo/storyboard.png"
                        alt="Tandem video storyboard"
                    />
                </div>

                <div className="step">
                    <h3 className="step__t">2. Reiteration and challenges</h3>
                    <p className="step__d">
                        After feedback and viewing, reiterations and rewrites
                        were done to further convey the emotional tones needed
                        for the advertisement, and connect how Tandem was here
                        to help. Additional scenes were added, and the
                        storyboard was animated to make it more clear.
                    </p>
                    <p className="step__d">
                        One of the biggest challenges I faced while
                        storyboarding was considering available environments and
                        actors, which is where a lot of creativity with cut
                        shots and certain framing and sound effects were used.
                    </p>
                    <iframe
                        src="https://drive.google.com/file/d/19Z6BWXvVnNxYYkbKnWgUWsQe9prZFixM/preview"
                        className="step__vid step__iframe"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Animated storyboard"
                    />
                </div>

                <div className="step">
                    <h3 className="step__t">3. Filming and editing</h3>
                    <p className="step__d">
                        Once changes were confirmed, actors were secured and
                        filming commenced. Multiple locations and props were
                        used to showcase the reality of many trades parents.
                    </p>
                    <p className="step__d">
                        Once multiple takes of videos were shot, editing on
                        Premiere Pro was done to ensure audio, visuals, and
                        clips synced up perfectly. Many reiterations and edits
                        were done based on feedback from teammates and trade
                        parents. One of the biggest issues I faced was syncing
                        audio to clips, as we had many audio issues during our
                        recording sessions. Thankfully, with enough time and
                        patience, the audio issues were fixed.
                    </p>
                    <iframe
                        src="https://drive.google.com/file/d/10T_ClKHSHufgU1j4ZxB4G-ZyKshMSdtn/preview"
                        className="step__vid step__iframe"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Filming and editing process"
                    />
                </div>

                <div className="step">
                    <h3 className="step__t">4. Final product</h3>
                    <iframe
                        src="https://drive.google.com/file/d/1OaxVXS2Z1XvUKYy3UgPR4W_Xht5q3wHK/preview"
                        className="step__vid step__iframe"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Tandem video ad final"
                    />
                </div>
            </section>

            <section className="case case-section">
                <p className="eyebrow">Reflection</p>
                <h2 className="case-h2">What this taught me</h2>
                <p className="case-body">
                    Getting to film and create this video was an amazing
                    experience. It was great to see the process from start to
                    finish, and to see how much work and effort goes into
                    creating a video like this.
                </p>
                <p className="case-body">
                    I learned a lot about video editing, audio adjusting, and
                    how to create and tell a story through video. I also learned
                    how to work with a team to create a cohesive product, and
                    how to take feedback and make changes based on that
                    feedback.
                </p>
                <p className="case-body">
                    It was a wonderful and amazing experience to get to film
                    with everyone. Enjoy some of our bloopers!
                </p>

                <div className="case-gallery case-gallery--2">
                    <div className="case-gallery__item">
                        <iframe
                            src="https://drive.google.com/file/d/1x8joe0b1iCGu_Dkwj35EqeFPDHJQA164/preview"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Tandem video blooper 1"
                        />
                    </div>
                    <div className="case-gallery__item">
                        <iframe
                            src="https://drive.google.com/file/d/156crefT1wjKnaEurCXJs3UILAfDwzEcy/preview"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Tandem video blooper 2"
                        />
                    </div>
                </div>

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
