import React from 'react'
import { convertSetToUppercase } from '../Util/Util'

const Keyboard = ({
    layout,
    notPresentKeys,
    outOfPositionKeys,
    inPositionKeys,
    keyPressed
}: {
    layout: string[][],
    notPresentKeys: Set<string> | undefined,
    outOfPositionKeys: Set<string> | undefined,
    inPositionKeys: Set<string> | undefined,
    keyPressed: (key: string) => void
}) => {
    const notPresentKeysLowercase = convertSetToUppercase(notPresentKeys)
    const outOfPositionKeysLowercase = convertSetToUppercase(outOfPositionKeys)
    const inPositionKeysLowercase = convertSetToUppercase(inPositionKeys)

    console.log(notPresentKeysLowercase)
    console.log(outOfPositionKeysLowercase)
    console.log(inPositionKeysLowercase)

    const renderRow = (row: string[]) => row.map(
        letter => {
            let className = "keyboard-letter"
            if (notPresentKeysLowercase.has(letter)) {
                className += " not-present"
            } else if (outOfPositionKeysLowercase.has(letter)) {
                className += " out-of-position"
            } else if (inPositionKeysLowercase.has(letter)) {
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
    )

    return (
        <div className="keyboard">
            {layout.map((row, i) =>
                <div className="letter-row">
                    {i === layout.length - 1 &&
                        <button className="big-keyboard-letter filled-letter" onClick={() => keyPressed("Enter")}>
                            ENTER
                        </button>
                    }
                    {renderRow(row)}
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