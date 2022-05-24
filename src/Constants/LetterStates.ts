export enum LetterState {
    NOT_GUESSED = 1, // Letter has not been guessed yet
    NOT_PRESENT, // Letter has been guessed and is not present
    OUT_OF_POSITION, // Letter has been guessed and was out of position
    IN_POSITION, // Letter has been guessed and was in position
}