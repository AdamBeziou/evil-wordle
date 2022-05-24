import React, { useState } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import GameView from "./Components/GameView";
import { QWERTY_LAYOUT } from "./Constants/KeyboardLayouts"
import Keyboard from "./Components/Keyboard"
import { LetterState } from "./Constants/LetterStates"
import LetterRow from "./Components/LetterRow";

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
        <LetterRow length={5} letters={['T', 'E', 'S', 'T']} letterStates={[]} />
        <Keyboard
          layout={QWERTY_LAYOUT}
          previouslyGuessed={prevouslyGuessed}
          keyPressed={keyPressed}
        />
    </div>
  );
}

export default App;
