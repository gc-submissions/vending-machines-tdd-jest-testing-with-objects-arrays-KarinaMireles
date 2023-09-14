const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  it("formats currency correctly", () => {
    expect(formatCurrency(0)).toEqual("$0.00");
    expect(formatCurrency(1)).toEqual("$1.00");
    expect(formatCurrency(1.5)).toEqual("$1.50");
    expect(formatCurrency(0.01)).toEqual("$0.01");
    expect(formatCurrency(527.6789)).toEqual("$527.68");
    expect(formatCurrency(-1)).toEqual("-$1.00");
    expect(formatCurrency(15)).toEqual("$15.00");
    expect(formatCurrency(-12.345)).toEqual("-$12.35");
  });
});

describe("getCoins", () => {
  it("calculates coins correctly", () => {
    expect(getCoins(32)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
    expect(getCoins(10)).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0,
    });
    expect(getCoins(27)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2,
    });
    expect(getCoins(68)).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    });
    expect(getCoins(0)).toEqual({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    });
    expect(getCoins(5)).toEqual({
      quarters: 0,
      dimes: 0,
      nickels: 1,
      pennies: 0,
    });
  });
});
