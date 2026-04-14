const palindrome = (slowo: string): boolean => {
  for (let i = 0; i < slowo.length / 2; i++) {
    if (slowo[i] !== slowo[slowo.length - i - 1]) {
      return false;
    }
  }
  return true;
};

const isPalindrome = (word: string): boolean => {
  const reverse = word.split("").reverse().join("");
  return reverse === word;
};

console.log(palindrome("kajak"));
console.log(palindrome("kalambury"));
console.log(isPalindrome("kajak"));
console.log(isPalindrome("kalambury"));
