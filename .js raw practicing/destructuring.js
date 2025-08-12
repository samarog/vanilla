// DESTRUCTURING: makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

let object1 = {
  name: "John",
  age: 33,
  membership: true
}

// To remove information from an {object} there are a lot of ways.
// For example:

let userName = object1.name;
console.log(userName);

// Shortcut: DESTRUCTURING 
// if the key name matches the new variable name, you can use destructuring

// DESTRUCTURING OBJECTS

/* let name = object1.name ===  */  let { membership, name } = object1;

console.log(membership); // Expected outcome: true
console.log(name); // Expected outcome: John
console.log(object1.age); // Expected outcome: 33, porque vai buscar a informação diretamente à fonte com o 'object1.'
console.log(age); // Expected outcome: ERROR because it was not defined in destructuring


// SHORTHAND PROPERTY

const object2 = {
  // membership: membership --> isto copia o valor original de membership, neste caso o da variável criada na linha 19 (!atenção a isto). Isto caça o valor da variável, não do objecto original. Há um atalho para isto, basta escrever o nome da propriedade (MAS SÒ SE ELA JÀ ESTIVER EXTRAÌDA DO OBJECT1):
  membership,
}

console.log(object2.membership);

// SHORTHAND METHOD

// A forma normal de inserir uma função no objecto é esta

const object3 = {
  method: function function1() {
    console.log('method');
  }
}

// mas há um shortcut para isto, basta escreve o nome do método (o nome da função nem sequer é necessário):


const object4 = {
  meth() {  // mudei o nome de method para meth de propósito para ver como funciona com qualquer nome de propriedade, desde que tenha ().
    console.log('Funcionou?');
  }
}

console.log(object4);
object4.meth();

// DESTRUCTURING ARRAYS

let newArray = [1, 2, 3, 4, 5, 6, 7];

let [a, b] = newArray;

console.log([a,b]) // Expected outcome: [1, 2] // cria duas variáveis: a = 1 e b = 2. Ele só faz unpack de quantos elementos colocares em 'const = [*número de elementos]'. 

let [c, d, e] = newArray;
console.log([c, d, e]) // Expected outcome: [1, 2, 3]

// Agora usando o método '... rest'
let [z, x, , y, ...rest] = newArray;
console.log([z, x, , y, ...rest]) // Expected outcome: [1, 2, empty, 4, 5, 6, 7]


// The destructuring assignment uses similar syntax but uses it on the left-hand side of the assignment instead. It defines which values to unpack from the sourced variable.

const hulu = [1, 2, 3, 4, 5];
const [alpha, victor] = hulu;
console.log(alpha); // 1
console.log(victor); // 2


// Similarly, you can destructure objects on the left-hand side of the assignment.

const fruits = { mango: "good", banana: "bad" };
const { mango, banana } = fruits;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;