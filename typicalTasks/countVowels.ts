const VOWELS = ["a", "e", "i", "o", "u"];

function countVowels(text: string): number {
  return text
    .toLowerCase()
    .split("")
    .reduce((acc, curr) => (VOWELS.includes(curr) ? acc + 1 : acc), 0);
}

console.log(countVowels("kolumbryna"));
