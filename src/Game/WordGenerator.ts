import wordList from "./WordList";
import { getRandomInt, shuffleList } from "../Util/Util";

export function getWordList(size: number | undefined = undefined): string[] {
    if (size) {
        let shuffledList = shuffleList(wordList)
        return shuffledList.slice(0, size)
    }
    return wordList
}
