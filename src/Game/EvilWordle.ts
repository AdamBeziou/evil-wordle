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

    chooseCharacterState(character: string, position: number, wordList: string[]): [LetterState, string[]] {
        // Set of all words that contain the letter in the proper
        // position is a subset of all words that just contain the letter
        let inPosition = true
        let presentSet: string[] = []
        let notPresentSet = wordList.filter(possibleWord => {
            if (possibleWord.indexOf(character) === -1) {
                    return true
            } else {
                inPosition = inPosition && possibleWord[position] === character
                presentSet.push(possibleWord)
                return false
            }
        })
        if (presentSet.length > notPresentSet.length) {
            return [inPosition ? LetterState.IN_POSITION : LetterState.OUT_OF_POSITION, presentSet]
        }
        return [LetterState.NOT_PRESENT, notPresentSet]
    }

    // Choose a state for each letter of the guess that maximizes the number of possible correct guesses
    chooseLetterStates(word: string[]): [LetterState[], string[]] {
        if (word.length === 1) {
            const [state, wordList] = this.chooseCharacterState(word[0], 0, this.possibleWords)
            return [[state], wordList]
        }
        const [recursiveStates, recursiveWordList] = this.chooseLetterStates(word.slice(0, word.length - 1))
        const [state, wordList] = this.chooseCharacterState(word[word.length - 1], word.length - 1, recursiveWordList)
        recursiveStates.push(state)
        return [recursiveStates, wordList]
    }

    // Returns guess results and a boolean indicating whether the guess is valid
    makeGuess(guess: string[]): [Guess | null, boolean, boolean] {
        // Ensure that all guesses are lowercase
        guess = guess.map(letter => letter.toLowerCase())
        let guessStr = guess.join("")
        console.log(guessStr)

        // Guess must be present in the list of possible words
        if (!this.validWords.some(word => word === guessStr)) {
            return [null, false, false]
        }

        const [states, possibleWords] = this.chooseLetterStates(guess)
        this.possibleWords = possibleWords

        let guessObj: Guess = {
            letters: guess.map((l, i) => ({ key: l, state: states[i]}))
        }
        const correctGuess = states.every(state => state === LetterState.IN_POSITION)
        return [guessObj, true, correctGuess]
    }
}