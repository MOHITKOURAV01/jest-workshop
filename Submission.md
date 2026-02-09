# Jest Workshop Submission

## Student Details
- Name: Mohit Kourav
- Roll Number: 2024-B-28012004
- GitHub Username: MOHITKOURAV01

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: `returns subtotal when no coupon is used`
**What it protects against:** Prevents cases where the function might apply a default discount or modify the price even when the user hasn't provided any coupon code.

---

### 2. Test Name: `applies 10% discount for SAVE10 coupon`
**What it protects against:** Ensures that the core logic for percentage-based discounts is working correctly and applying exactly 10% off the total.

---

### 3. Test Name: `FLAT50 coupon doesn't make total negative`
**What it protects against:** Prevents a critical bug where applying a fixed-value discount on a low subtotal could result in a negative final amount, which would be financially incorrect.

---

### 4. Test Name: `throws error if subtotal is invalid`
**What it protects against:** Guarantees that the application handles bad data (like negative numbers or non-numeric strings) gracefully by throwing an error instead of calculating nonsense values.

---

### 5. Test Name: `coupon codes are case-insensitive`
**What it protects against:** Prevents user frustration where a valid coupon might be rejected just because it was typed in lowercase (e.g., 'save10' instead of 'SAVE10').

---

## CI Pipeline (if implemented)
- Did CI pass successfully? (Yes / No) Yes
- GitHub Actions Run URL: https://github.com/MOHITKOURAV01/jest-workshop/actions

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?
I learned how automated tests can catch edge cases like negative totals and how CI ensures code quality automatically on every push.
