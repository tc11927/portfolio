import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Contact from "./pages/contact/Contact";
import Work from "./pages/work/Work";
import BanditBreakout from "./pages/work/bandit/bandit-breakout";
import Popunk from "./pages/work/popunk/popunk";
import Tandem from "./pages/work/tandem/tandem";
import Paramore from "./pages/work/paramore/paramore";
import PorkSoda from "./pages/work/porksoda/porksoda";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="hi">
                                Hey! Thanks for coming to check out my page!
                            </div>
                            <div className="construction">
                                Before you continue onward, please note
                                everything is under construction!
                            </div>
                            <div className="my-portfolio">
                                <Link
                                    to="/home"
                                    className="home-app">
                                    Go To Thea's Portfolio!
                                </Link>
                            </div>
                        </>
                    }
                />

                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/add"
                    element={<Add />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/work"
                    element={<Work />}
                />

                <Route
                    path="/work/bandit-breakout"
                    element={<BanditBreakout />}
                />
                <Route
                    path="/work/popunk"
                    element={<Popunk />}
                />
                  <Route
                    path="/work/tandem"
                    element={<Tandem/>}
                />
                 <Route
                    path="/work/paramore"
                    element={<Paramore/>}
                />
                  <Route
                    path="/work/porksoda"
                    element={<PorkSoda/>}
                />
            </Routes>
        </>
    );
}

export default App;
