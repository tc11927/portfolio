import { useRef, useEffect, useState } from "react";
import "./game.css";
/*  don't mind my personal notes, I just need to remember what I'm writing/coding lol */

export default function CatchingGame() {
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [basketX, setBasketX] = useState(50); 
    const [gameActive, setGameActive] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const gameAreaRef = useRef(null);
    const keysPressed = useRef(new Set()); // track which keys are held downnnn

    /* Restarting the gameeee aka removing the kitties and resetting the score */
    const restart = () => {
        document
            .querySelectorAll(".falling-cats .falling-cat")
            .forEach((cat) => cat.remove());
        setScore(0);
        setLives(3);
        setGameOver(false);
        setBasketX(50);
        setGameActive(true); // ← important: re-activate spawning
    };

    // Keyboard controls
    useEffect(() => {
        if (!gameActive || gameOver) return;

        const handleKeyDown = (e) => {
            if (e.repeat) return; // prevent holding key spamming
            if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
                keysPressed.current.add("left");
            }
            if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
                keysPressed.current.add("right");
            }
        };

        const handleKeyUp = (e) => {
            if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
                keysPressed.current.delete("left");
            }
            if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
                keysPressed.current.delete("right");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [gameActive, gameOver]);

    // mssssmooth keyboard movement loop
    useEffect(() => {
        if (!gameActive || gameOver) return;

        let animationFrame;
        const speed = 0.45; 

        const updatePosition = () => {
            setBasketX((prev) => {
                let newX = prev;
                if (keysPressed.current.has("left")) newX -= speed;
                if (keysPressed.current.has("right")) newX += speed;
                return Math.max(8, Math.min(92, newX));
            });
            animationFrame = requestAnimationFrame(updatePosition);
        };

        animationFrame = requestAnimationFrame(updatePosition);

        return () => cancelAnimationFrame(animationFrame);
    }, [gameActive, gameOver]);

    /* Mouse / Touch Movement for "basket" aka the player aka me mini avatar :P */
    useEffect(() => {
        const area = gameAreaRef.current;
        if (!area) return;

        const handleMove = (e) => {
            if (e.type === "touchmove") e.preventDefault();

            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const rect = area.getBoundingClientRect();
            let x = ((clientX - rect.left) / rect.width) * 100;
            x = Math.max(8, Math.min(92, x));
            setBasketX(x);
        };

        area.addEventListener("mousemove", handleMove);
        area.addEventListener("touchmove", handleMove, { passive: false });

        return () => {
            area.removeEventListener("mousemove", handleMove);
            area.removeEventListener("touchmove", handleMove);
        };
    }, []);

    /* the falling kitties WAHHHH */
    useEffect(() => {
        if (!gameActive || gameOver || lives <= 0) return;

        const interval = setInterval(() => {
            const fallingCats = document.querySelector(".falling-cats");
            if (!fallingCats) return;

            const cat = document.createElement("div");
            cat.className = "falling-cat";
            const left = 10 + Math.random() * 80;
            cat.style.left = `${left}%`;
            const speed =
                3 + Math.random() * 4; /* creates a random falling speed */
            cat.dataset.speed = speed.toString(); /* stores it uhhh yeyeyeeee*/
            cat.style.setProperty("--duration", `${speed}s`);
            cat.innerHTML = `<img src="/personalLogo.svg" alt="Falling cat" class="cat-img" />`;
            /* pulls from the HTML for my kitties */
            fallingCats.appendChild(cat);

            /* missing the kitties and not saving them */
            const missTimer = setTimeout(
                () => {
                    if (cat.parentElement) {
                        cat.remove();
                        setLives((prev) => {
                            const newLives =
                                prev - 1; /* take/decrease life by uno */
                            if (newLives <= 0) {
                                setGameOver(true);
                            } /* if below 0 it's over >:P */
                            return newLives;
                        });
                    }
                },
                speed * 1000 + 120,
            );

            /* collisionn checking to see if you actually caught the cat */
            const checkInterval = setInterval(() => {
                if (!cat.parentElement || gameOver) {
                    clearInterval(checkInterval);
                    clearTimeout(missTimer);
                    return;
                }
                const catRect = cat.getBoundingClientRect();
                const player = document.querySelector(".player");
                if (!player) return;
                const playerRect = player.getBoundingClientRect();

                if (
                    catRect.bottom > playerRect.top &&
                    catRect.top < playerRect.bottom &&
                    catRect.right > playerRect.left &&
                    catRect.left < playerRect.right
                ) {
                    setScore((prev) => prev + 1); /* increase score by uno */
                    cat.remove();
                    clearInterval(checkInterval);
                    clearTimeout(missTimer);
                }
            }, 26);
        }, 1400);

        return () => clearInterval(interval);
    }, [gameActive, gameOver, lives]);

    return (
        <div className={`catching-game ${gameActive ? "game-active" : ""}`}>
            <div className="game-title">
                <h2>Catch the Cat!</h2>
                <p>
                    Catch the cats and save the day! (← → or A/D)
                </p>
                {!gameActive && !gameOver ? (
                    <button
                        className="start-btn"
                        onClick={() => setGameActive(true)}>
                        Start Game
                    </button>
                ) : null}
            </div>
            <div
                className="game-area"
                ref={gameAreaRef}>
                <div className="game-upper-area">
                    <div className="game-score">
                        <p className="score">Score: {score}</p>
                    </div>
                    <div className="game-lives">
                        <p className="lives">Lives: {lives}</p>
                    </div>
                </div>
                <div className="game-lower-area">
                    <div className="falling-cats"></div>
                    <div className="player-area">
                        <div
                            className="player"
                            style={{ left: `${basketX}%` }}>
                            <img
                                src="/personalLogo.svg"
                                alt="Basket"
                                className="basket-img"
                            />
                        </div>
                    </div>
                    {gameOver && (
                        <div className="game-over-overlay">
                            <h3>Game Over! Better Luck Next Time!</h3>
                            <p>Cats Saved: {score}</p>
                            <button
                                className="restart-btn"
                                onClick={restart}>
                                Play Again
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
