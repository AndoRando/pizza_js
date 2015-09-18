describe("Pizza", function() {
  it("returns a large Pizza object instance", function() {
    var testPizza = new Pizza("large");
    expect(testPizza.size).to.eql("large");
  });
});
