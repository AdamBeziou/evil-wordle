import { GameType } from "../Constants/GameTypes";
import { getWord } from "../Words/WordGenerator";
import Game from "./Game";
import VanillaGame from "./VanillaGame";

// Options used to select and create a new game
export interface GameConfig {
    gameType: GameType
    minimumWordLength: number
    maximumWordLength: number
}

// Creates a new game using config options
const createGame = (gameConfig: GameConfig): Game => {
    switch (gameConfig.gameType) {
        case GameType.VANILLA:
            const word = getWord(gameConfig.minimumWordLength, gameConfig.maximumWordLength)
            return new VanillaGame(word)
        default:
            throw 'Unsupported Game Type'
    }
}

export default createGame