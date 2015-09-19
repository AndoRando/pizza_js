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

$(document).ready(function() {
  // var pepperoni = new Topping("Pepperoni", 1);
  // var canadianBacon = new Topping("Canadian Bacon", 1.25);
  // var sausage = new Topping("Sausage", 1.5);
  // var olives = new Topping("Olives", 1);
  // var greenPeppers = new Topping("Green Peppers", 1.25);
  // var onions = new Topping("Onions", 0.75);

  $(".pizza-form").submit(function(event) {
    event.preventDefault();

    var toppings = [];
    var pizza = new Pizza($(".size:checked").attr("id"), toppings, parseFloat($(".size:checked").val()));

    $(".topping:checked").each(function(topping) {
      toppings.push(new Topping(($(this).attr("id")), (parseFloat($(this).val()))));
    });

    $(".price-area").append("<h4>Your total comes to: $" + pizza.pizzaPrice() + " per pizza  X  " + parseInt($(".quantity").val()) + " pizzas = $" + pizza.pizzaPrice() * parseInt($(".quantity").val()) + "</h4>");
  })
});
