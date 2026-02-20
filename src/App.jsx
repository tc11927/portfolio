import "./App.css";
import { Routes, Route } from "react-router-dom"; 
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
import TandemVideo from "./pages/work/tandemvideo/tandemvideo";
import MoolahMate from "./pages/work/moolahmate/moolahmate";
import Ayezerok from "./pages/work/ayezerok/ayezerok";
import TopScroll from "./components/TopScroll";

function App() {
    return (
        <>
            <TopScroll />
            

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
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
                    element={<Tandem />}
                />
                <Route
                    path="/work/paramore"
                    element={<Paramore />}
                />
                <Route
                    path="/work/porksoda"
                    element={<PorkSoda />}
                />
                <Route
                    path="/work/tandemvideo"
                    element={<TandemVideo />}
                />
                <Route
                    path="/work/moolahmate"
                    element={<MoolahMate />}
                />
                <Route
                    path="/work/ayezerok"
                    element={<Ayezerok />}
                />
            </Routes>
        </>
    );
}

export default App;
