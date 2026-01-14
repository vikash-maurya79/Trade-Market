function averageCalculator(amount, quantity, dbAvg) {
    return Number(((amount / quantity) + dbAvg) / 2);
}

function quantityCalculator(quantity, dbquantity) {
    return Number(quantity + dbquantity);
}
module.exports = { averageCalculator, quantityCalculator };