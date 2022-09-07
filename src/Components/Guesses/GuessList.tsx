import React, { useEffect, useState } from "react"
import "./GuessList.css";
import { Guess, Letter } from "../../Game/EvilWordle";
import { getBackgroundColorForLetter, getBorderColorForLetter, getTextColorForLetter, LetterState } from "../../Constants/LetterStates";

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
                style={{
                    backgroundColor: getBackgroundColorForLetter(letter?.state),
                    borderColor: getBorderColorForLetter(letter?.state),
                    color: getTextColorForLetter(letter?.state),
                }}>
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
    guesses: Array<Guess>;
    currentGuess: string;
}

const GuessList = ({numberOfGuesses, guessLength, guesses, currentGuess}: GuessListProps) => {
    const guessRows = []
    for (let i = 0; i < numberOfGuesses; i++) {
        let letters = undefined
        if (i < guesses.length) {
            letters = guesses[i].letters
        } else if (i === guesses.length) {
            letters = currentGuess?.split('').map(
                letter => {
                    return {key: letter, state: LetterState.NOT_GUESSED}
                }
            )
        }
        guessRows.push(
            <GuessRow
                length={guessLength}
                letters={letters}
            />
        )
    }

    // Pass in list length and width to adjust height/width to correct size
    const style = {
        '--number-of-rows': numberOfGuesses,
        '--width-of-rows': guessLength
    } as React.CSSProperties

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