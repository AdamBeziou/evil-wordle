import './Keyboard.css'
import { BACK_KEY, ENTER_KEY } from '../../Constants/KeyboardLayouts'
import { getBackgroundColorForLetter, LetterState } from '../../Constants/LetterStates'

interface KeyboardProps {
    layout: string[][],
    previouslyGuessed: Map<string, LetterState> | undefined,
    keyPressed: (key: string) => void
}

const Keyboard = ({
    layout,
    previouslyGuessed,
    keyPressed
}: KeyboardProps) => {
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
                            const state = previouslyGuessed?.get(letter.toUpperCase())
                            return (
                                <button
                                    onClick={() => keyPressed(letter)}
                                    className="keyboard-letter"
                                    style={{ backgroundColor: getBackgroundColorForLetter(state) }}
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