describe("A test suite", function() {

  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("can say hello", function() {
      expect(greeter.greet("You")).toBe("Hello You");
  });

  it("should fail", function() {
    expect(false).toBe(true);
  });
});
