import React from "react";
import logo from "./logo.svg";
import "./App.css";
import words from "./words.js";
import Guess from "./Guess";
import { getWord } from './Util'

const MAX_GUESSES = 5;
const WORD_LENGTH = 5;
let currentGuessIndex = 0;

const word = getWord(WORD_LENGTH, words);
const game = new Game(MAX_GUESSES, word);

document.addEventListener("keydown", game.keyPressed);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>WORDLE CLONE</p>
        {game.guesses.map((guess) => (
          <Guess
            guess={guess}
            correctWord={game.correctWord}
            showComparison={false}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
