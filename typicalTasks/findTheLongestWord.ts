const sentence = "Hello World is the best task";

const findTheLongestWord = (sentence: string): string => {
  const arrays = sentence.split(" ");
  return arrays.reduce((acc: string, curr: string): string => {
    const result = curr.length > acc.length ? curr : acc;
    return result;
  });
};

console.log(findTheLongestWord(sentence));
