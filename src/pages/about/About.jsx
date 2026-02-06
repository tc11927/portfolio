import NavBar from "../../components/navbar";
import "./about.css";
import Footer from "../../components/footer";

export default function About() {
    return (
        <div>
            <NavBar />
            <div className="fullaboutsection">
                <div className="about-header">
                    <img
                        src="/about/bannerrrrr.gif"
                        className="header-about"
                        alt="Banner"
                    />
                </div>
                <div className="about-row">
                    <div className="about-column about-text-column">
                        <h1 className="about-me-h1">Hi, I'm Thea!</h1>
                        <div className="about-me-buttons">
                            <p className="graphic-design-about">
                                Graphic Design
                            </p>
                            <p className="UIUX-design-about">UI/UX Design</p>
                            <p className="motiongraphics-design-about">
                                Motion Graphics
                            </p>
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
                            </div>
                        </div>
                    </div>
                    <div className="about-column about-image-column">
                        <section className="me-photo-section">
                            <img
                                src="/about/placeholderimage.png"
                                className="me-photo-about"
                                alt="Thea"
                            />
                        </section>
                    </div>
                </div>

                <div className="about-row reverse-on-desktop">
                    <div className="about-column about-text-column">
                        <div className="about-info">
                            <div className="about-info-two">
                                <p>
                                    I’ve always had a passion for art, starting
                                    with drawing and animating. Over time, I
                                    found myself enjoying graphic design and
                                    technology, as it allowed me to blend my
                                    creativity and desire to make meaningful
                                    products. Now, I strive to design in a way
                                    that sparks curiosity and connection.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="about-column about-image-column">
                        <section className="me-photo-section">
                            <img
                                src="/about/placeholderimage.png"
                                className="me-photo-about"
                                alt="Thea"
                            />
                        </section>
                    </div>
                </div>

                <div className="about-row">
                    <div className="about-column about-text-column">
                        <div className="about-info">
                            <div className="about-info-three">
                                <p>
                                    When I’m not designing, you’ll probably find
                                    me drawing, exploring nature, or listening
                                    to music. My desire to search and create
                                    drive my work, and I believe that in no
                                    matter what I do, creativity and care is
                                    key.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="about-column about-image-column">
                        <section className="me-photo-section">
                            <img
                                src="/about/placeholderimage.png"
                                className="me-photo-about"
                                alt="Thea"
                            />
                        </section>
                    </div>
                </div>

                <div className="about-row reverse-on-desktop">
                    <div className="about-column about-text-column">
                        <div className="about-info">
                            <div className="about-info-four">
                                <p>
                                    I’d love to collaborate and connect to
                                    create some amazing experiences!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="about-column about-image-column">
                        <section className="me-photo-section">
                            <img
                                src="/about/placeholderimage.png"
                                className="me-photo-about"
                                alt="Thea"
                            />
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
