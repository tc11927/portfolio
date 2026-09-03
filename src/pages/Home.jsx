import { useEffect } from "react";
import SiteNav from "../components/SiteNav.jsx";
import Hero from "../components/Hero.jsx";
import FeaturedWork from "../components/FeaturedWork.jsx";


import Contact from "../components/Contact.jsx";

function scrollToHash() {
    const hash = window.location.hash.slice(1);
    if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
}

export default function Home() {
    useEffect(() => {
        const timer = setTimeout(scrollToHash, 50);
        window.addEventListener("hashchange", scrollToHash);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("hashchange", scrollToHash);
        };
    }, []);

    return (
        <main>
            <SiteNav active="home" />
            <Hero />
            <FeaturedWork />

            <Contact />
        </main>
    );
}
