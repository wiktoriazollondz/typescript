function toTitleCase(sentence: string): string {
  return sentence
    .toLowerCase()
    .split(" ")
    .map((slowo) => (slowo ? slowo[0].toUpperCase() + slowo.slice(1) : ""))
    .join(" ");
}

console.log(toTitleCase("HI ITS ME"));
