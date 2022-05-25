import React from 'react';
import { Letter } from '../Game/EvilWordle';

interface LetterRowProps {
    length: number;
    letters: Letter[] | undefined;
}

const LetterRow = ({length, letters}: LetterRowProps) => {
    const letterComponents = []
    for (let i = 0; i < length; i++) {

        letterComponents.push(
            <span>
                {letters != undefined && i < letters.length ? letters[i].key : undefined}
            </span>
        )
    }

    return (
        <div>{letterComponents}</div>
    )
}

export default LetterRow