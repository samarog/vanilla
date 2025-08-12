// Se quisermos passar uma array como argumento de uma função anónima ou built-in.

//Função anónima:

function myFunction(x, y, z) {
  return x + y + z
}
const args = [1, 2, 3];
myFunction.apply(null, args);
console.log(myFunction.apply(null, args));

// Outro exemplo agora em função built-in:

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers); // O método apply é necessário para ler arrays e começa sempre com null pois o primeiro [i] é 0.
console.log(max);
// NO ENTANTO, com um spread também dá.

const max2 = Math.max(...numbers);
console.log(max2);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2
