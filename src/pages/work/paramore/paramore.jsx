import Footer from "../../../components/footer";
import "./paramore.css";
import NavBar from "../../../components/navbar";

export default function Paramore() {
    return (
        <div className="paramorepage-wrapper">
            <NavBar />

            <header className="paramore-hero-fullscreen">
                <img
                    src="/work/paramore/headerimage.jpg"
                    alt="This is Paramore – hero background"
                    className="paramore-hero-fullscreen-image"
                />
            </header>

            <section className="paramoresection">
                <div className="paramorecontainer">
                    <h1 className="paramoreproject-title">This is Paramore</h1>
                    <p className="paramoreproject-roles">
                        Roles: Main Designer, UI/UX Designer, & Frontend
                        Developer
                    </p>

                    <div className="paramoretags">
                        <span className="paramoretag1">Design</span>
                        <span className="paramoretag2">UI/UX</span>
                        <span className="paramoretag4">Code</span>
                    </div>

                    <div className="paramorehero-content">
                        <div className="paramorehero-text"></div>

                        <div className="paramorehero-image">
                            <p className="paramorehero-text1">
                                This is Paramore was a project where we were
                                given freedom to build an interactive and
                                informational digital media piece of whatever we
                                desired. The goal of this project was to create
                                an e-magazine that was both fun, stylish, and
                                creative, but also detailed and informative. The
                                result of this was ‘This is Paramore’, a homage
                                to Paramore and their history.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="paramoresection-nav">
                <div className="paramorecontainer">
                    <div className="paramore-two-column">
                        <div className="paramore-text-content">
                            <p className="paramoresection-title">
                                View Section:
                            </p>
                            <ul>
                                <li>
                                    <a href="#problem">01. What is it?</a>
                                </li>
                                <li>
                                    <a href="#solution">02. Why Paramore?</a>
                                </li>
                                <li>
                                    <a href="#research">03. Research</a>
                                </li>
                                <li>
                                    <a href="#branding">
                                        04. Moodboards, Storyboards, and Mockups
                                    </a>
                                </li>
                                <li>
                                    <a href="#animating">05. Development</a>
                                </li>
                                <li>
                                    <a href="#issue">
                                        06. How Was it Overcome?
                                    </a>
                                </li>
                                <li>
                                    <a href="#what-didnt-work">
                                        07. Reflection
                                    </a>
                                </li>
                                <li>
                                    <a href="#Journey">
                                        08. The Journey and Impact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="paramore-media-column">
                            <div className="paramore-nav-image">
                                <img
                                    src="/work/paramore/paramore1.png"
                                    className="paramore-large-media"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section
                className="paramoresection"
                id="problem">
                <div className="paramorecontainer">
                    <div className="paramore-section-header">
                        <span className="paramore-section-number">01</span>
                        <div className="paramore-section-line"></div>
                        <span className="paramore-section-label">
                            What is it?
                        </span>
                    </div>

                    <div className="paramore-two-column">
                        <div className="paramore-text-content paramore-process-text">
                            <h2>What is it?</h2>
                            <p>
                                This is Paramore is an interactive digital
                                e-book/magazine displaying the history and
                                tracks of Paramore. Each page describes an era
                                and time they’ve had as a band, covering the
                                music, themes, and artistic direction they chose
                                to go through. This project is a homage to our
                                love for the band, and how far they’ve come.
                            </p>
                        </div>

                        <div className="paramore-media-column">
                            <img
                                src="/work/paramore/paramore2.png"
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
                        <span className="paramore-section-label">
                            Why Paramore?
                        </span>
                    </div>

                    <div className="paramore-two-column reverse">
                        <div className="paramore-media-column">
                            <img
                                className="paramore-process-video"
                                src="/work/paramore/Storyboard.png"
                            />
                        </div>

                        <div className="paramore-text-content paramore-process-text">
                            <h2>Why Paramore?</h2>
                            <p>
                                Paramore is a band that formed in 2004. My
                                groupmate and I are quite passionate about their
                                music and love the visuals they use in their
                                albums. Each album is unique and different from
                                the last, with the songs reflecting that period
                                of time in the band’s life. We love the visuals
                                in these albums, and had many ideas for how we
                                could tie them into each other and weave a story
                                through their years.
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
                                    src="/work/paramore/research.png"
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
                                A competitive analysis was done to see how other
                                sites created and laid out their e-magazines.
                                Through this research, a few things were found,
                                drawn from, and used as inspiration to build the
                                site.
                            </p>
                            <p>
                                I also researched what format we wanted for this
                                project, as there was full creative freedom to
                                do whatever we wanted. With the goal to both
                                cover Paramore’s history and to represent their
                                style, a digital e-magazine seemed like the best
                                option to fully relay the idea.
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
                            Moodboards, Storyboards, and Mockups
                        </span>
                    </div>

                    <div className="paramore-branding-text">
                        <h2> Moodboards, Storyboards, and Mockups</h2>
                        <p>
                            As the main designer of this project, it was my role
                            to help find ideas, and style all the pages to match
                            and feel cohesive. Many different ideas and
                            inspiration was taken from their albums to make each
                            of our pages. We aimed to showcase the grunge rock
                            aesthetic the band displayed through layout, fonts,
                            and colours. This culminated into a Trello board
                            filled with images and ideas for each section.
                        </p>
                        <p>
                            Once the moodboard was created, we moved onto
                            storyboarding each section, and how each interaction
                            would connect within a page. Sketches, inspiration
                            images, and text was used to support each idea we
                            had. We especially made sure that each album page
                            was similar, but showcased the different styles each
                            album had at the same time.
                        </p>
                        <p>
                            After that, mockups and a style guide were created
                            off this image to help us further understand the
                            vision we wanted. Colours, font, and layout was
                            decided based on the common aesthetics found in
                            storyboard, moodboard, and the official Paramore
                            site. We truly wanted to encapsulate the messy yet
                            refined style Paramore had.
                        </p>

                        <div className="paramore-branding-gallery">
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/paramore/moodboard1.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/paramore/moodboard2.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/paramore/storyboard1.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/paramore/storyboard2.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/paramore/mockup1.png"
                                    className="paramore-gallery-imageb"
                                />
                            </div>
                            <div className="paramore-gallery-itemb">
                                <img
                                    src="/work/paramore/mockup2.png"
                                    className="paramore-gallery-imageb"
                                    alt="Desert background"
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
                        <span className="paramore-section-label">
                            Development
                        </span>
                    </div>
                    <img
                        src="/work/minime/study.svg"
                        className="paramore-floating-overlay3"
                    />
                    <div className="paramore-branding-text">
                        <h2>Development</h2>
                        <p>
                            Due to the limited amount of time to finish the
                            project, there were a lot of time constraints. We
                            had around 1.5 months to get it done, from start to
                            finish. This meant quickly finishing and creating
                            ideas for our project to make sure we could
                            implement them without stress or rush. There was a
                            lot of pressure put on me due to this, as not only
                            did I have to ideate, but also code, and design at
                            the same time.
                        </p>

                        <div className="paramore-journey-video-wrapper">
                            <img
                                className="paramore-journey"
                                src="/work/paramore/code.png"
                            />
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
                            How Was it Overcome?
                        </span>
                    </div>
                    <img
                        src="/work/minime/confusion.svg"
                        className="floating-overlay2"
                    />
                    <div className="paramore-two-column">
                        <div className="paramore-media-column">
                            <iframe
                                src="https://drive.google.com/file/d/1eywQV6aPGIRZ8o2-4LbLxS-P5_b4v8Ul/preview"
                                className="bandit-process-video"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Bandit Breakout Solution & Gameplay Demo"
                            />
                        </div>

                        <div className="paramore-text-content">
                            <h2> How Was it Overcome?</h2>
                            <p>
                                Despite the time rush, there were ways I found I
                                could keep my work high quality and keep my work
                                ethic. Setting clear schedules, communication
                                with my teammate through sending videos of our
                                progress, and constantly asking for feedback and
                                help when needed really helped reduce the
                                workload and made the process easier. The main
                                thing that really stood out to me was the trust
                                and dependance my teammate and I had for each
                                other to both support but also help each other.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="paramoresection paramoresection-alt"
                id="what-didnt-work">
                <div className="paramorecontainer">
                    <div className="paramore-section-header">
                        <span className="paramore-section-number">07</span>
                        <div className="paramore-section-line"></div>
                        <span className="paramore-section-label">
                            Reflection
                        </span>
                    </div>

                    <div className="paramore-branding-text">
                        <h2>Reflection</h2>
                        <p>
                            Throughout this project, I learned a lot about
                            mixing code and design to create interactive and
                            informative projects. Having worked with fullstack
                            developers beforehand who would do the code and I
                            would stick to the design, or in teams where tasks
                            were code and designer were often separated, it was
                            a very useful experience to do both at the same
                            time.
                        </p>
                        <p>
                            It also taught me a lot about coding and designing
                            under pressure, and helped me realize that as a
                            designer and developer, I’m capable of making
                            projects that are filled with quality and care
                            despite the stress that came alongside the time
                            limit.
                        </p>

                        <div className="paramore-journey-video-wrapper">
                            <img
                                src="/work/paramore/reflect.png"
                                className="paramore-journey-video2"
                                alt="Reflection and key learnings visualization"
                            />
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
                        <span className="paramore-section-number">08</span>
                        <div className="paramore-section-line"></div>
                        <span className="paramore-section-label">
                            The Journey and Impact
                        </span>
                    </div>

                    <div className="paramore-journey-video-wrapper">
                        <img
                            src="/work/paramore/food.svg"
                            className="paramore-journey-video"
                            alt="Reflection and key learnings visualization"
                        />
                    </div>
                    <img
                        src="/work/minime/celebrate.svg"
                        className="floating-overlay4"
                    />
                    <div className="paramore-branding-text">
                        <h2>The Journey & Impact</h2>
                        <p>
                            This is Paramore is a love letter to a band that we
                            all love and have heard, even if we weren’t aware.
                            It’s something my teammate and I created to share
                            our passion and joy about music to those who are
                            willing to learn. By mixing information with
                            aesthetics and interactivity, this e-magazine brings
                            both an informative and fun experience to users.
                        </p>
                        <p>
                            I’ve learned a lot through this project, and have
                            grown as a Graphic designer, UI/UX designer and
                            Frontend Developer. It’s taught me a lot about
                            interactive design, coding with Next.js, and mixing
                            usability with enjoyment.
                        </p>

                        <p>
                            I also learned about the various cafes downtown as I
                            worked with my teammate, but that's another story!
                            Enjoy a couple of the many drinks and meals paired
                            with work.
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
