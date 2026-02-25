import { useRef, useEffect, useState } from "react";

export default function CatchingGame() {
    return (
        <div className="catching-game">
            <div className="game-title">
                <h2>Catch the Cat!</h2>
                <p>Catch the cats and save the day</p>
                <p>Start Game</p>
            </div>
            <div className="game-area">
                <div className="game-upper-area">
                    <div className="game-score">
                        <p className="score">Score:</p>
                    </div>
                    <div className="game-lives">
                        <p className="lives">Lives:</p>
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
                            className="player"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
