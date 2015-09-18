describe("Pizza", function() {
  it("returns a large Pizza object instance", function() {
    var testPizza = new Pizza("large");
    expect(testPizza.size).to.eql("large");
  });

  it("returns a medium Pizza object instance with sausage topping", function() {
    var testTopping = new Topping("Sausage");
    var testPizza = new Pizza("medium", testTopping);
    expect(testPizza.size).to.eql("medium");
    expect(testPizza.topping.name).to.eql("Sausage");
  });

});

describe("Topping", function() {
  it("returns a pepperoni Topping object instance", function() {
    var testTopping = new Topping("Pepperoni");
    expect(testTopping.name).to.eql("Pepperoni");
  });
});
