import { LetterState } from '../Constants/LetterStates'
import { EvilWordle } from './EvilWordle'

test('test single word', () => {
    const game = new EvilWordle(["tests"])
    const [guess, won] = game.makeGuess(["t", "e", "s", "t", "s"])
    expect(won).toBeTruthy()
})

test('test multiple words', () => {
    const game = new EvilWordle(["tests", "words"])
    const [guess, won] = game.makeGuess(["t", "e", "s", "t", "s"])
    expect(won).toBeFalsy()
    const [guess2, won2] = game.makeGuess(["t", "e", "s", "t", "s"])
    expect(guess?.letters.every((l, i) => l === guess.letters[i])).toBeTruthy()
    const [guess3, won3] = game.makeGuess(["w", "o", "r", "d", "s"])
    expect(won3).toBeTruthy()
})

test('test IP ~= OP issue', () => {
    const game = new EvilWordle(["ac", "bc", "be", "fb"])
    const [guess, won] = game.makeGuess(["b", "d"])
    expect(won).toBeFalsy()
    if (guess != null) {
        expect(guess.letters[0].state).toBe(LetterState.IN_POSITION)
    }
})

test('test dupe letter in correct word', () => {
    const game = new EvilWordle(["abbey"])
    const [guess, won] = game.makeGuess(["a", "c", "b", "e", "y"])
    expect(won).toBeFalsy()
    if (guess != null) {
        expect(guess.letters[2].state).toBe(LetterState.IN_POSITION)
    }
    const [guess2, won2] = game.makeGuess(["a", "c", "b", "e", "b"])
    expect(won2).toBeFalsy()
    if (guess2 != null) {
        expect(guess2.letters[2].state).toBe(LetterState.IN_POSITION)
        expect(guess2.letters[4].state).toBe(LetterState.OUT_OF_POSITION)
    }
    const [guess3, won3] = game.makeGuess(["a", "b", "b", "e", "y"])
    expect(won3).toBeTruthy()
})

test('test dupe letter in guess word', () => {
    const game = new EvilWordle(["acbey"])
    const [guess, won] = game.makeGuess(["a", "b", "b", "e", "y"])
    expect(won).toBeFalsy()
    if (guess != null) {
        expect(guess.letters[2].state).toBe(LetterState.IN_POSITION)
        expect(guess.letters[1].state).toBe(LetterState.NOT_PRESENT)
    }
})

test('test uppercase guess', () => {
    const game = new EvilWordle(["tests"])
    const [guess, won] = game.makeGuess(["t", "e", "S", "T", "S"])
    expect(won).toBeTruthy()
})

test('test letter states', () => {
    const game = new EvilWordle(["ttttt", "eeeee"])
    const [guess, won] = game.makeGuess(["t", "t", "t", "t", "t"])
    expect(guess).toBeDefined()
    if (guess != null) {
        expect(guess.letters.every(l => l.state === LetterState.NOT_PRESENT)).toBeTruthy()
    }

    const gameSharedLetter = new EvilWordle(["tttts", "eeees"])
    const [guess2, won2] = gameSharedLetter.makeGuess(["t", "t", "t", "s", "t"])
    expect(guess2).toBeDefined()
    if (guess2 != null) {
        expect(guess2.letters.length).toBe(5)
        expect(guess2.letters?.[3]?.state).toBe(LetterState.OUT_OF_POSITION)
        expect(guess2.letters?.[1]?.state).toBe(LetterState.NOT_PRESENT)
    }
    expect(gameSharedLetter.possibleWords.length).toBeDefined()
    const [guess3, won3] = gameSharedLetter.makeGuess(["t", "t", "t", "t", "s"])
    expect(guess3).toBeDefined()
    if (guess3 != null) {
        expect(guess3.letters.length).toBe(5)
        expect(guess3.letters?.[4]?.state).toBe(LetterState.IN_POSITION)
        expect(guess3.letters?.[1]?.state).toBe(LetterState.NOT_PRESENT)
    }
    const [guess4, won4] = gameSharedLetter.makeGuess(["t", "t", "t", "s", "s"])
    expect(guess4).toBeDefined()
    if (guess4 != null) {
        expect(guess4.letters.length).toBe(5)
        expect(guess4.letters?.[4]?.state).toBe(LetterState.IN_POSITION)
        expect(guess4.letters?.[3]?.state).toBe(LetterState.NOT_PRESENT)
    }
})
