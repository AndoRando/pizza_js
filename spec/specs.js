describe("Pizza", function() {
  it("returns a large Pizza object instance", function() {
    var pizzaLarge = new Pizza("large");
    expect(pizzaLarge.size).to.eql("large");
  });

  it("returns a medium Pizza object instance with sausage topping", function() {
    var sausage = new Topping("Sausage");
    var toppings = [sausage];
    var pizzaMedium = new Pizza("medium", toppings);
    expect(pizzaMedium.size).to.eql("medium");
    expect(pizzaMedium.toppings[0].name).to.eql("Sausage");
  });

  it("returns a small Pizza object instance with sausage and pepperoni toppings", function() {
    var sausage = new Topping("Sausage");
    var pepperoni = new Topping("Pepperoni");
    var toppings = [sausage, pepperoni];
    var pizzaSmall = new Pizza("medium", toppings);
    expect(pizzaSmall.size).to.eql("medium");
    expect(pizzaSmall.toppings[0].name).to.eql("Sausage");
    expect(pizzaSmall.toppings[1].name).to.eql("Pepperoni");
  });
});

describe("Topping", function() {
  it("returns a pepperoni Topping object instance", function() {
    var pepperoni = new Topping("Pepperoni");
    expect(pepperoni.name).to.eql("Pepperoni");
  });
});
