function PaymentCard(balance, status, validDate) {
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
    this.getBalance = function(balance) {
        var decBalance = balance.toFixed(2);
        return decBalance;
    };
};

module.exports = PaymentCard;