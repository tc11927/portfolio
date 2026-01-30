// BanditBreakout.jsx
import "./BanditBreakout.css";
import NavBar from "../../../components/navbar";

export default function BanditBreakout() {
    return (
        <div className="banditpage-wrapper">
            <NavBar />

            <header className="bandithero">
                <div className="banditcontainer">
             
                    <h1 className="banditproject-title">Bandit Breakout</h1>
                    <p className="banditproject-roles">Roles: Design & Project Lead, UI/UX Designer</p>
                      <div className="bandittags">
                        <span className="bandittag1">Design</span>
                        <span className="bandittag2">UI/UX</span>
                        <span className="bandittag3">Motion Graphics</span>
                    </div>
                    <div className="bandithero-content">
                        <div className="bandithero-text">
                            <p>
                                Bandit Breakout is a multiplayer game created to
                                solve the problem of linear multiplayer
                                boardgames. Many multiplayer boardgames face the
                                struggle of being replayed until boredom, or
                                with becoming too predictable after a few too
                                many rounds.
                            </p>
                            <p className="bandithero-text2">
                                Designed for all gamers, Bandit Breakout blends
                                stunning visual design with engaging gameplay,
                                making gaming with friends more interactive and
                                personalized.
                            </p>
                        </div>

                        <div className="bandithero-image">
                            <img
                                src="/work/bandit/banditmock.png"
                                className="bandittitle-image"></img>
                        </div>
                    </div>
                </div>
            </header>

            <nav className="banditsection-nav">
                <div className="banditcontainer">
                  <p className="banditsection-title">View Section:</p>
                    <ul>
                        <li>
                            <a href="#problem">Problem</a>
                        </li>
                        <li>
                            <a href="#solution">Solution</a>
                        </li>
                        <li>
                            <a href="#research">Research</a>
                        </li>
                        <li>
                            <a href="#branding">Sketching, Character Design, & Backgrounds</a>
                        </li>
                        <li>
                            <a href="#animating">Animating</a>
                        </li>
                        <li>
                            <a href="#issue">Unexpected Issue</a>
                        </li>
                        <li>
                            <a href="#final-design">Final Design</a>
                        </li>
                         <li>
                            <a href="#Journey">The Journey and Impact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <section
                className="banditsection section-alt"
                id="problem">
                <div className="banditcontainer">
                    <h2>Problem</h2>
                    {/* ... rest unchanged */}
                </div>
            </section>

            <section
                className="banditsection"
                id="solution">
                <div className="banditcontainer">
                    <h2>Solution</h2>
                    {/* ... */}
                </div>
            </section>

            <section
                className="banditsection section-alt"
                id="research">
                <div className="banditcontainer">
                    <h2>Research</h2>
                    {/* ... */}
                </div>
            </section>

            <section
                className="banditsection"
                id="branding">
                <div className="banditcontainer">
                    <h2>Sketching, Character Design, & Backgrounds</h2>
                    {/* ... */}
                </div>
            </section>

            <section
                className="banditsection section-warning"
                id="animating">
                <div className="banditcontainer">
                    <h2>Animating</h2>
                    {/* ... */}
                </div>
            </section>

              <section
                className="banditsection section-warning"
                id="issue">
                <div className="banditcontainer">
                    <h2>Unexpected Issue</h2>
                    {/* ... */}
                </div>
            </section>

            <section
                className="banditsection"
                id="final-design">
                <div className="banditcontainer">
                    <h2>Final Design</h2>
                    <iframe
                        className="gameplay-video"
                        src="https://drive.google.com/file/d/12swoFYtPBM5Aux6h3PBawqkMnkNhqftX/preview"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Bandit Breakout – Version 2 Full Gameplay Demo"></iframe>
                </div>
            </section>


               <section
                className="banditsection section-warning"
                id="Journey">
                <div className="banditcontainer">
                    <h2>The Journey and Impact</h2>
                    {/* ... */}
                </div>
            </section>

            {/* Optional: add footer if you want */}
            {/* <footer className="footer">...</footer> */}
        </div>
    );
}
