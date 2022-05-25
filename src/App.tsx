import React, { useState } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import GameView from "./Components/GuessList";
import { QWERTY_LAYOUT } from "./Constants/KeyboardLayouts"
import Keyboard from "./Components/Keyboard"
import { LetterState } from "./Constants/LetterStates"
import LetterRow from "./Components/LetterRow";
import GuessList from "./Components/GuessList";

function App() {
  const [prevouslyGuessed, setPreviouslyGuessed] = useState(new Map<string, LetterState>())

    const keyPressed = (key: string) => {
        /*switch(key) {
            case "Backspace":
                setCurrentGuess(currentGuess.slice(0, -1))
                break
            case "Enter":
                makeGuess()
                break
            default:
                if (currentGuess.length < DEFAULT_WORD_LENGTH) {
                    setCurrentGuess(currentGuess + key)
                }
        }*/
    }

  return (
    <div className="App">
        <header className="app-header">
        Evil Wordle
        </header>
        <GuessList
          numberOfGuesses={5}
          guessLength={5}
          guesses={[]}
        />
        <Keyboard
          layout={QWERTY_LAYOUT}
          previouslyGuessed={prevouslyGuessed}
          keyPressed={keyPressed}
        />
    </div>
  );
}

export default App;
