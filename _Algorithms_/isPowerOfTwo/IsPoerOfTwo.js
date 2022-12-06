function isPowerOfTwo(number) {
    if (number < 1) {
        return false;
    }
    let dividedNumber = number;
    while (dividedNumber !== 1) {
        if (dividedNumber % 2 !== 0) {
            return false;
        }
        dividedNumber = dividedNumber / 2;
    }
    return true;
}

// Best Case: number = 13 => O(1)
// Average Case: O(log n)
// Worst Case: 1,000,000 => O(log n)

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(20));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(13));