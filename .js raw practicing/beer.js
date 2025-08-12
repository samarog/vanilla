// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

let bottles = 99

while (bottles >= 0) {
    if (bottles === 1) {
        console.log(`${bottles} bottle of beer on the wall, ${bottles} bottle of beer. Take one down and pass it around. No more bottles of beer on the wall.`)
    } else if (bottles === 0) {
        console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more. 99 bottles of beer on the wall.`)
    } else {
        console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${bottles-1} bottles of beer on the wall.`)
    }
    
    bottles--
}

// 'while' em vez de 'for', pois só o while permite ter a condição de partida fora da função.