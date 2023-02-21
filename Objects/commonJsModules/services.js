const Product = require("./entities/Product");
const ShoppingBag = require("./entities/ShoppingBag");
const PaymentCard = require("./entities/PaymentCard");

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

    var bag1 = new ShoppingBag();
    bag1.addProduct(banana);
    bag1.addProduct(milk);

    var master = new PaymentCard(3432.21313, "active", "12/12/2028");

    console.log(checkoutAndBuy(bag1, master));

} catch(error) {
    console.log(error);
};