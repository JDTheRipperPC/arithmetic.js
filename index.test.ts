import * as optn from "./index";


test("Make addition operation", () => {
    const op = optn.operations.ADDITION;
    expect(op.operate(3, 3)).toBe(6);
});

test("Make substraction operation", () => {
    const op = optn.operations.SUBSTRACTION;
    expect(op.operate(3, 3)).toBe(0);
});

test("Make multiplication operation", () => {
    const op = optn.operations.MULTIPLICATION;
    expect(op.operate(3, 3)).toBe(9);
});

test("Make division operation", () => {
    const op = optn.operations.DIVISION;
    expect(op.operate(3, 3)).toBe(1);
});


test("Make remainder operation", () => {
    const op = optn.operations.REMAINDER;
    expect(op.operate(3, 3)).toBe(0);
});

test("Make exponentiation operation", () => {
    const op = optn.operations.EXPONENTIATION;
    expect(op.operate(3, 3)).toBe(27);
});

test("Make increment operation", () => {
    const op = optn.operations.INCREMENT;
    expect(op.operate(3)).toBe(4);
});

test("Make decrement operation", () => {
    const op = optn.operations.DECREMENT;
    expect(op.operate(3)).toBe(2);
});

test("Make unary negation operation. Positive to negative.", () => {
    const op = optn.operations.UNARY_NEGATION;
    expect(op.operate(3)).toBe(-3);
});

test("Make unary negation operation. Negative to posivite.", () => {
    const op = optn.operations.UNARY_NEGATION;
    expect(op.operate(-3)).toBe(3);
});

test("Make unary plus operation. Positive.", () => {
    const op = optn.operations.UNARY_PLUS;
    expect(op.operate(3)).toBe(3);
});

test("Make unary plus operation. Negative", () => {
    const op = optn.operations.UNARY_PLUS;
    expect(op.operate(-3)).toBe(-3);
});
