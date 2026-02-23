import NavBar from "../../../components/navbar";
import "./tandem.css";
import Footer from "../../../components/footer";
import JigglyGrid from "../../../components/grid";

export default function Tandem() {
    return (
        <div className="tandempage-wrapper">
            <NavBar />

            <header className="tandem-hero-fullscreen">
                <img
                    src="/work/tandem/header.jpg"
                    alt="Tandem hero background"
                    className="tandem-hero-fullscreen-image"
                />
            </header>

            <section className="tandem-hero-content-section">
                <div className="tandemcontainer">
                    <h1 className="tandemproject-title">Tandem</h1>
                    <p className="tandemproject-roles">
                        Roles: Design & Project Lead, UI/UX Designer
                    </p>

                    <div className="tandemtags">
                        <span className="tandemtag1">Design</span>
                        <span className="tandemtag2">UI/UX</span>
                        <span className="tandemtag3">Motion Graphics</span>
                        <span className="tandemtag4">Front-end</span>
                    </div>

                    <div className="tandemtags">
                        <a
                            href="https://tandem-blog.vercel.app/"
                            className="tandem-site-button2"
                            target="_blank"
                            rel="noopener noreferrer">
                            View Blog
                        </a>
                        <a
                            href="https://www.tandem-app.com/sign-in?redirect_url=https%3A%2F%2Fwww.tandem-app.com%2F"
                            className="tandem-site-button2"
                            target="_blank"
                            rel="noopener noreferrer">
                            Use App
                        </a>
                    </div>

                    <div className="tandemhero-content">
                        <div className="tandemhero-text"></div>

                        <div className="tandemhero-image">
                            <p className="tandemhero-text1">
                                Tandem is an app for parents in trades to help
                                balance work with childcare. It utilizes AI to
                                help busy parents balance the responsibilities
                                of work and childcare, providing trustworthy
                                recommendations and supportive childcare. It
                                allows parents in the trades to find childcare
                                easily, reducing stress and improving work-life
                                balance.
                            </p>
                            <p className="tandemhero-text2">
                                Inspired by the multiple real stories of
                                tradesworkers who struggle with childcare,
                                Tandem aimed to create a world where instead of
                                childcare feeling overwhelming and consistent,
                                childcare could be supportive, flexible, and
                                reliable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="tandemsection-nav">
                <div className="tandemcontainer">
                    <div className="tandem-two-column">
                        <div className="tandem-text-content">
                            <p className="tandemsection-title">View Section:</p>
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
                                        04. Branding and Styleguide
                                    </a>
                                </li>
                                <li>
                                    <a href="#issue">05. Unexpected Issue</a>
                                </li>
                                <li>
                                    <a href="#what-didnt-work">
                                        06. What Didn't Work
                                    </a>
                                </li>
                                <li>
                                    <a href="#how-we-solved">
                                        07. How We Solved It
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

                        <div className="tandem-media-column">
                            <div className="tandem-nav-image">
                                <img
                                    src="/work/tandem/tandemphones.png"
                                    alt="Tandem app shown on mobile phones"
                                    className="tandem-large-media"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section
                className="tandemsection"
                id="problem">
                <div className="tandemcontainer">
                    <div className="tandem-section-header">
                        <span className="tandem-section-number">01</span>
                        <div className="tandem-section-line"></div>
                        <span className="tandem-section-label">Problem</span>
                    </div>

                    <div className="tandem-branding-text">
                        <div className="tandem-text-content">
                            <p>
                                Daycares can be difficult, with long waitlists
                                and lack of flexible hours for tradeparents
                                schedules. Many are faced with the options to
                                either call into work if their childcare falls
                                through, contact family for help, or become a
                                stay-at-home parent. Many don’t have the
                                support, and aren’t able to afford this.
                            </p>
                            <p>
                                This is why Tandem was made, to bridge the gap
                                between work and childcare.
                            </p>
                        </div>

                        <div className="tandem-branding-gallery">
                            <img
                                src="/work/tandem/problemo.svg"
                                alt=""
                                className="tandem-branding-fullwidth"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemsection tandemsection-alt"
                id="solution">
                <div className="tandemcontainer">
                    <div className="tandem-section-header">
                        <span className="tandem-section-number">02</span>
                        <div className="tandem-section-line"></div>
                        <span className="tandem-section-label">Solution</span>
                    </div>

                    <div className="tandem-branding-text">
                        <p className="tandem-solution-text1">
                            As the main Design lead and Project lead of Tandem,
                            we aimed to create a web app to solve this issue.
                            Tandem is an app dedicated to helping trade parents
                            find flexible, affordable, and reliable childcare
                            options. With its AI scheduling, the app works
                            around your schedule to help you find childcare. It
                            provides nannies who are flexible to the odd work
                            hours many tradeworkers have, and counterbalances
                            the usual expensive services with nannysharing,
                            where parents can split costs.
                        </p>
                        <p>
                            Instead of the stressful, inflexible experience many
                            tradesworkers have to experience, Tandem offers
                            flexible, reliable childcare services and
                            scheduling.
                        </p>
                        <div className="tandem-media-column">
                            <iframe
                                src="https://drive.google.com/file/d/1puqx31VWPxiC4Tx_jEuIoFp16J2abGXm/preview"
                                className="tandem-process-video"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Bandit Breakout Solution & Gameplay Demo"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemsection"
                id="research">
                <div className="tandemcontainer">
                    <div className="tandem-section-header">
                        <span className="tandem-section-number">03</span>
                        <div className="tandem-section-line"></div>
                        <span className="tandem-section-label">Research</span>
                    </div>

                    <div className="tandem-two-column">
                        <div className="tandem-media-column">
                            <div className="tandem-research-image-wrapper">
                                <img
                                    src="/work/tandem/tandemgraph.png"
                                    className="tandem-research-main-image tandem-large-media"
                                    alt="Research findings visualization"
                                />
                            </div>
                        </div>
                        <img
                            src="/work/minime/examine.svg"
                            className="tandem-floating-overlay1"
                        />
                        <div className="tandem-text-content tandem-research-text">
                            <p>
                                Interviews with 17 trade parents showed us how
                                50% of tradesworkers struggle with childcare.
                            </p>
                            <p>
                                Many trade parents found it difficult to find
                                nearby, accessible, and reliable childcare. They
                                also found that not only was it difficult,
                                childcare was always expensive.
                            </p>
                            <p>
                                17 trades workers, all with different careers,
                                families, and schedules, all facing the same
                                problem.
                            </p>
                            <p>
                                Secondary research displayed how difficult
                                childcare is in Vancouver and how many parents
                                have to find ways to either stay-at-home, or
                                manage finances. Many face extreme stress and
                                imbalance in their life schedules.
                            </p>
                            <a
                                href="https://docs.google.com/document/d/1q2iX2L2OvAhui6LYZeLVbo92AMHXwLF_mHFE8P5sgxE/edit?usp=sharing"
                                className="tandem-research-button"
                                target="_blank"
                                rel="noopener noreferrer">
                                View Report
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemsection tandemsection-alt"
                id="branding">
                <div className="tandemcontainer">
                    <div className="tandem-section-header">
                        <span className="tandem-section-number">04</span>
                        <div className="tandem-section-line"></div>
                        <span className="tandem-section-label">
                            Branding and Styleguide
                        </span>
                    </div>

                    <div className="tandem-branding-text">
                        <p>
                            We chose the colours that reflect our values of
                            Balance, Trust, and Support. Blue, our main colour,
                            represents calmness, safety, and reliability, which
                            is perfect for childcare schedules, we also add
                            green for balance, symbolizing growth and action,
                            and it is used for work schedules. Blending the two
                            creates a friendly light blue, while the
                            blue-to-green gradient conveys both efficiency and
                            warmth. Together, these colours make the app feel
                            like a supportive and trustworthy companion.
                        </p>

                        <div className="tandem-branding-gallery">
                            <img
                                src="/work/tandem/branding.svg"
                                className="tandem-branding-fullwidth"
                                alt="Tandem branding and styleguide"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemsection"
                id="issue">
                <div className="tandemcontainer">
                    <div className="tandem-section-header">
                        <span className="tandem-section-number">06</span>
                        <div className="tandem-section-line"></div>
                        <span className="tandem-section-label">
                            Unexpected Issue
                        </span>
                    </div>
                    <img
                        src="/work/minime/confusion.svg"
                        className="tandem-floating-overlay2"
                    />
                    <div className="tandem-branding-gallery">
                        <div className="tandem-gallery-item2">
                            <img
                                src="/work/tandem/issue.svg"
                                alt=""
                                className="tandem-gallery-image2"
                            />
                        </div>

                        <div className="tandem-branding-text">
                            <p className="tandem-text-content1">
                                Through our user testing on our Mid-fidelity
                                prototype, we faced an issue that our users
                                thought would be a main concern: safety.
                            </p>
                            <p>
                                We had always considered safety with our app,
                                but with valid questions and concerns brought up
                                through our testing, our team decided to dig
                                even further into how we could make our app more
                                reliable.
                            </p>

                            <p>
                                Although with this came some issues and research
                                that needed to be done.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemsection"
                id="what-didnt-work">
                <div className="tandemcontainer">
                    <div className="tandem-section-header">
                        <span className="tandem-section-number">07</span>
                        <div className="tandem-section-line"></div>
                        <span className="tandem-section-label">
                            What Didn't Work
                        </span>
                    </div>

                    <div className="tandem-branding-text">
                        <p>
                            Through team meetings and discussion with various
                            people in the trades, we learned that our main issue
                            was the lack of information and transparency in our
                            onboarding process.
                        </p>
                        <p>
                            Our past onboarding from our mid-fi was too simple
                            for covering such an important topic, and needed to
                            be further iterated and reworked.
                        </p>

                        <div className="tandem-branding-gallery">
                            <div className="tandem-gallery-item2">
                                <img
                                    src="/work/tandem/oldwireframes.svg"
                                    className="tandem-gallery-image2"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemsection"
                id="how-we-solved">
                <div className="tandemcontainer">
                    <div className="tandem-section-header">
                        <span className="tandem-section-number">08</span>
                        <div className="tandem-section-line"></div>
                        <span className="tandem-section-label">
                            How We Solved It
                        </span>
                    </div>
                    <img
                        src="/work/minime/study.svg"
                        className="tandem-floating-overlay3"
                    />
                    <div className="tandem-branding-text">
                        <p>
                            After meeting multiple times, reiterating, and
                            constantly checking in with various trade parents,
                            we finally came up with two fixes to this issue.
                        </p>
                        <p>
                            First, we redid our onboarding process entirely. We
                            added more information, and redid all our screens to
                            ensure everything was clear.
                        </p>
                        <p>
                            We also uprooted our nanny sharing section, making
                            sure only those in your workplace or those you
                            trusted were able to share with you.
                        </p>

                        <div className="tandem-branding-gallery">
                            <div className="tandem-gallery-item2">
                                <img
                                    src="/work/tandem/wireframes.svg"
                                    className="tandem-branding-fullwidth"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemsection tandemsection-alt"
                id="final-design">
                <div className="tandemcontainer">
                    <div className="tandem-section-header">
                        <span className="tandem-section-number">09</span>
                        <div className="tandem-section-line"></div>
                        <span className="tandem-section-label">
                            Final Design & Showcase
                        </span>
                    </div>

                    <div className="tandem-two-column">
                        <div className="tandem-media-column tandem-media-stack">
                            <img
                                src="/work/tandem/team.jpg"
                                alt="Team photo"
                                className="tandem-showcase-image"
                            />

                            <img
                                src="/work/tandem/smile.jpg"
                                alt="Smiling group"
                                className="tandem-showcase-image"
                            />
                        </div>

                        <div className="tandem-text-content tandem-research-text">
                            <p>
                                The final designs for Tandem tackle all the
                                challenges that trade parents face, such as
                                balancing work and child life, finding childcare
                                that fits their hours, and having a consistent
                                and affordable way to get childcare near their
                                homes. Tandem provides an adjustable calendar,
                                an AI-powered upload system for easier schedule
                                inputs, nanny booking, and nanny sharing. It
                                equips parents with all the tools to ensure that
                                all trade parents are given supportive and
                                trustworthy help when their schedules are the
                                opposite.
                            </p>
                            <p>
                                On December 5th, 2025, Tandem was presented at
                                BCIT’s BCIT - Digital Design and Development x
                                BCIT ConnectHER Hub showcase, an event that
                                allows students to highlight their work and
                                solution to real-world challenges.
                            </p>
                            <p>
                                This year’s showcase focused on the issue of
                                underrepresented people in trades, and how to
                                leverage AI to address challenges in retention,
                                relationships, career pathways, resources,
                                skills, training, and accessibility. This event
                                brought students, industry leaders, and
                                government officials together to look into how
                                technology can change and make a meaningful
                                impact against real-world problems.
                            </p>
                            <p>
                                The event was a great opportunity to showcase
                                the variety of different needs, issues, and
                                solutions to different problems. It also helped
                                shed light on various issues.
                            </p>
                            <p>
                                Getting to lead and collaborate with such a
                                driven, passionate group was an experience I’ll
                                always be grateful for. Thank you Team Tandem!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tandemsection tandemsection-alt"
                id="Journey">
                <div className="tandemcontainer">
                    <div className="tandem-section-header">
                        <span className="tandem-section-number">10</span>
                        <div className="tandem-section-line"></div>
                        <span className="tandem-section-label">
                            The Journey and Impact
                        </span>
                    </div>

                    <div className="tandem-journey-video-wrapper">
                        <img
                            className="tandem-journey"
                            src="/work/tandem/present.jpg"
                        />
                    </div>
                    <img
                        src="/work/minime/celebrate.svg"
                        className="tandem-floating-overlay4"
                    />
                    <div className="tandem-branding-text">
                        <p>
                            Tandem is more than just an app. It represents a
                            problem that is still present to this day, and the
                            changes that can be made to make a difference in
                            each trade parents life. By addressing the
                            unbalanced, stressful, and overwhelming realities,
                            it provides a solution that goes beyond just
                            functionality, but also supports and lifts up its
                            users.
                        </p>
                        <p>
                            I’ve learned a lot through this project, and have
                            grown as a UI/UX designer and Graphic designer. It’s
                            taught me a lot about communication, user-centred
                            design, and has taught me my driving motivations as
                            a designer: to be able to make changes rooted in
                            curiosity and care.
                        </p>
                        <p>Thank you for reading!</p>

                        <div className="tandem-bottom-buttons">
                            <div className="tandem-site-button-wrapper">
                                <a
                                    href="https://www.tandem-app.com/sign-in?redirect_url=https%3A%2F%2Fwww.tandem-app.com%2F"
                                    className="tandem-site-button"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Use App
                                </a>
                            </div>

                            <div className="tandem-site-button-wrapper">
                                <a
                                    href="https://tandem-blog.vercel.app/"
                                    className="tandem-site-button"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    View Blog
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
