// forEach mechanical study

const numbers = [3, 56, 2, 48, 5];

const fruits = [
  {
    nome: "kiwi",
    peso: 0.9,
  },
  {
    nome: "banana",
    peso: 2,
  },
];

numbers.forEach((e) => {
  e *= 2;
});

console.log(numbers); // ==> [3, 56, 2, 48, 5] // doens't mutate as e is just a shallow copy of the elements of [numbers]

numbers.forEach((e, i) => {
  numbers[i] = numbers[i] * 2;
});

console.log(numbers); // ==> [6, 112, 4, 96, 10] // mutates because now you're calling the array itself

fruits.forEach((e) => {
  e.peso *= 2;
});

console.log(fruits); // => peso: 1.8 // MUTATION, because object properties are passed as a reference, not as a copy of that reference.