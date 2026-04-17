const input = "hej (dda(sd)afd(sf) gdfg ())";

const validString = (input: string): boolean => {
  const stack: string[] = [];
  for (const char of input) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      stack.length === 0 ? false : stack.pop();
    }
  }
  return stack.length === 0;
};

console.log(validString(input));
