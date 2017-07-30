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
        for (var i = 0; i < res.length; i++) {
            console.log(
                "id: " + res[i].id_item +
                "| product name: " + res[i].product_name +
                "| department name: " + res[i].department_name +
                "| price: " + res[i].price +
                "| stock: " + res[i].stock_quantity + "\n"
            );
        }
        makePurchase()
    });
}

function makePurchase() {
    inquirer.prompt([{
            type: "input",
            message: "Please type the name of the item you'd like to purchase",
            name: "id"
        },
        {
            type: "input",
            name: "units",
            message: "How many units would you like to purchase?",
        }
    ]).then(function(answers) {
        let id = answers.id;
        let units = answers.units;
        connection.query("SELECT stock_quantity FROM products WHERE ?", {
            item_name: id
        }, function(err, res) {
            if (err) throw err;

            var stock = res[0].stock_quantity;
            let totalLeft = stock - units;
            let price = res[0].price;


            if (stock >= units) {
                connection.query("UPDATE products SET ? WHERE ?", [{
                        stock_quantity: totalLeft
                    }, {
                        item_id: id
                    }],
                    function(err, res) {
                        var total = price * units;
                        console.log("Your order has been placed. Your total is $" + total);
                        inquirer.prompt([{
                            type: 'confirm',
                            message: 'Would you like to make another purchase?',
                            name: 'purchase'
                        }]).then(function(answer) {
                            if (answer.purchase === true) {
                                makePurchase();
                            } else {
                                return;
                            }
                        });
                    }
                );
            } else {
                console.log("Insufficient quantity");
                makePurchase();
            }
        });
    });
}
