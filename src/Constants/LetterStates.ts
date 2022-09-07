export enum LetterState {
    NOT_GUESSED = 1, // Letter has not been guessed yet
    NOT_PRESENT, // Letter has been guessed and is not present
    OUT_OF_POSITION, // Letter has been guessed and was out of position
    IN_POSITION, // Letter has been guessed and was in position
}


const LetterStateToColors = {
    [LetterState.NOT_GUESSED]: {
        borderColor: '#000000',
        backgroundColor: '#ffffff',
    },
    [LetterState.NOT_PRESENT]: {
        borderColor: '#aaaaaa',
        backgroundColor: '#aaaaaa',
    },
    [LetterState.OUT_OF_POSITION]: {
        borderColor: '#ffff00',
        backgroundColor: '#ffff00',
    },
    [LetterState.IN_POSITION]: {
        borderColor: '#00ff00',
        backgroundColor: '#00ff00',
    },
}

export const getBackgroundColorForLetter = (state: LetterState | undefined) => {
    if (!state) {
        return '#ffffff';
    }
    return LetterStateToColors[state].backgroundColor
}

export const getBorderColorForLetter = (state: LetterState | undefined) => {
    if (!state) {
        return '#bdbdbd';
    }
    return LetterStateToColors[state].borderColor
}

export const getTextColorForLetter = (state: LetterState | undefined) => {
    if (!state || state == LetterState.NOT_GUESSED) {
        return '#000000'
    }
    return '#ffffff'
}