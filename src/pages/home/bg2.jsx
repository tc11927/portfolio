import { useEffect, useRef } from "react";
import "./bg2.css";

export default function Bg2() {
    const containerRef = useRef(null);

    useEffect(() => {
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        return; // ← exit early — no event listener
    }
        const handleMouseMove = (e) => {
            const layers = document.querySelectorAll(".parallax");

            layers.forEach((layer) => {
                const speed = layer.getAttribute("data-speed");

                const rect = layer.getBoundingClientRect();
                const layerX = rect.left + rect.width / 2;
                const layerY = rect.top + rect.height / 2;

                const dx = e.clientX - layerX;
                const dy = e.clientY - layerY;

                const distance = Math.sqrt(dx * dx + dy * dy);
                const intensity = Math.max(0, 1 - distance / 600);

                const moveX = dx * speed * intensity * 0.05;
                const moveY = dy * speed * intensity * 0.05;

                layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="section2-bg"
            ref={containerRef}>
            <img
                className="parallax bottom-left2"
                data-speed="1.5"
                src="/home/bottombg/bottom left 2.svg"
            />
            <img
                className="parallax bottom-right2"
                data-speed="2.3"
                src="/home/bottombg/bottom right 2.svg"
            />
            <img
                className="parallax top-left2"
                data-speed="1.8"
                src="/home/bottombg/top left 2.svg"
            />
            <img
                className="parallax top-middle2"
                data-speed="1"
                src="/home/bottomgbg/top middle 2.svg"
            />
            <img
                className="parallax top-right2"
                data-speed="2"
                src="/home/bottombg/top right 2.svg"
            />
        </div>
    );
}
