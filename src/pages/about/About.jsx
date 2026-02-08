import NavBar from "../../components/navbar";
import "./about.css";
import Footer from "../../components/footer";
import JigglyGrid from "../../components/grid";
import { useState, useRef, useEffect } from "react";
import Bg2 from "../home/bg2";
import Bg from "../home/bg";
import { Link } from "react-router-dom";

export default function About() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            // Normalize to -1 → +1 range with origin at center of the container
            const x =
                (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
            const y =
                (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div ref={containerRef}>
            <NavBar />
            <div className="fullaboutsection">
                <div className="about-quote">
                    <div>
                        <img
                            src="/about/about.gif"
                            className="about-gif"
                            style={{
                                transform: `translate(${mousePos.x * 0.3 * 5}px, ${mousePos.y * 0.3 * 5}px)`,
                            }}
                        />
                    </div>
                    <Bg2 />
                    <p
                        className="no-matter"
                        style={{
                            transform: `translate(${mousePos.x * 0.3 * 15}px, ${mousePos.y * 0.3 * 20}px)`,
                        }}>
                        {" "}
                        Who am I?{" "}
                    </p>
                    <p
                        className="creative-and-care"
                        style={{
                            transform: `translate(${mousePos.x * 0.3 * 15}px, ${mousePos.y * 0.3 * 20}px)`,
                        }}>
                        I'm Thea, a
                        <span className="about-aqua">
                            {" "}
                            Digital Designer
                        </span>{" "}
                    </p>
                    <p
                        className="creative-and-care2"
                        style={{
                            transform: `translate(${mousePos.x * 0.3 * 15}px, ${mousePos.y * 0.3 * 20}px)`,
                        }}>
                        and <span className="about-orange">UI/UX Designer</span>
                    </p>
                </div>
                <div className="about-row reverse-on-desktop">
                    <div className="about-column about-text-column">
                        <div className="about-grid">
                            <JigglyGrid />
                        </div>
                        <div className="about-info1">
                            <h1 className="about-me-h1">
                                A Little More About Me!
                            </h1>
                            <div className="about-me-buttons">
                                <p className="graphic-design-about">
                                    Graphic Design
                                </p>
                                <p className="UIUX-design-about">
                                    UI/UX Design
                                </p>
                                <p className="motiongraphics-design-about">
                                    Motion Graphics
                                </p>
                            </div>
                        </div>
                        <div className="about-info">
                            <div className="about-info-one">
                                <p>
                                    I'm a UX/UI and Graphic Designer from
                                    Vancouver, B.C., who is rooted in creating
                                    designs rooted in curiosity and care. I love
                                    approaching each project where I can bring
                                    both joy and bring my user-first mindset
                                    into play.
                                </p>
                                <div className="about-info-two">
                                    <p>
                                        I’ve always had a passion for art,
                                        starting with drawing and animating.
                                        Over time, I found myself enjoying
                                        graphic design and technology, as it
                                        allowed me to blend my creativity and
                                        desire to make meaningful products. Now,
                                        I strive to design in a way that sparks
                                        curiosity and connection.
                                    </p>
                                    <div className="about-info-three">
                                        <p>
                                            When I’m not designing, you’ll
                                            probably find me drawing, exploring
                                            nature, or listening to music. My
                                            desire to search and create drive my
                                            work, and I believe that in no
                                            matter what I do, creativity and
                                            care is key.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-column about-image-column">
                        <section className="me-photo-section">
                            <img
                                src="/about/about1/bg.png"
                                className="me-photo-about bg-layer"
                                alt=""
                            />

                            <img
                                src="/about/about1/mainme.png"
                                className="me-photo-about main-photo"
                                alt="Thea"
                                style={{
                                    transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
                                }}
                            />
                        </section>
                    </div>
                </div>

                <div className="about-section3">
                    <Bg />

                    <div
                        className="about-homesection3-text"
                        style={{
                            transform: `translate(${mousePos.x * 0.3 * 15}px, ${mousePos.y * 0.3 * 20}px)`,
                        }}>
                        <p className="about-lets">Let's</p>
                        <p className="about-connect">Connect!</p>
                    </div>
                    <div className="about-arrow-hover">
                        <div
                            className="about-section3-arrow"
                            style={{
                                transform: `translate(${mousePos.x * 0.9 * 20}px, ${mousePos.y * 0.9 * 20}px)`,
                            }}>
                            <a
                                href="https://www.linkedin.com/in/thea-c/"
                                target="_blank"
                                rel="noopener noreferrer"
                               >
                                <img
                                    src="/home/arrow.svg"
                                    alt="LinkedIn"
                                    className="about-arrow"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
