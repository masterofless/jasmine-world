GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.testGreet = function() {
  var greeter = new myapp.Greeter();
  assertEquals("Hello World!", greeter.greet("World"));
  if (true) {
      assertTrue(true);
  }
  else
      assertTrue(!false);
};

GreeterTest.prototype.testGreetCruel = function() {
  var greeter = new myapp.Greeter();
  assertEquals("Hello Cruel World!", greeter.greet("Cruel World"));
  if (true) {
      assertTrue(true);
  }
  else
      assertTrue(!false);
  return true;
  alert ("this will never happen");
};
