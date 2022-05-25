import { LetterState } from "../Constants/LetterStates";

export interface Letter {
    key: string;
    state: LetterState;
}

export interface Guess {
    letters: Letter[];
}

export class EvilWordle {
    numberOfGuesses: number
    guesses: Guess[]
    won: boolean

    constructor(numberOfGuesses: number) {
        this.numberOfGuesses = numberOfGuesses
        this.won = false
        this.guesses = []
    }
    makeGuess(guess: string[]): Guess {
        let guessObj: Guess = {
            letters: guess.map(l => ({ key: l, state: LetterState.NOT_PRESENT}))
        }
        return guessObj
    }
    getNumberOfGuesses(): number {
        return this.numberOfGuesses
    }
    getGuesses(): Guess[] {
        return this.guesses
    }
    isWon(): boolean {
        return this.won
    }
}