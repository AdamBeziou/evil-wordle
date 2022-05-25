import React from 'react';
import { Letter } from './Letter';

interface LetterRowProps {
    length: number;
    letters: Letter[] | undefined;
}

const LetterRow = ({length, letters}: LetterRowProps) => {
    const letterComponents = []
    for (let i = 0; i < length; i++) {
        if (letters != undefined && i < letters.length) {
            letterComponents.push(
                <span>{letters[i].key}</span>
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