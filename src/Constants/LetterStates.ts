export enum LetterState {
    NOT_GUESSED = 1, // Letter has not been guessed yet
    NOT_PRESENT, // Letter has been guessed and is not present
    OUT_OF_POSITION, // Letter has been guessed and was out of position
    IN_POSITION, // Letter has been guessed and was in position
}

export const OUT_OF_POSITION_COLOR = '#ffff00'
export const IN_POSITION_COLOR = '#00ff00'
export const NOT_GUESSED_COLOR = '#ffffff'
export const NOT_PRESENT_COLOR = '#aaaaaa'

export const getBackgroundColorForLetter = (state: LetterState | undefined) => {
    if (!state) {
        return NOT_GUESSED_COLOR;
    }
    switch (state) {
        case LetterState.NOT_PRESENT:
            return NOT_PRESENT_COLOR
        case LetterState.OUT_OF_POSITION:
            return OUT_OF_POSITION_COLOR
        case LetterState.IN_POSITION:
            return IN_POSITION_COLOR
        default:
            return NOT_GUESSED_COLOR
    }
}