function fibo(n) {
    const numbers = [1, 1]; //two starting elemnt of the fibonacci sequence
    for (let i = 2; i <= n; i++) {
        numbers.push(numbers[i - 2] + numbers[i - 1])
    }

    return numbers[n]
}


console.log(fibo(3)); //1 + 1 + [=> 2 <=]
console.log(fibo(4)); //1 + 1 + 2 + [=> 3 <=]