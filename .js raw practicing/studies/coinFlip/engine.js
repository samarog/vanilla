// Basic Coin Flip: Binary system

let coin = Math.floor(Math.random()*2);
let guess = prompt('Take your guess:')
console.log(coin);
coin === 0 ? coin = 'heads' : coin = 'tails'

if (guess === coin) {
    console.log('You guessed it!');
    alert('Won!');
} else {
    console.log('You failed your guess...');
}
