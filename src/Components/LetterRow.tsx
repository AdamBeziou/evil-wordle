import React from 'react';
import { LetterState } from '../Constants/LetterStates';

interface LetterRowProps {
    length: number;
    letters: string[];
    letterStates: LetterState[];
}

const LetterRow = ({length, letters, letterStates}: LetterRowProps) => {
    const letterComponents = []
    for (let i = 0; i < length; i++) {
        if (i < letters.length) {
            letterComponents.push(
                <span>{letters[i]}</span>
            )
        } else {
            letterComponents.push(
                <span>_</span>
            )
        }

    }

    return (
        <div>{letterComponents}</div>
    )
}

export default LetterRow