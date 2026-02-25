import { useRef, useEffect, useState } from "react";
import "./game.css";

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
