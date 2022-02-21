import React from 'react'
import { LetterState } from '../Constants/LetterStates'

const Keyboard = ({
    layout,
    previouslyGuessed,
    keyPressed
}: {
    layout: string[][],
    previouslyGuessed: Map<string, LetterState> | undefined,
    keyPressed: (key: string) => void
}) => {
    const previouslyGuessedUppercase = new Map()
    previouslyGuessed?.forEach((value, key) => {
        previouslyGuessedUppercase.set(key.toUpperCase(), value)
    })

    return (
        <div className="keyboard">
            {layout.map((row, i) =>
                <div className="letter-row">
                    {i === layout.length - 1 &&
                        <button className="big-keyboard-letter filled-letter" onClick={() => keyPressed("Enter")}>
                            ENTER
                        </button>
                    }
                    {row.map(
                        letter => {
                            let className = "keyboard-letter"
                            const state = previouslyGuessed?.get(letter)
                            if (state === LetterState.NOT_PRESENT) {
                                className += " not-present"
                            } else if (state === LetterState.OUT_OF_POSITION) {
                                className += " out-of-position"
                            } else if (state === LetterState.IN_POSITION) {
                                className += " in-position"
                            } else {
                                className += " filled-letter"
                            }
                            return (
                                <button onClick={() => keyPressed(letter)} className={className}>
                                    {letter}
                                </button>
                            )
                        }
                    )}
                    {i === layout.length - 1 &&
                        <button className="big-keyboard-letter filled-letter" onClick={() => keyPressed("Backspace")}>
                            BACK
                        </button>
                    }
                </div>
            )}
        </div>
    )
}

export default Keyboard