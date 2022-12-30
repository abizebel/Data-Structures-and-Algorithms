function fact(number) {
    if (number === 1) { // 1
        return 1; // 1
    }
    return number * fact(number - 1); // 1
}

// In every function call => O(1)
// But we trigger multiple function calls => n function calls
// T = n * O(1) => O(n)
// T = 1 * n = n => O(n)

console.log(fact(3)); // 3 * 2 * 1 => 6
console.log(fact(4)); // 4 * 3 * 2 * 1 => 24
console.log(fact(5)); // 5 * 4 * 3 * 2 * 1 => 120