// Wybierz tylko liczby parzyste, każdą z nich pomnóż przez 10, a na koniec zsumuj je wszystkie.

const numbers = [1, 2, 3, 4, 5, 6];

const task = (numbers: number[]): number => {
  return numbers
    .filter((n) => n % 2 === 0)
    .map((n) => n * 10)
    .reduce((acc, curr) => curr + acc, 0);
};
