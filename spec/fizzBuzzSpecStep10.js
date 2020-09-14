describe("MyfizzBuzz function", function () {
  beforeEach(function () {
    fizzbuzz = new fizzBuzz();
  });
  describe("fizzBuzz function", function () {
    it("should return 'FizzBuzz'", function () {
      expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    it("should return 'Fizz'", function () {
      expect(fizzBuzz(3)).toBe("Fizz");
    });
    it("should return 'Buzz'", function () {
      expect(fizzBuzz(5)).toBe("Buzz");
    });
    it("should return Number", function () {
      expect(fizzBuzz(2)).toBe(2);
    });
  });
});
