import { useState } from "react";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import "./add.css";

const artworks = [
    {
        id: 1,
        title: "Artwork 1",
        image: "https://m.media-amazon.com/images/I/8148UrepONL._AC_UF894,1000_QL80_.jpg",
    },
    {
        id: 2,
        title: "Artwork 2",
        image: "https://m.media-amazon.com/images/I/61ihhbaXi8L._AC_UF894,1000_QL80_.jpg",
    },
    {
        id: 3,
        title: "Artwork 3",
        image: "https://assets.bigcartel.com/product_images/233962748/Surrender-Original-Abstract-Painting-Rosemary-Pierce-Modern-Art-3.jpg",
    },
    {
        id: 4,
        title: "Artwork 4",
        image: "https://m.media-amazon.com/images/I/51F14mZFYoL._AC_UF894,1000_QL80_.jpg",
    },
    {
        id: 5,
        title: "Artwork 5",
        image: "https://osnatfineart.com/artworks/full/painting-6236-1-contemporary-colorful-abstract-art-on-canvas-original-big-textured-modern-abstract-painting-for-office-and-living-room.webp",
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

            <Footer />
        </div>
    );
}
