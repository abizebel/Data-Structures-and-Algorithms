function getMin(numbers) {
    let currentMin = numbers[0]; // 1
    for (const num of numbers) { // 1
        if (num < currentMin) { // n
            currentMin = num; // 0 (Best Case), 2 (Worst Case), 1 (Avg. Case)
        }
    }
    return currentMin; // 1
}

// Best Case: [1, 2, 3] => O(n)
// Worst Case: [3, 2, 1] => O(n)
// Average Case: [2, 1, 3] => O(n)

console.log(getMin([1, 2, 3]));
console.log(getMin([9, 8, 3, 5, 1]));
console.log(getMin([10, 3, 8, 6]));

function isEven(number) {
    // 1
    return number % 2 === 0; // 5 % 2 => 1, 4 % 2 => 0
}

// One Case: O(1)

console.log(isEven(2));
console.log(isEven(4));
console.log(isEven(7));