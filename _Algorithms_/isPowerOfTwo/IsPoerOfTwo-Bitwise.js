// 2 => 0010  2^2 => (0010 && 0010 -1)
// 4 => 0100 
// 4 => 1000
function isPowerOfTwo(number) {
    if (number < 1) {
        return false;
    }

    return (number & (number - 1)) === 0; // O(1)
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(20));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(13));