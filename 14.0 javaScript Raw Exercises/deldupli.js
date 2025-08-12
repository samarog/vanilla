const guests = ["Ana", "Remígio", "Golimar", "Carlos", "Secadegas", "Ana", "Johny", "Golimar", "Pietro"];

const uniqueGuests = new Set(guests)
const guestsUpdated = [...uniqueGuests]
console.log(guestsUpdated)