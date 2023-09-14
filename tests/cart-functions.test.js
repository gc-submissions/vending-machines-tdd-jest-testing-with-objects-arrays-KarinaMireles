const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  it("calculates change correctly", () => {
    expect(calculateChange(5, 6)).toEqual(1);
    expect(calculateChange(12.3, 13.03)).toBeCloseTo(0.73);
    expect(calculateChange(20, 10)).toEqual("insufficient payment");
  });
});

describe("isSufficientPayment", () => {
  it("checks sufficient payment correctly", () => {
    expect(isSufficientPayment(5, 6)).toBe(true);
    expect(isSufficientPayment(10, 7)).toBe(false);
    expect(isSufficientPayment(3, 3)).toBe(true);
    expect(isSufficientPayment(0, 0)).toBe(true);
  });
});

describe("calculateTotal", () => {
  it("calculates total correctly", () => {
    const itemsArray = [
      { name: "Item 1", price: 4.99 },
      { name: "Item 2", price: 3.5 },
      { name: "Item 3", price: 12.99 },
    ];
    expect(calculateTotal(itemsArray)).toEqual(21.48);
    const emptyArray = [];
    expect(calculateTotal(emptyArray)).toEqual(0);
  });
});

describe("addItem", () => {
  it("adds items correctly", () => {
    const itemsArray = [];
    addItem(itemsArray, "Beans", 3);
    expect(itemsArray).toStrictEqual([{ name: "Beans", price: 3 }]);
    addItem(itemsArray, "Rice", 5);
    expect(itemsArray).toStrictEqual([
      { name: "Beans", price: 3 },
      { name: "Rice", price: 5 },
    ]);
  });
});

describe("removeItem", () => {
  it("removes items correctly", () => {
    const itemsArray = [
      { name: "Item 1", price: 4.99 },
      { name: "Item 2", price: 3.5 },
      { name: "Item 3", price: 12.99 },
    ];
    removeItem(itemsArray, 0);
    expect(itemsArray).toStrictEqual([
      { name: "Item 2", price: 3.5 },
      { name: "Item 3", price: 12.99 },
    ]);
    removeItem(itemsArray, 1);
    expect(itemsArray).toStrictEqual([{ name: "Item 2", price: 3.5 }]);
  });
});
