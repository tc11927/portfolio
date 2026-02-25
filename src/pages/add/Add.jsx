import { useState } from "react";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import "./add.css";
import CatchingGame from "./game";

const artworks = [
    {
        id: 1,
        title: "Artwork 1",
        image: "/gallery/spiderman.jpg",
    },
    {
        id: 2,
        title: "Artwork 2",
        image: "/gallery/sunset.png",
    },
    {
        id: 3,
        title: "Artwork 3",
        image: "/gallery/woman.png",
    },
    {
        id: 4,
        title: "Artwork 4",
        image: "/gallery/sunset2.png",
    },
    {
        id: 5,
        title: "Artwork 5",
        image: "/gallery/cat.jpg",
    },
];

export default function Add() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <NavBar />

            <div className="gallery-page">
                <h1>Gallery</h1>

                <div className="gallery-grid">
                    {artworks.map((piece) => (
                        <img
                            key={piece.id}
                            src={piece.image}
                            alt={piece.title}
                            loading="lazy"
                            onClick={() => setSelectedImage(piece.image)}
                        />
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="modal"
                    onClick={() => setSelectedImage(null)}>
                    <img
                        src={selectedImage}
                        alt="Enlarged artwork"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
<CatchingGame />
            <Footer />
        </div>
    );
}
