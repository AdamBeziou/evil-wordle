import React, { useState } from "react"
import "./App.css";
import { QWERTY_LAYOUT } from "./Constants/KeyboardLayouts"
import Keyboard from "./Components/Keyboard/Keyboard"
import { LetterState } from "./Constants/LetterStates"
import GuessList from "./Components/Guesses/GuessList";

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
