import "./Home.css";
import { useState, useRef, useEffect } from "react";
import NavBar from "../../components/navbar";
import Bg from "./bg";
import JigglyGrid from "../../components/grid";
import Footer from "../../components/footer";
import Bg2 from "./bg2";
import { Link } from "react-router-dom";

export default function Home() {
    const [hoveredAbout, setHoveredAbout] = useState(false);
    const [hoveredWork, setHoveredWork] = useState(false);
    const [hoveredContact, setHoveredContact] = useState(false);
    const [hoveredGallery, setHoveredGallery] = useState(false);

    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    /* GIF and bubbles parallax WEEWOOO!!! this is so I don't forget what code does what haha youtube ty tyy */

    /* Remove #root side padding on mobile so home is full-bleed */
    useEffect(() => {
        document.body.classList.add("home-page");
        return () => document.body.classList.remove("home-page");
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x =
                (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
            const y =
                (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    /* GIF and bubbles parallax WEEWOOO pt 2!!! */

    const gifStrength = 0.04;
    const bubbleStrength = 0.12;

    return (
        <div>
            <NavBar />
            <div className="Section1">
                <Bg className="section1-bg"></Bg>
                <h1 className="title">
                    Hey there, I'm <span className="color-title">Thea C!</span>
                </h1>

                <div
                    className="parallax-container"
                    ref={containerRef}>
                    {/* GIF and bubbles parallax WEEWOOO!!! pt 3 */}
                    <div
                        className="parallax-layer layer-gif"
                        style={{
                            transform: `translate(${
                                mousePos.x * gifStrength * 100
                            }px, ${mousePos.y * gifStrength * 100}px)`,
                        }}>
                        <img
                            className="me-image"
                            src="/home/me.gif"
                            alt="Me"
                        />
                    </div>

                    <div
                        className="parallax-layer layer-bubbles bubble"
                        style={{
                            transform: `translate(${
                                mousePos.x * bubbleStrength * 100
                            }px, ${mousePos.y * bubbleStrength * 100}px)`,
                        }}>
                        {/* totally not reused old code from another assignment rewritten for this one for hover changes... */}
                        <div className="about-bob">
                            <img
                                className="about"
                                src={
                                    hoveredAbout
                                        ? "/home/textbb/bluebb2.svg"
                                        : "/home/textbb/bluebb.svg"
                                }
                                alt="About"
                                onMouseEnter={() => setHoveredAbout(true)}
                                onMouseLeave={() => setHoveredAbout(false)}
                            />
                        </div>

                        <div className="work-bob">
                            <img
                                className="work"
                                src={
                                    hoveredWork
                                        ? "/home/textbb/yellowbb2.svg"
                                        : "/home/textbb/yellowbb.svg"
                                }
                                alt="Work"
                                onMouseEnter={() => setHoveredWork(true)}
                                onMouseLeave={() => setHoveredWork(false)}
                            />
                        </div>

                        <div className="contact-bob">
                            <img
                                className="contact"
                                src={
                                    hoveredContact
                                        ? "/home/textbb/orangebb2.svg"
                                        : "/home/textbb/orangebb.svg"
                                }
                                alt="Contact"
                                onMouseEnter={() => setHoveredContact(true)}
                                onMouseLeave={() => setHoveredContact(false)}
                            />
                        </div>

                        <div className="gallery-bob">
                            <img
                                className="gallery"
                                src={
                                    hoveredGallery
                                        ? "/home/textbb/greenbb2.svg"
                                        : "/home/textbb/greenbb.svg"
                                }
                                alt="Gallery"
                                onMouseEnter={() => setHoveredGallery(true)}
                                onMouseLeave={() => setHoveredGallery(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Section2">
                <JigglyGrid className="grid" />
                <img
                    src="/home/me2.gif"
                    alt="Thea drawing"
                    className="section2-character"
                />

                <div
                    className="section2-text"
                    style={{
                        transform: `translate(${
                            mousePos.x * bubbleStrength * 10
                        }px, ${mousePos.y * bubbleStrength * 10}px)`,
                    }}>
                    <h2 className="visualstorytelling">
                        visual storytelling rooted in
                    </h2>

                    <h2 className="values">
                        <span className="curiosity">curiosity</span> and{" "}
                        <span className="care">care</span>
                    </h2>
                </div>
            </div>
            <div className="section3">
                <Bg2 />

                <div
                    className="homesection3-text"
                    style={{
                        transform: `translate(${mousePos.x * 0.3 * 15}px, ${
                            mousePos.y * 0.3 * 20
                        }px)`,
                    }}>
                    <p className="checkout">Check Out My</p>
                    <p className="featured">Featured Work!</p>
                </div>

                <div className="arrow-hover">
                    <div
                        className="section3-arrow"
                        style={{
                            transform: `translate(${mousePos.x * 0.9 * 20}px, ${
                                mousePos.y * 0.9 * 20
                            }px)`,
                        }}>
                        <Link
                            to="/work"
                            aria-label="Go to work">
                            <img
                                src="/home/arrow.svg"
                                alt="Arrow"
                                className="arrow"
                            />
                        </Link>
                    </div>
                </div>

                <img
                    className="me3-image"
                    src="/home/me3.svg"
                    alt="me"
                    style={{
                        transform: `translate(${mousePos.x * 0.1 * 20}px, ${
                            mousePos.y * 0.1 * 20
                        }px)`,
                    }}
                />
            </div>
            <Footer />
        </div>
    );
}
