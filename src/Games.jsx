import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

function Games() {
  const location = useLocation();
  const { player1 = "Player 1", player2 = "Player 2" } = location.state || {};

  const [scores, setScores] = useState([0, 0]);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [dice, setDice] = useState(null);

  const init = () => {
    setScores([0, 0]);
    setCurrentScore(0);
    setActivePlayer(0);
    setPlaying(true);
    setDice(null);
  };

  const switchPlayer = () => {
    setCurrentScore(0);
    setActivePlayer(activePlayer === 0 ? 1 : 0);
  };

  const rollDice = () => {
    if (playing) {
      const diceRoll = Math.trunc(Math.random() * 6) + 1;
      setDice(diceRoll);

      if (diceRoll !== 1) {
        setCurrentScore(currentScore + diceRoll);
      } else {
        switchPlayer();
      }
    }
  };

  const holdScore = () => {
    if (playing) {
      const newScores = [...scores];
      newScores[activePlayer] += currentScore;
      setScores(newScores);

      if (newScores[activePlayer] >= 100) {
        setPlaying(false);
        setDice(null);
      } else {
        switchPlayer();
      }
    }
  };

  const isWinner = (player) => !playing && activePlayer === player;

  return (
    <main>
      <section
        className={`player player--0 ${
          activePlayer === 0 ? "player--active" : ""
        } ${isWinner(0) ? "player--winner" : ""}`}
      >
        <h2 className="name" id="name--0">
          {player1}
        </h2>
        <p className="score" id="score--0">
          {scores[0]}
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">
            {activePlayer === 0 ? currentScore : 0}
          </p>
        </div>
      </section>

      <section
        className={`player player--1 ${
          activePlayer === 1 ? "player--active" : ""
        } ${isWinner(1) ? "player--winner" : ""}`}
      >
        <h2 className="name" id="name--1">
          {player2}
        </h2>
        <p className="score" id="score--1">
          {scores[1]}
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--1">
            {activePlayer === 1 ? currentScore : 0}
          </p>
        </div>
      </section>

      {/* {dice && <img src={`/dice-${dice}.png`} alt="Playing dice" className="dice" />} */}
      <img
        src={`src/assets/dice-${dice || 5}.png`}
        alt="Playing dice"
        className={`dice ${dice ? "" : "hidden"}`}
      />

      <button className="btn btn--new" onClick={init}>
        🔄 New game
      </button>
      <button className="btn btn--roll" onClick={rollDice} disabled={!playing}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={holdScore} disabled={!playing}>
        📥 Hold
      </button>
    </main>
  );
}

export default Games;
