import React, { useEffect, useState } from "react"
import { GameType } from "../Constants/GameTypes"
import { QWERTY_LAYOUT } from "../Constants/KeyboardLayouts"
import Game, { GuessResult } from "../Games/Game"
import createGame, { GameConfig } from "../Games/GameFactory"
import Keyboard from "./Keyboard"

const DEFAULT_WORD_LENGTH = 5

const GameView = ({ gameType }: { gameType: GameType }) => {
    const [game, setGame] = useState<Game | undefined>()
    const [guesses, setGuesses] = useState<GuessResult[]>([])
    const [notPresentKeys, setNotPresentKeys] = useState<Set<string>>()
    const [outOfPositionKeys, setOutOfPositionKeys] = useState<Set<string>>()
    const [inPositionKeys, setInPositionKeys] = useState<Set<string>>()
    const [currentGuess, setCurrentGuess] = useState("")
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

    const keyPressed = (key: string) => {
        if (currentGuess.length < DEFAULT_WORD_LENGTH) {
            setCurrentGuess(currentGuess + key)
        }
    }

    return (
        <div className="game-view">
            <Keyboard
                layout={QWERTY_LAYOUT}
                notPresentKeys={notPresentKeys}
                outOfPositionKeys={outOfPositionKeys}
                inPositionKeys={inPositionKeys}
                keyPressed={keyPressed}
            />
        </div>
    )
}

export default GameView