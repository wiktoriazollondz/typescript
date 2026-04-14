const palindrome = (slowo: string): boolean => {
    for (let i = 0; i < slowo.length / 2; i++) {  
        if (slowo[i] !== slowo[slowo.length - i - 1]) {
            return false;
        }
    }
    return true;
}