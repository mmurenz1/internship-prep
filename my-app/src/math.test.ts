import { add, multiply } from "./math";

test("add 2 + 3 should be equal 5", () => {
    expect(add(2,3)).toBe(5);
});

test("multiply 3 x 4 should equal 12", () => {
    expect(multiply(3,4)).toBe(12);
});

test("add should fail if result is wrong", () => {
    expect(add(2,3)).not.toBe(10);
});