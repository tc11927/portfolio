import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteNav from "../../../components/SiteNav.jsx";
import "../CaseStudy.css";
import ProjectFooter from "../../../components/ProjectFooter.jsx";

export default function Tandem() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-page-wrapper">
            <SiteNav />

            <section className="case case-head">
                <h1 className="case-title">Tandem</h1>
                <p className="case-lead">
                   Tandem is an app for parents in trades to help balance work with childcare. It utilizes AI to help busy parents balance the responsibilities of work and childcare, providing trustworthy recommendations and supportive childcare. It allows parents in the trades to find childcare easily, reducing stress and improving work-life balance.
                </p>
                <dl className="case-meta">
                    <div>
                        <dt>Role</dt>
                        <dd>Design &amp; Project Lead, UI/UX Designer</dd>
                    </div>
                    <div>
                        <dt>Platform</dt>
                        <dd>Web App</dd>
                    </div>
                    <div>
                        <dt>Launched</dt>
                        <dd>December 2025</dd>
                    </div>
                    <div>
                        <dt>Contributors</dt>
                        <dd>Team Tandem</dd>
                    </div>
                </dl>
            </section>

            <div className="case case-visual">
                <img
                    className="case-img"
                    src="/work/tandem/header.jpg"
                    alt="Tandem app hero"
                />
            </div>

            <section className="case case-section">
                <p className="eyebrow">The problem</p>
                <h2 className="case-h2">
                    When childcare falls through,
                    <br />
                    <span className="accent">work falls apart too.</span>
                </h2>
                <p className="case-body">
                   Daycares can be difficult, with long waitlists and lack of flexible hours for tradeparents schedules. Many are faced with the options to either call into work if their childcare falls through, contact family for help, or become a stay-at-home parent. Many don’t have the support, and aren’t able to afford this.
                </p>
                <p className="case-body">
                    Tandem was built to bridge that gap between demanding work
                    and dependable childcare.
                </p>

                <div className="stats">
                    <div className="stat">
                        <div className="stat__n">50%</div>
                        <div className="stat__c">
                            of tradesworkers in our research struggled with
                            childcare
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat__n">50%</div>
                        <div className="stat__c">
                            say finding reliable placements is their biggest struggle with childcare

                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat__n">100%</div>
                        <div className="stat__c">
                            want childcare near their homes
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat__n">57%</div>
                        <div className="stat__c">
                            struggle to communicate with their childcare providers about their schedules
                        </div>
                    </div>
                </div>
            </section>

            <div className="case">
                <img
                    className="case-img"
                    src="/work/tandem/problemo.svg"
                    alt="Problem overview diagram"
                />
            </div>

            <section className="case case-section">
                <p className="eyebrow">Research & the Solution</p>
                <h2 className="case-h2">
                    Listening before <span className="accent">designing</span>
                </h2>
                <p className="case-body">
                    Interviews with trade parents and secondary research in
                    Vancouver showed our team the same pattern: childcare is hard to find,
                    expensive, and rarely built for tradeworkers irregular hours. Some main things we kept in mind when designing the app were:
                </p>

                <div className="rcards">
                    <article className="rcard">
                        <h3>Childcare is both difficult to find and inaccessible</h3>
                        <p>
                            Everything is expensive and far away from both work, and home. Nannysharing could help solve the issue of cost.
                        </p>
                        <span className="rcard__num">01</span>
                    </article>
                    <article className="rcard">
                        <h3>Trust is non‑negotiable </h3>
                        <p>
                            Parents need trust when it comes to their children, and their information. They need to know that the people they are working with are reliable, and that their children are safe. Certified nannies and companies with good reviews are a must, and the app should be able to provide that information.
                        </p>
                        <span className="rcard__num">02</span>
                    </article>
                    <article className="rcard">
                        <h3>Inconsistent schedules need consistent fallbacks</h3>
                        <p>
                            Parents need to be able to plan around their work schedules, and have a reliable backup plan for when childcare falls through. This could be provided with some nannies that are available for last minute bookings, or a way to share childcare with other parents in the trades.
                        </p>
                        <span className="rcard__num">03</span>
                    </article>
                </div>

                <p className="case-body case-body--spaced">
                    <a
                        href="https://docs.google.com/document/d/1q2iX2L2OvAhui6LYZeLVbo92AMHXwLF_mHFE8P5sgxE/edit?usp=sharing"
                        className="case-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        Read the full research report →
                    </a>
                </p>
            </section>

     

           

            <section className="case case-section">
                <p className="eyebrow">Design process</p>
                <h2 className="case-h2">
                    From insight to <span className="accent">product</span>
                </h2>
                <p className="case-body">
                    As design and project lead, I guided our team with the
                    scheduling, booking, and nanny sharing, with colour and type
                    that signal to parents the feelings of calming, trustworthy, and balanced.
                </p>
                

                <div className="step">
                    <h3 className="step__t">1. Defining the solution</h3>
                    <p className="step__d">
                        Tandem combines AI‑assisted scheduling, nanny booking,
                        and cost‑split nanny sharing so trade parents can plan
                        around real‑world hours and changes.
                    </p>
                    <iframe
                        src="https://drive.google.com/file/d/1puqx31VWPxiC4Tx_jEuIoFp16J2abGXm/preview"
                        className="step__vid step__iframe"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Tandem solution walkthrough"
                    />
                </div>

                <div className="step">
                    <h3 className="step__t">2. Branding &amp; styleguide</h3>
                    <p className="step__d">
                       Blue, our main colour, represents calmness, safety, and reliability, which is perfect for childcare schedules, we also add green for balance, symbolizing growth and action, and it is used for work schedules. Blending the two creates a friendly light blue, while the blue-to-green gradient conveys both efficiency and warmth. Together, these colours make the app feel like a supportive and trustworthy companion.
                    </p>
                    <img
                        className="step__vid"
                        src="/work/tandem/branding.png"
                        alt="Tandem colour and typography system"
                    />
                </div>

                <div className="step">
                    <h3 className="step__t">3. Reworking onboarding for safety</h3>
                    <p className="step__d">
                        User testing showed our mid‑fi onboarding was too unclear and confusing
                        for something that users input their information into and needed to trust. We rebuilt flows with clearer
                        information and tighter nanny‑sharing permissions, and with less visual clutter.
                    </p>
                    <img
                        className="step__vid"
                        src="/work/tandem/v1.png"
                        alt="Updated onboarding wireframes"
                    />
                </div>
            </section>

            <div className="case">
                <img
                 className="step__vid"
                        src="/work/tandem/wireframes.svg"
                        alt="Updated onboarding wireframes"
                />
            </div>

            <section className="case case-section">
                <p className="eyebrow">Outcome</p>
                <h2 className="case-h2">What we created</h2>
                <p className="case-body">
                  The final designs for Tandem tackle all the challenges that trade parents face, such as balancing work and child life, finding childcare that fits their hours, and having a consistent and affordable way to get childcare near their homes. Tandem provides an adjustable calendar, an AI-powered upload system for easier schedule inputs, nanny booking, and nanny sharing. It equips parents with all the tools to ensure that all trade parents are given supportive and trustworthy help when their schedules are the opposite.

On December 5th, 2025, Tandem was presented at BCIT’s BCIT - Digital Design and Development x BCIT ConnectHER Hub showcase, an event that allows students to highlight their work and solution to real-world challenges.
                </p>

                <div className="ocards">
                    <article className="ocard">
                        <img
                            className="ocard__img"
                            src="/work/tandem/tandemphones.png"
                            alt="Tandem on mobile devices"
                        />
                        <h3>A solution to many problems</h3>
                        <p>
                            Booking, sharing, and scheduling in one place for
                            parents juggling trade hours.
                        </p>
                    </article>
                    <article className="ocard">
                        <img
                            className="ocard__img"
                            src="/work/tandem/team.jpg"
                            alt="Team Tandem"
                        />
                        <h3>A booth and showcase</h3>
                        <p>
                            Presented to students, industry leaders, and
                            government officials focused on the issue of underrepresented people in trades, and how to leverage AI to address challenges in retention, relationships, career pathways, resources, skills, training, and accessibility.
                        </p>
                    </article>
                    <article className="ocard">
                        <img
                            className="ocard__img"
                            src="/work/tandem/smile.jpg"
                            alt="Team celebrating"
                        />
                        <h3>Live product</h3>
                        <p>
                            The app and project blog are available for testing and use!
                        </p>
                    </article>
                    <article className="ocard">
                        <img
                            className="ocard__img"
                            src="/work/tandem/present.jpg"
                            alt="Presentation at showcase"
                        />
                        <h3>A product for the real world</h3>
                        <p>
                            Tandem is grounded in underrepresented workers in trades and
                            using technology to address retention and care gaps.
                        </p>
                    </article>
                </div>

                <div className="case-actions">
                    <a
                        href="https://www.tandem-app.com/sign-in?redirect_url=https%3A%2F%2Fwww.tandem-app.com%2F"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer">
                        Use app <span aria-hidden="true">→</span>
                    </a>
                    <a
                        href="https://tandem-blog.vercel.app/"
                        className="btn btn--ghost"
                        target="_blank"
                        rel="noopener noreferrer">
                        View blog <span aria-hidden="true">→</span>
                    </a>
                </div>
            </section>

            <section className="case case-section">
                <p className="eyebrow">Reflection</p>
                <h2 className="case-h2">What this taught me</h2>
                <p className="case-body">
                   Tandem is more than just an app. It represents a problem that is still present to this day, and the changes that can be made to make a difference in each trade parents life. By addressing the unbalanced, stressful, and overwhelming realities, it provides a solution that goes beyond just functionality, but also supports and lifts up its users.


                </p>
                <p className="case-body">I’ve learned a lot through this project, and have grown as a UI/UX designer and Graphic designer. It’s taught me a lot about communication, user-centred design, and has taught me my driving motivations as a designer: to be able to make changes rooted in curiosity and care.</p>
                <img
                    className="case-img case-img--mt"
                    src="/work/tandem/present.jpg"
                    alt="Tandem showcase presentation"
                />
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
