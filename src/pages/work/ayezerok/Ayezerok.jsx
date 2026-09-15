import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteNav from "../../../components/SiteNav.jsx";
import ProjectFooter from "../../../components/ProjectFooter.jsx";
import "../CaseStudy.css";

export default function Ayezerok() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-page-wrapper">
            <SiteNav />

            <section className="case case-head">
                <h1 className="case-title">Ayezerok</h1>
                <p className="case-lead">
                    A public safety warning about a dangerous, mysterious
                    creature roaming the woods—designed to mimic real
                    announcements while staying fictional and unsettling.
                </p>
                <dl className="case-meta">
                    <div>
                        <dt>Role</dt>
                        <dd>Designer</dd>
                    </div>
                    <div>
                        <dt>Platform</dt>
                        <dd>Print &amp; Illustration</dd>
                    </div>
                    <div>
                        <dt>Focus</dt>
                        <dd>Creature Design</dd>
                    </div>
                </dl>
            </section>

            <div className="case case-visual">
                <img
                    className="case-img"
                    src="/work/ayezerok/header.png"
                    alt="Ayezerok project hero"
                />
            </div>

            <section className="case case-section">
                <p className="eyebrow">Inspiration</p>
                <h2 className="case-h2">
                    Stepping out of the <span className="accent">comfort zone</span>
                </h2>
                <p className="case-body">
                    Having done many cartoony, fun, and colourful projects, I
                    was inspired to step out of my comfort zone and do something
                    a little less playful. Through scrolling and searching up
                    random animals, I found my main source of inspiration, the
                    aye-aye. With its offputting appearance during night, and
                    normal appearance during the day, I was determined to warp
                    this strange creature into something else entirely.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/ayezerok/inspo.png"
                    alt="Ayezerok inspiration"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Research</p>
                <h2 className="case-h2">
                    What animals and <span className="accent">why?</span>
                </h2>
                <p className="case-body">
                    As I stared at the aye-aye, I thought of all the weird,
                    strange animals that exist. The first to come to mind was an
                    ape, after all, they&apos;re oddly humanlike. After that, the
                    walrus, with its strange round form and long teeth. Lastly, I
                    thought of a lizard, as their fleshy mouths, and unblinking
                    eyes fit the unnerving look I was going for.
                </p>
                <img
                    className="step__vid case-img--mt"
                    src="/work/ayezerok/why.png"
                    alt="Animal reference research"
                />
            </section>

            <section className="case case-section">
                <p className="eyebrow">Design process</p>
                <h2 className="case-h2">
                    From sketch to <span className="accent">creature</span>
                </h2>

                <div className="step">
                    <h3 className="step__t">1. Iteration</h3>
                    <p className="step__d">
                        With all my animals in mind, it was time to get to work.
                        Through multiple rounds of feedback, adjustments and
                        edits were made to make the creature and poster look
                        more realistic. More information was added to the
                        poster, and subtle details were added to the Ayezerok
                        to make it look like a real creature.
                    </p>
                    <img
                        className="step__vid"
                        src="/work/ayezerok/iteration.png"
                        alt="Ayezerok iteration process"
                    />
                </div>

                <div className="step">
                    <h3 className="step__t">2. Final product</h3>
                    <p className="step__d">
                        The finished poster combines public safety aesthetics
                        with a creature design that feels believable enough to
                        unsettle.
                    </p>
                    <img
                        className="step__vid"
                        src="/work/ayezerok/final.png"
                        alt="Ayezerok final poster"
                    />
                </div>
            </section>

            <section className="case case-section">
                <p className="eyebrow">Reflection</p>
                <h2 className="case-h2">What this taught me</h2>
                <p className="case-body">
                    The Ayezerok was made from a place of exploration and
                    desire to grow out of my comfort zone, and it definitely
                    challenged me in many ways. Having been so used to the fun
                    visual style I&apos;d always stuck to, this project really
                    helped grow me as a designer.
                </p>
                <p className="case-body">Thank you for reading.</p>
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
