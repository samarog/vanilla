// const product = {
//   name: 'socks',
//   price: 1090, <--- isto é uma property do objeto
//   brand: 'nike'
//   function myFunc() {   <------- method
//      console.log('cenas');
// }
// }

// product.name = 'cotton socks';
// product.stock = true;
// console.log(typeof product);
// console.log(product);

let product2 = {
  name: 'shirt',
  ['delivery-time']: '1 day',
  rating: {
    stars: 4.5,
    count: 87
  },
  fun: function f1 () {
    console.log('Pahahaha')
  }
}

console.log(product2);
console.log(product2.name);
console.log(product2['name']);
console.log(product2['delivery-time']);
console.log(product2.rating.stars);
product2.name;
product2.fun();
product2;

console.log(JSON.stringify(product2));

const jsonString = JSON.stringify(product2);

JSON.parse(JSON.stringify(product2));


console.log('hello'.length);
console.log('hello'.toUpperCase);

// Objects are references: shortcuts to the memory heap where the data is stored
// Mesmo com const ainda se consegue mudar os valores dentro do objecto através do acesso à referência
// Forma indireta de mudar os valores de uma const:object:

const object1 = {
  name: 'Goncalo',
}

object1.name = 'Zé';
console.log(object1)

const object2 = object1; // Isto não faz hard copy do objecto, faz cópia do atalho de referência. Ou seja ambos apontam para a mesma heap de memória onde a data está guardada.

const object3 = {
  name: 'Zé',
}

console.log(object1 === object3) // false, porque há na verdade DUAS REFERENCES diferentes com os mesmos valores. Mas, p.e., object 1 === object 2 = true;
console.log(object1 === object2)

// Quando comparamos dos objetos com as mesmas referências, estamos na verdade a comparar referências, NÃO VALORES.

const object4 = {
  name: 'Zé',
  price: 799
}

// destructuring - forma fácil de tirar properties de um object:

let name = object4.name; /* OU */ let {messsage, price} = object4; // (mas a variável tem de ter o mesmo nome da property)

let object5 = {
  message: name,
  // method: function function1(){
  //   console.log('method')
  // },
  method (){
   console.log('method')
  },
  }
  
  console.log(object5);
  console.log(object5.method());
  