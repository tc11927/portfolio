import { useRef, useEffect, useState } from "react";
import "./game.css";
/*  don't mind my personal notes, I just need to remember what I'm writing/coding lol */

export default function CatchingGame() {
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [basketX, setBasketX] = useState(0);
    const [gameActive, setGameActive] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const gameAreaRef = useRef(null);

    /* Restarting the gameeee aka removing the kitties and resetting the score */
    const restart = () => {
        document
            .querySelectorAll(".falling-cats .falling-cat")
            .forEach((cat) => cat.remove());
        setScore(0);
        setLives(3);
        setGameOver(false);
    };

    /* Mouse Movement for "basket" aka the player aka me mini avatar :P */
    useEffect(() => {
        const area = gameAreaRef.current;
        if (!area) return;

        const handleMove = (e) => {
            const rect = area.getBoundingClientRect();
            let x = ((e.clientX - rect.left) / rect.width) * 100;
            x = Math.max(10, Math.min(90, x));
            setBasketX(x);
        };

        area.addEventListener("mousemove", handleMouseMove);
        return () => area.removeEventListener("mousemove", handleMouseMove);
    }, []);

    /* the falling kitties WAHHHH */
    useEffect(() => {
        if (!gameActive || gameOver || lives <= 0) return;

        const interval = setInterval(() => {
            const fallingCats = document.querySelection(".falling-cats");
            if (!fallingCats) return;

            const cat = document.createElement("img");
            cat.src = ""; /* put the source file here for the kitties */
            cat.className = "falling-cat";
            const left = 10 + Math.random() * 80;
            cat.style.left = `${left}%`;
            const speed =
                3 + Math.random() * 4; /* creates a random falling speed */
            cat.dataset.speed = speed.toString(); /* stores it uhhh yeyeyeeee*/
            cat.style.setProperty("--duration", `${speed}s`);
            fallingCats.appendChild(
                cat,
            ); /* pulls from the HTML for my kitties */

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
            }, speed * 1000);

            /* collisionn checking to see if you actually caught the cat */
            const checkInterval = setInterval(() => {
                if (!cat.parentElement || gameOver) {
                    clearInterval(checkInterval);
                    return;
                } /* checks if the catkitty is gone or if the game is over */
                /* checks the position of player and kitty to see if they overlap/hit */
                const catRect = cat.getBoundingClientRect();
                const player = document.querySelector(".player");
                if (!player) return;
                const playerRect = player.getBoundingClientRect();
                /* creates a bounding box and collision checking, which will be true if the bounding boxes touchy touch */
                if (
                    catRect.bottom > playerRect.top && // cat bottom edge is below player top
                    catRect.top < playerRect.bottom && // cat top edge is above player bottom
                    catRect.right > playerRect.left && // cat right edge is right of player left
                    catRect.left < playerRect.right // cat left edge is left of player right
                ) {
                    /* if the collision did happen and the player caught the kitty */
                    setScore((prev) => prev + 1); /*  increase score by uno */
                    cat.remove(); /* remove the kitty */
                    clearInterval(checkInterval); /* stops the loop */
                    clearTimeout(
                        missTimer,
                    ); /* stops the miss timer since you caught the kitty, so it won't take your life away */
                }
            }, 30);
        }, 1500); // Spawn every 1.5s

        return () => clearInterval(interval);
    }, [gameActive, gameOver, lives]);

    return (
        <div className="catching-game">
            <div className="game-title">
                <h2>Catch the Cat!</h2>
                <p>Catch the cats and save the day!</p>
                {!gameActive ? (
                    <button
                        className="start-btn"
                        onClick={() => setGameActive(true)}>
                        Start Game
                    </button>
                ) : null}
            </div>
            <div className="game-area">
                <div className="game-upper-area">
                    <div className="game-score">
                        <p className="score">Score:{score}</p>
                    </div>
                    <div className="game-lives">
                        <p className="lives">Lives:{lives}</p>
                    </div>
                </div>
                <div className="game-lower-area">
                    <div className="falling-cats">
                        <img
                            src="cat.png"
                            className="falling-cat"></img>
                        <img
                            src="cat.png"
                            className="falling-cat"></img>
                        <img
                            src="cat.png"
                            className="falling-cat"></img>
                        <img
                            src="cat.png"
                            className="falling-cat"></img>
                    </div>
                    <div className="player-area">
                        <img
                            src=""
                            className="player"
                            style={{ left: `${basketX}%` }}></img>
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
