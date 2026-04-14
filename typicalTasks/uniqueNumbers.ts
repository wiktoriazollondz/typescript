const array = [1, 2, 2, 3, 4, 4, 5];

const noDuplicates = (array: number[]): number[] => {
    return [...new Set(array)];
}

console.log(noDuplicates(array));