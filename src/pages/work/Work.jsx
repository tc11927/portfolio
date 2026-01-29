import { Link } from "react-router-dom";
import "./work.css";
import { useState } from "react";
import NavBar from "../../components/navbar";

const galleryItems = [
    {
        id: 1,
        slug: "bandit-breakout",
        title: "Bandit Breakout",
        categories: ["Design", "UI/UX", "Motion Graphics"],
        tools: "Figma + Illustrator + After Effects",
        image: "/work/banditmockup.png",
        description:
            "Designed for all gamers, Bandit Breakout blends stunning visual design with engaging gameplay, making gaming with friends more interactive and personalized.",
    },
    {
        id: 2,
        slug: "popunk",
        title: "POPUNK",
        categories: ["Design"],
        tools: "Illustrator + Photoshop",
        image: "/work/canmockup copy.png",
        description:
            "A fun and bright energy drink designed to fuel and inspire the late night party goer in all of us",
    },
];

export default function Work() {
    const [activeFilter, setActiveFilter] = useState("all");

    const allCategories = [
        "all",
        ...new Set(galleryItems.flatMap((item) => item.categories)),
    ].sort((a, b) => {
        if (a === "all") return -1;
        if (b === "all") return 1;
        return a.localeCompare(b);
    });

    const filteredItems =
        activeFilter === "all"
            ? galleryItems
            : galleryItems.filter((item) =>
                  item.categories.includes(activeFilter),
              );

    return (
        <div className="work-container">
            <NavBar />
            <div className="work-content">
                <h1 className="work-title">Featured Work</h1>

                <div className="filter-buttons">
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeFilter === category ? "active" : ""}`}
                            data-category={category
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace("/", "-")}
                            onClick={() => setActiveFilter(category)}>
                            {category === "all" ? "All" : category}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filteredItems.map((item) => (
                        <Link
                            key={item.id}
                            to={`/work/${item.slug}`} 
                            className="gallery-item-link">
                            <div className="gallery-item">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="item-image"
                                    loading="lazy"
                                />
                                <div className="item-info">
                                    <div className="category-tags">
                                        {item.categories.map((cat) => (
                                            <span
                                                key={cat}
                                                className={`category-tag ${cat
                                                    .toLowerCase()
                                                    .replace(/\s+/g, "-")
                                                    .replace("/", "-")}`}>
                                                {cat}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="tools">{item.tools}</div>

                                    <p className="item-description">
                                        {item.description}
                                    </p>

                                    <h3 className="item-title">{item.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
