describe("MyfizzBuzz function", function () {
  beforeEach(function () {
    myfizzbuzz = new fizzBuzz();
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

// This is a different answer to the model answer and not sure why this one works and the DrinkAbout game one does not.
