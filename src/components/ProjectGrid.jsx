import { useState } from "react";
import { Link } from "react-router-dom";
import { projectFilters } from "../data/content.js";
import "./Projects.css";
import FadeInSection from "./FadeInSection.jsx";

function categorySlug(category) {
    return category.toLowerCase().replace(/\s+/g, "-").replace("/", "-");
}

export default function ProjectGrid({
    projects,
    id,
    label = "Projects",
    title = "",
    showFilters = false,
    showHint = false,
    headerAction = null,
    className = "",
    columns = 2,
}) {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) =>
                  project.categories.includes(activeFilter),
              );

    return (
        <section
            id={id}
            className={`projects ${className}`.trim()}>
            <FadeInSection delay={0}>
                <header className="projects__header">
                    <div>
                        <p className="projects__label">{label}</p>
                        <h2 className="projects__title">{title}</h2>
                    </div>
                    {(headerAction || showHint) && (
                        <div className="projects__header-actions">
                            {headerAction}
                        </div>
                    )}
                </header>
            </FadeInSection>

            <FadeInSection delay={0.5}>
                {showFilters && (
                    <div className="projects__filters">
                        {projectFilters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                className={`projects__filter-btn ${
                                    activeFilter === filter
                                        ? "projects__filter-btn--active"
                                        : ""
                                }`}
                                data-category={categorySlug(filter)}
                                onClick={() => setActiveFilter(filter)}>
                                {filter === "all" ? "All" : filter}
                            </button>
                        ))}
                    </div>
                )}
            </FadeInSection>

            <FadeInSection delay={1}>
                <div
                    className={`projects__grid ${
                        columns === 4 ? "projects__grid--4" : ""
                    }`.trim()}>
                    {filteredProjects.map((project) => (
                        <Link
                            key={project.id}
                            to={project.link}
                            className="projects__card"
                            style={{ "--card-color": project.color }}>
                            <div className="projects__card-visual">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="projects__card-image"
                                    />
                                ) : (
                                    <div className="projects__card-placeholder" />
                                )}

                                <div className="projects__overlay">
                                    <div className="projects__tags">
                                        {project.categories.map((category) => (
                                            <span
                                                key={category}
                                                className={`projects__tag projects__tag--${categorySlug(category)}`}>
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="projects__tools">
                                        {project.tools}
                                    </p>
                                    <p className="projects__description">
                                        {project.description}
                                    </p>
                                    <h3 className="projects__overlay-title">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
}
