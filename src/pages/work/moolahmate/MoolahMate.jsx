import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteNav from "../../../components/SiteNav.jsx";
import ProjectFooter from "../../../components/ProjectFooter.jsx";
import "../CaseStudy.css";

export default function MoolahMate() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-page-wrapper">
            <SiteNav />

            <section className="case case-head">
                <h1 className="case-title">MoolahMate</h1>
                <p className="case-lead">
                    MoolahMate is a gamified budgeting app that not only helps
                    people save money and track their spending, but also makes
                    it a fun, engaging process with our fun mascot, MooMoo the
                    money-saving cow.
                </p>
                <dl className="case-meta">
                    <div>
                        <dt>Role</dt>
                        <dd>Graphic Designer, UI/UX Designer &amp; Animator</dd>
                    </div>
                    <div>
                        <dt>Tools & Skills</dt>
                        <dd>Figma, HTML, CSS, Javascript, Illustrator, After Effects</dd>
                    </div>
                    <div>
                        <dt>Category</dt>
                        <dd>Design, UI/UX, Motion, Front-end</dd>
                    </div>
                </dl>
            </section>

            <div className="case case-visual">
                <img
                    className="case-img"
                    src="/work/moolahmate/header.png"
                    alt="MoolahMate app hero"
                />
            </div>

            <section className="case case-section">
                <p className="eyebrow">The problem</p>
                <h2 className="case-h2">
                    Budgeting apps are{" "}
                    <span className="accent">disengaging</span>
                </h2>
                <p className="case-body">
                    Through our research, we found out about the struggles the
                    younger generation has when it comes to saving money. We
                    learned about how disengaging normal budgeting apps can be,
                    and wanted to make a gamified version to increase engagement
                    and interest.
                </p>
                <p className="case-body">
                    MoolahMate is a gamified budgeting app that not only helps
                    people save money and track their spending, but also makes
                    it a fun, engaging process with our fun mascot, MooMoo the
                    money-saving cow. We found inspiration in a lot of fun,
                    bubbly mascots, and wanted to make sure our mascot was just
                    as fun.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/moolahmate/Ideation.png"
                    alt="MoolahMate ideation"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Styleguide</p>
                <h2 className="case-h2">
                    Calm, clear, and <span className="accent">fun</span>
                </h2>
                <p className="case-body">
                    The style guide for MoolahMate was made to be clear,
                    calming, and simple, as we didn’t want to confuse our users
                    with our design. We used simple, calming colours to make
                    sure users could see everything clearly.
                </p>
                <p className="case-body">
                    We wanted our app to not only be calming, but fun and
                    engaging, which is where MooMoo came in. Having been in
                    charge of making our main mascot, I wanted to make sure he
                    was made out of round shapes to calm users. I also made sure
                    his design was fairly simple to match our app theme, and to
                    allow for later customization by users.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/moolahmate/styleguide.png"
                    alt="MoolahMate styleguide"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Design process</p>
                <h2 className="case-h2">
                    Simplify and <span className="accent">iterate</span>
                </h2>

                <div className="step">
                    <h3 className="step__t">1. Iteration</h3>
                    <p className="step__d">
                        With everything we had planned, our ideas and features
                        we wanted to implement were too complicated, and some of
                        them confused our users, which we found out during user
                        testing. To fix this, we narrowed our goal and
                        simplified our app even further.
                    </p>
                    <p className="step__d">
                        Through iterations, an issue with combining both design
                        and code came up. It was the first time for all of us to
                        combine code and design to make a functioning app, which
                        was confusing. Having better communication, seeking help
                        from others when needed, and constantly learning helped
                        solve this problem.
                    </p>
                    <img
                        className="step__vid"
                        src="/work/moolahmate/iteration.png"
                        alt="MoolahMate iteration"
                    />
                </div>

                <div className="step">
                    <h3 className="step__t">2. Final product</h3>
                    <iframe
                        src="https://drive.google.com/file/d/1bqDa1u7zkX9Jw4Nltx_ITX8Z0zd4HFKz/preview"
                        className="step__vid step__iframe"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="MoolahMate app demo"
                    />
                    <div className="case-actions">
                        <a
                            href="https://github.com/AlyssaHug/Design02_App"
                            className="btn"
                            target="_blank"
                            rel="noopener noreferrer">
                            View code <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="case case-section">
                <p className="eyebrow">Reflection</p>
                <h2 className="case-h2">What this taught me</h2>
                <p className="case-body">
                    MoolahMate was a project that encouraged growth and
                    learning, having been the first time I&apos;ve ever combined
                    design and code to create a fully functioning app. It mixed
                    both my technical and creative skills and opened my eyes to
                    how to make sure both sides work in harmony.
                </p>
                <p className="case-body">
                    I learned a lot about coding going hand in hand with design,
                    and it&apos;s taught me a lot about how to make the two go
                    hand in hand. It was definitely a good learning experience
                    and I&apos;ve taken a lot from it!
                </p>
                <img
                    className="case-img case-img--mt"
                    src="/work/moolahmate/reflect.png"
                    alt="MoolahMate reflection"
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
