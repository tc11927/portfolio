import { useEffect } from "react";
import SiteNav from "../components/SiteNav.jsx";
import ProjectGrid from "../components/ProjectGrid.jsx";
import { allProjects } from "../data/content.js";
import Contact from "../components/Contact.jsx";
import "./Work.css";

export default function Work() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="work-page">
            <SiteNav active="projects" />
            <ProjectGrid
                projects={allProjects}
                label="A collection of Graphic Design, Motion Graphics, Front-End Experience, and UI/UX Design"
                title="Projects & Work"
                showFilters
                showHint
                columns={4}
            />
           <Contact />
        </div>
    );
}
