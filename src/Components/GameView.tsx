import React, { useEffect, useState } from "react"
import { GameType } from "../Constants/GameTypes"
import { QWERTY_LAYOUT } from "../Constants/KeyboardLayouts"
import { LetterState } from "../Constants/LetterStates"
import Game, { GuessResult } from "../Games/Game"
import createGame, { GameConfig } from "../Games/GameFactory"
import Keyboard from "./Keyboard"

const DEFAULT_WORD_LENGTH = 5
const MAX_GUESSES = 6

const GameView = ({ gameType }: { gameType: GameType }) => {
    const [game, setGame] = useState<Game | undefined>()
    const [guesses, setGuesses] = useState<GuessResult[]>([])
    const [prevouslyGuessed, setPreviouslyGuessed] = useState(new Map<string, LetterState>())
    const [currentGuess, setCurrentGuess] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(currentGuess)

    useEffect(() => {
        const config: GameConfig = {
            maximumWordLength: DEFAULT_WORD_LENGTH,
            minimumWordLength: DEFAULT_WORD_LENGTH,
            gameType
        }
        const game = createGame(config)
        setGame(game)
    }, [gameType])

    const makeGuess = () => {
        if (currentIndex < MAX_GUESSES - 1) {
            setCurrentIndex(currentIndex + 1)
            const result = game?.makeGuess(currentGuess)

            if (result) {
                const newGuesses = guesses
                newGuesses.push(result)
                setGuesses(newGuesses)
                setCurrentGuess("")

                const newPreviouslyGuessed = prevouslyGuessed
                Array.from(result.guess).forEach((letter, i) => {
                    let state = LetterState.NOT_PRESENT
                    if (result.inPosition.includes(i)) {
                        state = LetterState.IN_POSITION
                    } else if (result.outOfPosition.includes(i)) {
                        state = LetterState.OUT_OF_POSITION
                    }

                    // If a key was in position in a previous guess, don't move to a lower priority state
                    if (newPreviouslyGuessed.get(letter) ?? -1 > state) {
                        return
                    }
                    newPreviouslyGuessed.set(letter, state)
                })
                setPreviouslyGuessed(newPreviouslyGuessed)
            }
        }
    }

    const keyPressed = (key: string) => {
        switch(key) {
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
        }
    }

    return (
        <div className="game-view">
            <Keyboard
                layout={QWERTY_LAYOUT}
                previouslyGuessed={prevouslyGuessed}
                keyPressed={keyPressed}
            />
        </div>
    )
}

export default GameView