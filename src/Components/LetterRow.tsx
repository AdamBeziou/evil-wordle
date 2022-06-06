import React from 'react';
import { Letter } from '../Game/EvilWordle';
import { LetterState, getBackgroundColorForLetter } from '../Constants/LetterStates';

interface LetterRowProps {
    length: number;
    letters: Letter[] | undefined;
}

const LetterRow = ({length, letters}: LetterRowProps) => {
    const letterComponents = []
    for (let i = 0; i < length; i++) {
        const letter = letters?.length ? letters[i] : undefined
        letterComponents.push(
            <span
                className="letter"
                style={{ backgroundColor: getBackgroundColorForLetter(letter?.state) }}>
                {letter && letter.key}
            </span>
        )
    }

    return (
        <div>{letterComponents}</div>
    )
}

export default LetterRow