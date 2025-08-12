let fibonacci = [0, 1]
let x = fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2]

console.log(fibonacci);
console.log(x);

function fiboGen(n) {

for (let i = 1; i <= n; i++) {
 fibonacci.push(x);
 console.log(fibonacci);

 x = fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2];
console.log(x);
 
}

return fibonacci
}

