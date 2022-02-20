import React, { useEffect, useState } from "react"
import Game from "../Games/Game"
import createGame, { GameConfig, GameType } from "../Games/GameFactory"

const DEFAULT_WORD_LENGTH = 5

const GameView = ({ gameType }: { gameType: GameType }) => {
    const [game, setGame] = useState<Game | undefined>()
    useEffect(() => {
        const config: GameConfig = {
            maximumWordLength: DEFAULT_WORD_LENGTH,
            minimumWordLength: DEFAULT_WORD_LENGTH,
            gameType
        }
        const game = createGame(config)
        setGame(game)
    }, [gameType])

    return (
        <p>Test</p>
    )
}

export default GameView