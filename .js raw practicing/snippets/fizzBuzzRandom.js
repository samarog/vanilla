// Random FizzBuzz

let game = [];
let p = 1

function fizz() {
    
for (p = 1; p <= 50; p = Math.ceil(Math.random()*51)) {

if (p % 3 === 0 && p % 5 === 0) {
    game.unshift('FizzBuzz');
}
else if (p % 3 === 0) {
    game.unshift('Fizz');
}
else if (p % 5 === 0) {
    game.unshift('Buzz');
} else {
    game.unshift(p);
}
}
    console.log(game);
}

fizz();

// Atenção que se o p = 1 estiver dentro da função, ele vai sempre acrescentar mais 100 númeors à array cada vez que fazemos call à função
// Isto porque ele faz reset a p (ou seja p passa a ser outra vez = 1) e faz os loops todos de novo. Só se p estiver fora da função é que ele só corre uma vez.
// !!! E para isso acontecer o loop usado  tem de ser 'while' em vez de 'for', pois só o while permite ter a condiçãode partida fora da funçãp.
// OU ENTÃO meter a array dentro da função, que também a reseta:

// function fizz() {
//     let game = []; //Initialize the array in the function.
