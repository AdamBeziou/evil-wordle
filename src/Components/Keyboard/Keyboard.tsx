import './Keyboard.css'
import { BACK_KEY, ENTER_KEY } from '../../Constants/KeyboardLayouts'
import { getBackgroundColorForLetter, getBorderColorForLetter, getTextColorForLetter, LetterState } from '../../Constants/LetterStates'
import { Guess } from '../../Game/EvilWordle'

interface KeyboardProps {
    layout: string[][],
    previousGuesses: Array<Guess> | undefined,
    keyPressed: (key: string) => void
}

const Keyboard = ({
    layout,
    previousGuesses,
    keyPressed
}: KeyboardProps) => {
    const letterStates = new Map<string, LetterState>()
    previousGuesses?.forEach(guess => {
        guess.letters.forEach(letter => {
            letterStates.set(letter.key, letter.state)
        })
    })

    return (
        <div className="keyboard">
            {layout.map((row, i) =>
                <div className="keyboard-letter-row">
                    {row.map(letter => {
                            if (letter === BACK_KEY) {
                                return (
                                    <button className="big-keyboard-letter filled-letter" onClick={() => keyPressed(letter)}>
                                        BACK
                                    </button>
                                )
                            }
                            if (letter === ENTER_KEY) {
                                return (
                                    <button className="big-keyboard-letter filled-letter" onClick={() => keyPressed(letter)}>
                                        ENTER
                                    </button>
                                )
                            }
                            const state = letterStates?.get(letter.toUpperCase())
                            return (
                                <button
                                    onClick={() => keyPressed(letter)}
                                    className="keyboard-letter"
                                    style={state && {
                                        backgroundColor: getBackgroundColorForLetter(state),
                                        borderColor: getBorderColorForLetter(state),
                                        color: getTextColorForLetter(state),
                                    }}
                                >
                                    {letter}
                                </button>
                            )
                        }
                    )}
                </div>
            )}
        </div>
    )
}

export default Keyboard