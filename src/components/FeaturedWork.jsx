import { Link } from "react-router-dom";
import { featuredProjects } from "../data/content.js";
import ProjectGrid from "./ProjectGrid.jsx";

export default function FeaturedWork() {
    return (
        <ProjectGrid
            id="featured-work"
            className="projects--featured"
            projects={featuredProjects}
            label="Hover to Learn More"
            title="Featured Works"
            showHint
            headerAction={
                <Link to="/work" className="projects__view-all">
                    View all projects →
                </Link>
            }
        />
    );
}
