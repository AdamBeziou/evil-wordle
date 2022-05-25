import { LetterState } from "../Constants/LetterStates";

export interface Letter {
    key: string;
    state: LetterState;
}