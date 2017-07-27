CREATE DATABASE bamazon;

USE bamazon;

DROP TABLE products;

CREATE TABLE products (
  id_item INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL (50, 2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (id_item)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla ice cream", "food", 12.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("good dog food", "pet supplies", 52.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bad dog food", "pet supplies", 25.50, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toothpaste", "household supplies", 19.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("milk", "food", 12.99, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptop", "computer equipment ", 900, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("drone", "electronics", 1299, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("guitar strings", "music equipment", 5.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sophie's world", "books", 12.50, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("the dark knight", "movies", 10.99, 63);
