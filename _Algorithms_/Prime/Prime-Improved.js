function isPrime(number) {

    //for every non prime number At least one of those factors will be smaller or equal than the square root
    // because if both factors would be bigger than the square root of the number you're looking at the multiplication of
    //those factors would yield a bigger number than the number you're looking at
    for (let i = 2; i < Math.sqrt(number); i++) { // 1
        console.log('Running');
        if (number % i === 0) { // n
            return false; // 1
        }
    }
    return true; // 1
}

// Best Case: number = 1 OR number = 2 => O(1)
// Average Case: O(n) (Improved: O(sqrt(n)))
// Worst Case: number = 27,277 => O(n) (Improved: O(sqrt(n)))

console.log(isPrime(27277));
// console.log(isPrime(2));
// console.log(isPrime(9));