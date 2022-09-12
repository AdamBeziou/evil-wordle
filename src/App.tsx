import React, { useState } from "react"
import "./App.css";
import { BACK_KEY, ENTER_KEY, QWERTY_LAYOUT } from "./Constants/KeyboardLayouts"
import Keyboard from "./Components/Keyboard/Keyboard"
import GuessList from "./Components/Guesses/GuessList";
import { Guess } from "./Game/EvilWordle";

const MAX_NUMBER_OF_GUESSES = 6
const GUESS_LENGTH = 5

function App() {
  const [guesses, setGuesses] = useState(new Array<Guess>())
  const [currentGuess, setCurrentGuess] = useState("")

  const keyPressed = (key: string) => {
    switch(key) {
        case BACK_KEY:
            setCurrentGuess(currentGuess.slice(0, -1))
            break
        case ENTER_KEY:
            break
        default:
            if (currentGuess.length < GUESS_LENGTH) {
                setCurrentGuess(currentGuess + key)
            }
        }
  }

  return (
    <div className="App">
        <header className="app-header">
          Evil Wordle
        </header>
        <GuessList
          numberOfGuesses={MAX_NUMBER_OF_GUESSES}
          guessLength={GUESS_LENGTH}
          guesses={guesses}
          currentGuess={currentGuess}
        />
        <Keyboard
          layout={QWERTY_LAYOUT}
          previousGuesses={guesses}
          keyPressed={keyPressed}
        />
    </div>
  );
}

export default App;
