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

export const countLetter = (str: string, letter: string) => {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count += 1
    }
  }
  return count
}
