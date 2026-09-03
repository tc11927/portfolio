import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Sketchbook from "./pages/Sketchbook.jsx";
import Work from "./pages/Work.jsx";
import Paramore from "./pages/work/paramore/Paramore.jsx";
import Popunk from "./pages/work/popunk/Popunk.jsx";
import Tandem from "./pages/work/tandem/Tandem.jsx";
import BanditBreakout from "./pages/work/bandit/BanditBreakout.jsx";
import MoolahMate from "./pages/work/moolahmate/MoolahMate.jsx";
import PorkSoda from "./pages/work/porksoda/PorkSoda.jsx";
import TandemVideo from "./pages/work/tandemvideo/TandemVideo.jsx";
import Ayezerok from "./pages/work/ayezerok/Ayezerok.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sketchbook" element={<Sketchbook />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/tandem" element={<Tandem />} />
      <Route path="/work/bandit-breakout" element={<BanditBreakout />} />
      <Route path="/work/paramore" element={<Paramore />} />
      <Route path="/work/popunk" element={<Popunk />} />
      <Route path="/work/POPUNK" element={<Navigate to="/work/popunk" replace />} />
      <Route path="/work/moolahmate" element={<MoolahMate />} />
      <Route path="/work/porksoda" element={<PorkSoda />} />
      <Route path="/work/tandemvideo" element={<TandemVideo />} />
      <Route path="/work/ayezerok" element={<Ayezerok />} />
    </Routes>
  );
}
