import { LetterState } from "../Constants/LetterStates";
import { getWordList } from "./WordGenerator";

export interface Letter {
    key: string;
    state: LetterState;
}

export interface Guess {
    letters: Letter[];
}

export class EvilWordle {
    validWords: string[] // List of all valid guesses
    possibleWords: string[] // List of all words that could still possible be the chosen word
    numberOfGuesses: number
    wordLength: number
    guesses: Guess[]
    won: boolean

    constructor(numberOfGuesses: number, wordLength: number) {
        this.numberOfGuesses = numberOfGuesses
        this.wordLength = wordLength
        this.won = false
        this.guesses = []

        this.validWords = getWordList(wordLength, wordLength)
        this.possibleWords = this.validWords
    }

    // Choose a state for each letter of the guess that maximizes the number of possible correct guesses
    chooseLetterStates(word: string[]): [LetterState[], string[]] {
        if (word.length === 1) {

        } else {

        }
        return [[], []]
    }

    // Returns guess results and a boolean indicating whether the guess is valid
    makeGuess(guess: string[]): [Guess | null, boolean] {
        // Ensure that all guesses are lowercase
        guess = guess.map(letter => letter.toLowerCase())
        let guessStr = guess.join()

        // Guess must be present in the list of possible words
        if (!this.validWords.some(word => word === guessStr)) {
            return [null, false]
        }

        const [states, possibleWords] = this.chooseLetterStates(guess)
        this.possibleWords = possibleWords

        let guessObj: Guess = {
            letters: guess.map((l, i) => ({ key: l, state: states[i]}))
        }
        return [guessObj, true]
    }

    getNumberOfGuesses(): number {
        return this.numberOfGuesses
    }
    getWordLength(): number {
        return this.wordLength
    }
    getGuesses(): Guess[] {
        return this.guesses
    }
    isWon(): boolean {
        return this.won
    }
}