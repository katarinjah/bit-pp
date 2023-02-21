const Product = require("./Product");

function ShoppingBag() {
    this.productList = [];
    this.addProduct = function(product) {
        if(!(product instanceof Product)) {
            throw new Error("Invalid product entry");
        };
        var currentDate = new Date();
        if (product.expDate > currentDate) {
            this.productList.push(product);
        };
    };
    this.getAvgPrice = function() {
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
    this.getMostExp = function() {
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
    this.getTotalPrice = function() {
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

module.exports = ShoppingBag;