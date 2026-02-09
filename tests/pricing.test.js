const { calculateFinalAmount } = require("../src/pricing");

describe("calculateFinalAmount tests", () => {
    test("returns subtotal when no coupon is used", () => {
        expect(calculateFinalAmount(100)).toBe(100);
    });
});
