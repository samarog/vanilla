let ball1 = {
  name: 'basketball',
  price: 1000,
}

let ball2 = {
  name: 'football',
  price: 1500,
}

console.log(ball1);

ball1.price = 2000; // dot notation

console.log(ball1);

ball1['delivery-time'] = '1 day'; // bracket notation

console.log(ball1);

function comparePrice(product1,product2) {
  if (product1.price === product2.price) {
    console.log(`${product1.name} and ${product2.name} cost the same: $${product1.price}`)
    return product1.price
  } else if (product1.price < product2.price) {
    console.log(`${product1.name} is cheaper: $${product1.price}`)
    return product1.price
  } else if (product1.price > product2.price) {
    console.log(`${product2.name} is cheaper: $${product2.price}`)
    return product2.price
  }
}

comparePrice(ball1,ball2);

//

function isSameProduct(product1,product2) {
  return (product1.name === product2.name) && (product1.price === product2.price) ? true : false
  
}

isSameProduct(ball1,ball2);

//Some refresh

let a = 'Good Morning'.slice(0,4)
console.log(a);
let b = 'Good Morning'.toLowerCase();
console.log(b);
b.length;
let c = 'test'
console.log(`this is a ${c.repeat(5)}`);