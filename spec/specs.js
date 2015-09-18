describe("Pizza", function() {
  it("returns a large Pizza object instance", function() {
    var testPizza = new Pizza("large");
    expect(testPizza.size).to.eql("large");
  });
});

describe("Topping", function() {
  it("returns a pepperoni Topping object instance", function() {
    var testTopping = new Topping("Pepperoni");
    expect(testTopping.name).to.eql("Pepperoni");
  });
});
