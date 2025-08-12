// First solution:

function whosPaying(names) { // o 'names' implica uma lista de nomes, se pusermos só um tipo variável, ele escolhe uma letra com o length.
  let randomNumber = Math.floor(Math.random() * names.length) // names.length é uma propriedade que invoca a length da array, que neste caso seria 5. 
  // A alternativa era escrever: let randomNumber = Math.ceil(Math.random() * names.length)-1 
  let randomPerson = names[randomNumber] // Isto (names[*]) seleciona uma posição na array e o correspondente value)

  return `${randomPerson} is going to buy lunch today!`
}

whosPaying(['Ricardo', 'Jacintus', 'Culebra', 'Remigio', 'Lopty']);

// Second solution (Esta não é a melhor solução para um função com inputs,só serve para uma função vanilla):

function whosPaying() {

  const names = ['Ricardo', 'Jacintus', 'Culebra', 'Remigio', 'Lopty']
  let i = Math.floor(Math.random()*5)
  return `${names[i]} is going to buy lunch today!`

}

whosPaying();

// Third and cleanest solution:

function whoPays (names) {
  let i = Math.floor(Math.random() * names.length);
  return names[i]
}
