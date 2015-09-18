function Pizza(size, toppings, basePrice) {
  this.size = size;
  this.toppings = toppings;
  this.basePrice = basePrice;
};

Pizza.prototype.pizzaPrice = function() {
  var totalCost = this.basePrice;
  this.toppings.forEach(function(topping) {
    totalCost += topping.price;
  });
  return totalCost;
};

function Topping(name, price) {
  this.name = name;
  this.price = price;
}
