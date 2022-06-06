export const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const convertSetToUppercase = (list: Set<string> | undefined) => {
  const newSet = new Set<string>()
  if (list) {
    list.forEach(l => newSet.add(l.toLocaleUpperCase()))
  }
  return newSet
}

export const shuffleList = (list: any[]) => {
  let shuffledList = [...list]
  for (let i = shuffledList.length - 1; i >= 1; i--) {
    const j = getRandomInt(0, i)
    const temp = shuffledList[j]
    shuffledList[j] = shuffledList[i]
    shuffledList[i] = temp
  }
  return shuffledList
}

export const countLetter = (str: string, letter: string) => {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count += 1
    }
  }
  return count
}
