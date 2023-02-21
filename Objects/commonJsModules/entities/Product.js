function Product(name, price, expDate) {
    if (!name || !price || !expDate) {
        throw new Error("Invalid data input");
    };
    this.name = name;
    this.price = price;
    this.expDate = new Date(expDate);
    this.getPrice = function(price) {
        var decNumber = price.toFixed(2);
        return decNumber;
    };
    this.getProductID = function() {
        var number = Math.floor(Math.random() * 100000);
            if (number < 10000) {
                number += 10000;
            }
        return number;
    };

    this.getInfo = function() {
        var product = (this.name[0] + this.name[this.name.length-1]).toUpperCase() + this.getProductID();
        return (product + ", " + this.name + ", " + this.getPrice());
    };
};

module.exports = Product;