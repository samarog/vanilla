let userChoice = prompt('Heads or tails:');
alert(`You chose ${userChoice}`)
let coinFlip = Math.random() < 0.5
coinFlip === true ? alert(`You win!`) : alert (`You lose...`)
