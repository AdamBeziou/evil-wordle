import React, { useEffect, useState } from "react"
import { Guess, Letter } from "../Game/EvilWordle";
import LetterRow from "./LetterRow";

interface GuessListProps {
    numberOfGuesses: number;
    guessLength: number;
    guesses: Guess[];
}

const GuessList = ({numberOfGuesses, guessLength, guesses}: GuessListProps) => {
    const guessRows = []
    for (let i = 0; i < numberOfGuesses; i++) {
        guessRows.push(
            <LetterRow
                length={guessLength}
                letters={i < guesses.length ? guesses[i].letters : undefined}
            />
        )
    }

    return (
        <div className="game-view">
            {guessRows}
        </div>
    )
}

export default GuessList