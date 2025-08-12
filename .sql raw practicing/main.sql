-- my SQL project: CRUD + RELATIONSHIPS

-- CREATE + READ

-- create a customers table
CREATE TABLE customers (
  id INT NOT NULL,
  first_name CHAR(50) NOT NULL, -- not VARCHAR because CHAR is faster and predictable
  last_name CHAR(50) NOT NULL,
  address CHAR(50),
  PRIMARY KEY (id)
);

-- insert some values
INSERT INTO customers
VALUES (1, 'Goncalo', 'Amaro', 'N4 Rua do Telheiro');
INSERT INTO customers
VALUES (2, 'Ana', 'Golimar', '12 Babidi Street');

-- fetch some values
SELECT * FROM customers
WHERE first_name = 'Gonçalo';

-- create the products table
CREATE TABLE products (
    id INT NOT NULL,
    name CHAR(50),
    price MONEY,
    PRIMARY KEY (id)
);

--insert a product into products table
INSERT INTO products
VALUES (1, 'Caneta', 1.20);

-- select a product with id = 1
SELECT * FROM products
WHERE id = 1;

--insert a product with no price into products table
INSERT INTO products (id, name)
VALUES (2, 'Papel');

--select a product with id = 2
SELECT * FROM products
WHERE id = 2;

-- UPDATE

--update a row in products table
UPDATE products
SET price = 0.8
WHERE id = 2; -- !! WHERE IS FUNDAMENTAL to avoid wiping the whole table.

--select all records from products table
SELECT * FROM products;

--add a new column - stock to the products table
ALTER TABLE products
ADD stock INT;

--update a row in products table
UPDATE products
SET stock = 32
WHERE id = 1;  -- !! Again: WHERE IS FUNDAMENTAL to avoid wiping the whole table.

--select all records from products table
SELECT * FROM products;

--update a row in products table
UPDATE products
SET stock = 12
WHERE id = 2;

--select all records from products table
SELECT * FROM products;

-- DELETE

--delete a row from products table
DELETE FROM products
WHERE id = 2;

--insert back the deleted row into products table
INSERT INTO products VALUES (2, 'Papel', 0.8, 12);

-- FOREIGN KEYS + INNER JOINS

-- create the orders table
CREATE TABLE orders (
  id INT NOT NULL,
  order_number INT,
  customer_id INT,
  product_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

--insert an order into orders table
INSERT INTO orders VALUES (1, 119, 2, 1);

--join orders and customers table
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;

--join orders and products table
SELECT orders.order_number, products.name, products.price, products.stock
FROM orders
INNER JOIN products ON product_id = products.id;

-- LAST NOTES:
-- https://www.w3schools.com/sql/sql_join_inner.asp TO BETTER UNDERSTAND LOGIC
-- logic.png TO QUICK REVIEW