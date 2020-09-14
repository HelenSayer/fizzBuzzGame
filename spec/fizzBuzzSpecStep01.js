// I want to test the fizzBuzz game.
// I want to test the fixxBuzz function.
// I want to result "fizzBuzz"
// So, I expect a number to be divisible by 3 and number is divisible by 5.

describe("fizzBuzz function", function () {
  it("should return 'FizzBuzz'", function () {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
});

// result in jasmine is 1 spec, 1 failure.
