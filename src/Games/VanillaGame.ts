import Game, { GuessResult } from "./Game"

// Basic Wordle game
class VanillaGame extends Game {
    correctWord: string
    constructor(correctWord: string) {
        super()
        this.correctWord = correctWord.toLocaleLowerCase()
        console.log(this.correctWord)
    }

    // Checks guess against singular correct word
    makeGuess(guess: string): GuessResult {
        const lowercaseGuess = guess.toLocaleLowerCase()
        const correct: boolean = guess === this.correctWord
        const outOfPosition: number[] = []
        const inPosition: number[] = []
        Array.from(lowercaseGuess).forEach((letter, i) => {
            if (this.correctWord[i] === letter) {
              inPosition.push(i)
            } else if (this.correctWord.includes(letter)) {
              outOfPosition.push(i)
            }
        })
        return {
            guess,
            correct,
            outOfPosition,
            inPosition
        }
    }
}

export default VanillaGame