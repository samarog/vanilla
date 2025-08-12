// Rigged Coin Flip

// Basic 50-50 structure. Not conditioned to user's choice, which makes it irrelevant.

let userChoice = prompt('Heads or tails:');
alert(`You chose ${userChoice}`)
let coinFlip = Math.random() < 0.5
coinFlip === true ? alert(`You win!`) : alert (`You lose...`)