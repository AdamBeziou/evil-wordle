export const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const getWord = (wordLength: number, wordList: string[]) => {
    const filteredWordList = wordList.filter(
      (word) => word.length === wordLength
    );
    return filteredWordList[getRandomInt(0, filteredWordList.length - 1)];
};
