// Result of a guess
export class GuessResult {
    guess: string = ''
    correct: boolean = false
    outOfPosition: number[] = [] // Indices of letters that exist in correct word, but are out of position
    inPosition: number[] = [] // Indices of letters in the correct position
}

// Games check the correctness of guesses
abstract class Game {
    abstract makeGuess(word: string): GuessResult
}

export default Game