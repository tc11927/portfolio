import { Link } from "react-router-dom";
import "./work.css";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import JigglyGrid from "../../components/grid";
import { useState, useRef, useEffect } from "react";

const galleryItems = [
    {
        id: 1,
        slug: "tandem",
        title: "Tandem",
        categories: ["Design", "UI/UX", "Motion Graphics", "Front-end"],
        tools: "Figma + Illustrator + After Effects + Visual Studio Code",
        image: "/work/tandemmockup.png",
        description:
            "A childcare web app aimed to create a world where instead of childcare feeling overwhelming and consistent, childcare is supportive, flexible, and reliable.",
    },
    {
        id: 2,
        slug: "bandit-breakout",
        title: "Bandit Breakout",
        categories: ["Design", "UI/UX", "Motion Graphics"],
        tools: "Figma + Illustrator + After Effects",
        image: "/work/banditmockup.png",
        description:
            "Designed for all gamers, Bandit Breakout blends stunning visual design with engaging gameplay, making gaming with friends more interactive and personalized.",
    },

    {
        id: 3,
        slug: "paramore",
        title: "Paramore E-magazine",
        categories: ["Design", "UI/UX", "Front-end"],
        tools: "Figma + Illustrator + Photoshop + Visual Studio Code",
        image: "/work/paramoremockup.png",
        description:
            "A childcare web app aimed to create a world where instead of childcare feeling overwhelming and consistent, childcare is supportive, flexible, and reliable.",
    },
    {
        id: 4,
        slug: "",
        title: "Under Construction!",
        categories: ["Design", "UI/UX", "Motion Graphics", "Front-end"],
        tools: "Check back soon!",
        image: "/work/Black.png",
        description:
            "This page is currently under construction! Come back later to see more of my work!",
    },
];

export default function Work() {
    const [activeFilter, setActiveFilter] = useState("all");

    const allCategories = [
        "all",
        "Design",
        "UI/UX",
        "Motion Graphics",
        "Front-end",
    ];

    const filteredItems =
        activeFilter === "all"
            ? galleryItems
            : galleryItems.filter((item) =>
                  item.categories.includes(activeFilter),
              );

    const headerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!headerRef.current) return;

            const rect = headerRef.current.getBoundingClientRect();

            const x =
                (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
            const y =
                (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const titleStrength = 0.04;
    const gridStrength = 0.018;

    return (
        <div className="work-container">
            <NavBar />

            <div className="work-content">
                <h1 className="work-title">
                    <div
                        className="header-wrapper"
                        ref={headerRef}>
                        <div
                            className="parallax-layer grid-layer"
                            style={{
                                transform: `translate(${mousePos.x * gridStrength * 100}px, ${mousePos.y * gridStrength * 100}px)`,
                            }}>
                            <JigglyGrid />
                        </div>

                        <img
                            src="/work/header-work.png"
                            className="header-title parallax-layer"
                            alt="Work header"
                            style={{
                                transform: `translate(${mousePos.x * titleStrength * 100}px, ${mousePos.y * titleStrength * 100}px)`,
                            }}
                        />
                    </div>
                </h1>

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

                <div className="line-work"></div>

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
            <Footer />
        </div>
    );
}
