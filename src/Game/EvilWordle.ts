import { createModuleResolutionCache } from "typescript";
import { LetterState } from "../Constants/LetterStates";

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

    constructor(wordList: string[]) {
        this.validWords = wordList
        this.possibleWords = wordList
    }

    bf(state: LetterState[], word: string[]): string[] {
        let potential = this.possibleWords.filter(w => {
            if (w === word.join("")) {
                return false
            }
            let m = new Map<string, number>();
            let c = new Map<string, number>();
            for (let i = 0; i < w.length; i++) {
                let j = m.get(w[i])
                if (j) {
                    m.set(w[i], j + 1)
                } else {
                    m.set(w[i], 1)
                }
            }
            for (let i = 0; i < word.length; i++) {
                if (state[i] !== LetterState.NOT_PRESENT) {
                    let j = c.get(w[i])
                    if (j) {
                        c.set(word[i], j + 1)
                    } else {
                        c.set(word[i], 1)
                    }
                }
            }
            for (let i = 0; i < state.length; i++) {
                if ((m.get(word[i]) || 0) < (c.get(word[i]) || 0)) {
                    return false
                }
                if (state[i] === LetterState.NOT_PRESENT && (m.get(word[i]) || 0) !== (c.get(word[i]) || 0)) {
                    return false
                }
                if (state[i] === LetterState.IN_POSITION && w[i] !== word[i]) {
                    return false
                }
                if (state[i] === LetterState.OUT_OF_POSITION && w[i] === word[i]) {
                    return false
                }
            }
            return true
        })
        return potential
    }

    chooseLetterStatesBruteForce(word: string[], state: LetterState[]): [LetterState[], string[]] {
        let max: string[] = [];
        let maxState: LetterState[] = [];
        for (let j = LetterState.NOT_PRESENT; j <= LetterState.IN_POSITION; j++) {
            let newState = [...state, j]
            let set: string[] = []
            if (word.length === newState.length) {
                set = this.bf(newState, word)
            } else {
                let [rnewState, rset] = this.chooseLetterStatesBruteForce(word, newState)
                set = rset
                newState = rnewState
            }
            if (set.length > max.length) {
                max = set
                maxState = newState
            }
        }
        return [maxState, max];
    }

    // Choose a state for each letter of the guess that maximizes the number of possible correct guesses
    chooseLetterStates(word: string[]): [LetterState[], string[]] {
        let [state, list] = this.chooseLetterStatesBruteForce(word, [])
        if (list.length === 0) {
            let s = []
            for (let i = 0; i < word.length; i++) {
                s.push(LetterState.IN_POSITION)
            }
            state = s
            list = [word.join("")]
        }
        return [state, list];
    }

    // Returns guess results and a boolean indicating whether the guess is valid
    makeGuess(guess: string[]): [Guess | null, boolean] {
        // Ensure that all guesses are lowercase
        guess = guess.map(letter => letter.toLowerCase())

        const [states, possibleWords] = this.chooseLetterStates(guess)
        this.possibleWords = possibleWords

        let guessObj: Guess = {
            letters: guess.map((l, i) => ({ key: l, state: states[i]}))
        }
        const correctGuess = states.every(state => state === LetterState.IN_POSITION)
        return [guessObj, correctGuess]
    }
}