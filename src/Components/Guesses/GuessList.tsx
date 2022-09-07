import React, { useEffect, useState } from "react"
import "./GuessList.css";
import { Guess, Letter } from "../../Game/EvilWordle";
import { getBackgroundColorForLetter } from "../../Constants/LetterStates";

const BORDER_THICKNESS = '1px'
const LETTER_HEIGHT = '1em'
const LETTER_WIDTH = '1em'

interface LetterRowProps {
    length: number;
    letters: Letter[] | undefined;
}

const GuessRow = ({length, letters}: LetterRowProps) => {
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
        <div className="guess-row">
            {letterComponents}
        </div>
    )
}

interface GuessListProps {
    numberOfGuesses: number;
    guessLength: number;
    guesses: Guess[];
}

const GuessList = ({numberOfGuesses, guessLength, guesses}: GuessListProps) => {
    const guessRows = []
    for (let i = 0; i < numberOfGuesses; i++) {
        guessRows.push(
            <GuessRow
                length={guessLength}
                letters={i < guesses.length ? guesses[i].letters : undefined}
            />
        )
    }

    const style = { '--number-of-rows': numberOfGuesses, '--width-of-rows': guessLength } as React.CSSProperties

    return (
        <div className="guess-list-frame">
            <div
                className="guess-list"
                style={style}
            >
                {guessRows}
            </div>
        </div>
    )
}

export default GuessList