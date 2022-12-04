function isPrime(number) {
    for (let i = 2; i < number; i++) { // 1
        console.log('Running');
        if (number % i === 0) { // n
            return false; // 1
        }
    }
    return true; // 1
}

// Best Case: number = 1 OR number = 2 => O(1)
// Average Case: O(n)
// Worst Case: number = 27,277 => O(n)

console.log(isPrime(27277));
// console.log(isPrime(2));
// console.log(isPrime(9));