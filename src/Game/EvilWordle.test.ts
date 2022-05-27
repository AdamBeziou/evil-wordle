import { EvilWordle } from './EvilWordle'

test('test single word', () => {
    const game = new EvilWordle(["tests"])
    const [guess, valid, won] = game.makeGuess(["t", "e", "s", "t", "s"])
    expect(won).toBeTruthy()
})

test('test multiple words', () => {
    const game = new EvilWordle(["tests", "words"])
    const [guess, valid, won] = game.makeGuess(["t", "e", "s", "t", "s"])
    expect(won).toBeFalsy()
    const [guess2, valid2, won2] = game.makeGuess(["t", "e", "s", "t", "s"])
    expect(guess?.letters.every((l, i) => l === guess.letters[i])).toBeTruthy()
    const [guess3, valid3, won3] = game.makeGuess(["w", "o", "r", "d", "s"])
    expect(won3).toBeTruthy()
})

test('test invalid guess', () => {
    const game = new EvilWordle(["tests", "words"])
    const [guess, valid, won] = game.makeGuess(["f", "a", "k", "e", "s"])
    expect(valid).toBeFalsy()
})

test('test uppercase guess', () => {
    const game = new EvilWordle(["tests", "words"])
    const [guess, valid, won] = game.makeGuess(["t", "e", "S", "T", "S"])
    expect(valid).toBeTruthy()
})
