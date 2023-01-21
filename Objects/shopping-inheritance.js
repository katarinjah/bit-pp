"use strict";

(function () {
    console.log("Hi");

    class Product {
        constructor(name, price, expDate) {
            if (!name || !price || !expDate) {
                throw new Error("Invalid data input");
            };
            this.name = name;
            this.price = price;
            this.expDate = new Date(expDate);
        };
        
        getPrice(price) {
            var decNumber = price.toFixed(2);
            return decNumber;
        };
        
        getProductID() {
            var number = Math.floor(Math.random() * 100000);
                if (number < 10000) {
                    number += 10000;
                }
            return number;
        };

        getInfo() {
            var product = (this.name[0] + this.name[this.name.length-1]).toUpperCase() + this.getProductID();
            return (product + ", " + this.name + ", " + this.getPrice());
        };
    };

    class ShoppingBag {
        constructor() {
            this.productList = [];
        };
        
        addProduct(product) {
            if(!(product instanceof Product)) {
                throw new Error("Invalid product entry");
            };
            var currentDate = new Date();
            if (product.expDate > currentDate) {
                this.productList.push(product);
            };
        };
        
        getAvgPrice() {
            if (this.productList.length === 0) {
                throw new Error("Product list is empty");
            };
            var totalPrice = 0;
            this.productList.forEach(function(product) {
              totalPrice += product.price;
            });
            var avgPrice = totalPrice / this.productList.length;
            return avgPrice.toFixed(3);
        };
        
        getMostExp() {
            if (this.productList.length === 0) {
                throw new Error("Product list is empty");
            };
            var mostExpensive = this.productList[0];
            this.productList.forEach(function(product) {
                if (product.price > mostExpensive.price) {
                    mostExpensive = product;
                };
            });
            return getMostExp.getInfo();
        };
        
        getTotalPrice() {
            if (this.productList.length === 0) {
                throw new Error("Product list is empty");
            };
            var totalPrice = 0;
            this.productList.forEach(function(product) {
                totalPrice += product.price;
            });
            return totalPrice.toFixed(2);
        };
    };

    class PaymentCard {
        constructor(balance, status, validDate) {
            this.date = new Date(validDate);
            this.balance = balance;
            this.status = status;
            var currentDate = new Date();
            if (this.date < currentDate) {
                throw new Error("Payment card expired");
            };
            if (this.status === "inactive") {
                throw new Error("Payment card inactive");
            };
            if(this.balance === 0) {
                throw new Error("Insufficient funds")
            };
        };
        
        getBalance(balance) {
            var decBalance = balance.toFixed(2);
            return decBalance;
        };
    };

    function checkoutAndBuy(shoppingBag, paymentCard) {
        var totalPrice = 0;
        shoppingBag.productList.forEach(function(product) {
            totalPrice += product.price;
        });
        if (paymentCard.balance >= totalPrice) {
             return "Purchase successful!";
        } else {
            return((totalPrice - paymentCard.balance).toFixed(2) + " EUR missing to complete the purchase.");
        };
    };

    try {
        var banana = new Product("Banana", 12.5555, "01/12/2023");
        var milk = new Product("Milk", 1.5235, "07/01/2023");
        var bread = new Product("Bread", 2.4324, "09/03/2023");
        var cookies = new Product("Cookies", 23.4322, "10/10/2023"); 

        var bag1 = new ShoppingBag();
        bag1.addProduct(banana);
        bag1.addProduct(milk);
        
        var bag2 = new ShoppingBag();
        bag2.addProduct(bread);
        bag2.addProduct(cookies);

        var bag3 = new ShoppingBag();
        bag3.addProduct(banana);
        bag3.addProduct(milk);
        bag3.addProduct(bread);
        bag3.addProduct(cookies);

        var master = new PaymentCard(3432.21313, "active", "12/12/2028");
        //var visa = new PaymentCard(897.343, "inactive", "10/11/2027");
        //var dina = new PaymentCard(9.5322, "active", "02/04/2025");
        //var dina2 = new PaymentCard(5454.41324, "active", "09/05/2000");

        console.log(checkoutAndBuy(bag1, master));
        //console.log(checkoutAndBuy(bag2, visa));
        //console.log(checkoutAndBuy(bag3, dina));
        //console.log(checkoutAndBuy(bag3, dina2));

    } catch(error) {
        console.log(error.message);
    };
})();