function fibonacciGenerator(n) {
    var fib = [0, 1]; // Initialize array with first two values

    if (n === 1) return [0]; 
    if (n === 2) return fib; 

    for (var i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]); // Generate next Fibonacci number
    }

    return fib;
}