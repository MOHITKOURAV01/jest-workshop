const { calculateFinalAmount } = require("../src/pricing");

describe("calculateFinalAmount tests", () => {
    test("returns subtotal when no coupon is used", () => {
        expect(calculateFinalAmount(100)).toBe(100);
    });

    test("applies 10% discount for SAVE10 coupon", () => {
        expect(calculateFinalAmount(200, "SAVE10")).toBe(180);
    });

    test("FLAT50 coupon doesn't make total negative", () => {
        expect(calculateFinalAmount(40, "FLAT50")).toBe(0);
    });

    test("throws error if subtotal is invalid", () => {
        expect(() => calculateFinalAmount(-1, "SAVE10")).toThrow("Invalid subtotal");
        expect(() => calculateFinalAmount("100", "SAVE10")).toThrow("Invalid subtotal");
    });

    test("coupon codes are case-insensitive", () => {
        expect(calculateFinalAmount(100, "save10")).toBe(90);
    });
});
