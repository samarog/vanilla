// Given an array [1, 2, 3, 4], how can I find the sum of its elements? (In this case, the sum would be 10.)

let x = [1, 2, 3, 4];

console.log(x[0]+x[1]+x[2]+x[3]) // Expected outcome: 10

// Outra via:

function soma(w, s, y, z) {
  return z + y + w + s
}

console.log(soma.apply(null, x));

// OU AINDA: SPREAD SYNTAX!

console.log(soma(...x))