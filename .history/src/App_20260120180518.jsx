import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Contact from "./pages/contact/Contact";
import Work from "./pages/work/Work";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <img
                                src="/home/portfolio.png"
                                className="placeholder"
                            />
                            <div className="hi">
                                Hey! Thanks for checking out my page!
                            </div>
                            <div className="construction">
                                Under Construction! Check back later! ;D
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
            </Routes>
        </>
    );
}

export default App;
