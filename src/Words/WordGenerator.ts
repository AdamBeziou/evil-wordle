import wordList from "./WordList";
import { getRandomInt } from "../Util/Util";

export function getWordList(minLength: number, maxLength: number, minWordRange: number | undefined = undefined, maxWordRange: number | undefined = undefined): string[] {
    let filteredWordList = wordList.filter(word => word.length >= minLength && word.length <= maxLength)
    if (minWordRange) {
        filteredWordList = filteredWordList.slice(minWordRange, maxWordRange || filteredWordList.length)
    }
    return filteredWordList
}

export function getWord(minLength: number, maxLength: number, minWordRange: number | undefined = undefined, maxWordRange: number | undefined = undefined): string {
    const filteredWordList = getWordList(minLength, maxLength, minWordRange, maxWordRange)
    return filteredWordList[getRandomInt(0, filteredWordList.length - 1)]
}
