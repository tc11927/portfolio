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
    const gameStartTimeRef = useRef(null); // used to ramp cat speed over time
    const prevGameActiveRef = useRef(false); // track inactive -> active transition

    /* Restarting the gameeee aka removing the kitties and resetting the score */
    const restart = () => {
        document
            .querySelectorAll(".falling-cats .falling-cat")
            .forEach((cat) => cat.remove());
        setScore(0);
        setLives(3);
        setGameOver(false);
        setBasketX(50);
        gameStartTimeRef.current = Date.now(); // reset difficulty ramp
        setGameActive(true); // ← important: re-activate spawning
    };

    // NOTE: This starts the "over time" ramp when the user first hits Start.
    useEffect(() => {
        if (!gameActive || gameOver) {
            prevGameActiveRef.current = gameActive;
            return;
        }

        if (!prevGameActiveRef.current) {
            gameStartTimeRef.current = Date.now();
        }
        prevGameActiveRef.current = gameActive;
    }, [gameActive, gameOver]);

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
            const minLeft = 5;
            const maxLeft = 95 - (90 / window.innerWidth * 100);
            const left = minLeft + Math.random() * (maxLeft - minLeft);
            cat.style.setProperty("--cat-left", `${left}%`);

            const elapsedSeconds = gameStartTimeRef.current
                ? (Date.now() - gameStartTimeRef.current) / 1000
                : 0;
            const difficulty = 1 + elapsedSeconds / 45; // bigger = faster ramp
            const maxDifficulty = 2.8; // cap the speedy so gameplay stays playable
            const difficultyCapped = Math.min(maxDifficulty, difficulty);

            const baseDurationSeconds = 3 + Math.random() * 4; // random range
            const durationSeconds = baseDurationSeconds / difficultyCapped;

            cat.dataset.speed = durationSeconds.toString(); // stores this cat's fall duration
            cat.style.setProperty("--duration", `${durationSeconds}s`);

            // Random slight rotation for each cat
            const angle = Math.random() * 40 - 20;
            cat.style.setProperty("--cat-rot", `${angle}deg`);

            cat.innerHTML = `<img src="gallery/fallingkitty.png" alt="Falling cat" class="falling-cat__image" />`;
            fallingCats.appendChild(cat);

            /* missing the kitties and not saving them */
            const missTimer = setTimeout(() => {
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
            }, durationSeconds * 1000 + 120);

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
            <div
                className="game-area"
                ref={gameAreaRef}>
                {/* Score/lives bar — visible only during active gameplay */}
                <div
                    className="game-upper-area"
                    style={{
                        opacity: gameActive && !gameOver ? 1 : 0,
                        pointerEvents:
                            gameActive && !gameOver ? "auto" : "none",
                    }}>
                    <div className="game-score">
                        <p className="score">
                            Score: <span className="score-value">{score}</span>
                        </p>
                    </div>
                    <div className="game-lives">
                        <p className="lives">
                            Lives: <span className="lives-value">{lives}</span>
                        </p>
                    </div>
                </div>

                <div className="game-lower-area">
                    {/* Falling cats & player — hidden during game over */}
                    <div
                        className="falling-cats"
                        style={{
                            opacity: gameOver ? 0 : 1,
                            pointerEvents: gameOver ? "none" : "auto",
                        }}></div>

                    <div
                        className="player-area"
                        style={{
                            opacity: gameOver ? 0 : 1,
                            pointerEvents: gameOver ? "none" : "auto",
                        }}>
                        <div
                            className="player"
                            style={{ "--left": `${basketX}%` }}>
                            <img
                                src="/gallery/carry.svg"
                                alt="Basket"
                                className="player__basket"
                            />
                        </div>
                    </div>

                    {/* Start screen overlay */}
                    {!gameActive && !gameOver && (
                        <div className="start-screen">
                            <img
                                src="/gallery/carry.svg"
                                alt="Basket"
                                className="start-screen__basket"
                            />
                            <h1 className="start-screen__title">Save the Cats!</h1>
                            <p className="start-screen__instructions">
                                Catch falling cats before they hit the ground!
                            </p>
                            <button
                                className="start-screen__btn"
                                onClick={() => setGameActive(true)}>
                                Start
                            </button>
                        </div>
                    )}

                    {/* Game over overlay */}
                    {gameOver && (
                        <div className="game-over-overlay">
                            <img
                                src="gallery/fallingkitty.png"
                                alt="Cat"
                                className="game-over-overlay__cat"
                            />
                            <h3 className="game-over-overlay__title">
                                Better Luck Next Time!
                            </h3>
                            <p className="game-over-overlay__score">
                                Cats Saved: {score}
                            </p>
                            <button
                                className="game-over-overlay__btn"
                                onClick={restart}>
                                Play Again
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Title + instructions — only during active gameplay */}
            {gameActive && !gameOver && (
                <div className="game-title">
                    <h2 className="game-title__text">Catch the Cat!</h2>
                    <p className="game-title__instructions">
                        Catch the cats and save the day! (Move the Mouse, use
                        the arrow keys, or use A/D to move!)
                    </p>
                </div>
            )}
        </div>
    );
}