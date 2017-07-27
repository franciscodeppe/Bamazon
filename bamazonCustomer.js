var inquirer = require("inquirer")
var mysql = require("mysql");
var fs = require("fs")


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  displayProducts();
});

function displayProducts() {
	console.log("Selecting all products...\n");
 connection.query("SELECT * FROM products", function(err, res) {
   if (err) throw err;
   // Log all results of the SELECT statement
   for (var i=0; i < res.length; i++) {
     	console.log(
			"id: " + res[i].id_item +
			"\nproduct name: " + res[i].product_name +
			"\ndepartment name: " + res[i].department_name +
			"\nprice: " + res[i].price +
			"\nstock: " + res[i].stock_quantity + "\n"
	 	);
 	}
	makePurchase()
   connection.end();
 });
}

function makePurchase() {
  inquirer
    .prompt({
      name: "action1",
      type: "input",
      message: "Enter product ID or name",
	  
	  name: "action2",
      type: "input",
      message: "Enter quantity",
  }).then(function(answer) {
	 console.log(answer.action1 + "\n" + answer.action2)
    });
}
