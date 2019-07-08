/**
 * Sum two numeric operands (a + b).
 * @param a numeric operand.
 * @param b numeric operand.
 */
export function addition(a: number, b: number): number {
    return a + b;
}

/**
 * Decrement a numeric operand (a--).
 * @param a numeric operand.
 */
export function decrement(a: number): number {
    a--;
    return a;
}

/**
 * Divide two numeric operands (a / b).
 * @param a numeric operand, divident.
 * @param b numeric operand, divisor.
 */
export function division(a: number, b: number): number {
    return a / b;
}

/**
 * Exponentation two numeric operands (a ** b).
 * @param a numeric operand, base.
 * @param b numeric operand, exponent.
 */
export function exponentiation(a: number, b: number): number {
    return a ** b;
}

/**
 * Increment a numeric operand (a--).
 * @param a numeric operand.
 */
export function increment(a: number): number {
    a++;
    return a;
}

/**
 * Multiplicate two numeric operands (a * b).
 * @param a numeric operand.
 * @param b numeric operand.
 */
export function multiplication(a: number, b: number): number {
    return a * b;
}

/**
 * Substract two numeric operands (a - b).
 * @param a numeric operand.
 * @param b numeric operand.
 */
export function substraction(a: number, b: number): number {
    return a - b;
}

/**
 * Modulus reminder two numeric operands (a % b).
 * @param a numeric operand.
 * @param b numeric operand.
 */
export function remainder(a: number, b: number): number {
    return a % b;
}

/**
 * Unary negation numeric operand (-a).
 * @param a numeric operand.
 */
export function unaryNegation(a: number): number {
    return -a;
}

/**
 * Unary plus numeric operand (+a).
 * @param a numeric operand.
 */
export function unaryPlus(a: number): number {
    return +a;
}

/**
 * Arithmetic operations:
 * - ADDITION
 * - DECREMENT
 * - DIVISION
 * - EXPONENTATION
 * - INCREMENT
 * - MULTIPLICATION
 * - REMAINDER
 * - SUBSTRACTION
 * - UNARY_NEGATION
 * - UNARY_PLUS
 *
 * Each operation got 3 attributes and 1 function.
 * - OPERATION.entity_decimal (attr).
 * - OPERATION.entity_hex (attr).
 * - OPERATION.entity_named (attr).
 * - OPERATION.operate (function).
 */
export const operations = {
    ADDITION: {
        entity_decimal: "&#43;",
        entity_hex: "&#x2B;",
        entity_named: "&plus;",
        operate: addition,
    },
    DECREMENT: {
        entity_decimal: "&#8722;&#8722;",
        entity_hex: "&#x2212;&#x2212;",
        entity_named: "&minus;&minus;",
        operate: decrement,
    },
    DIVISION: {
        entity_decimal: "&#247;",
        entity_hex: "&#xF7;",
        entity_named: "&divide;",
        operate: division,
    },
    EXPONENTIATION: {
        entity_decimal: "&#8743;",
        entity_hex: "&#x2227;",
        entity_named: "&and;",
        operate: exponentiation,
    },
    INCREMENT: {
        entity_decimal: "&#43;&#43;",
        entity_hex: "&#x2B;&#x2B;",
        entity_named: "&plus;&plus;",
        operate: increment,
    },
    MULTIPLICATION: {
        entity_decimal: "&#215;",
        entity_hex: "&#xD7;",
        entity_named: "&times;",
        operate: multiplication,
    },
    REMAINDER: {
        entity_decimal: "&#37;",
        entity_hex: "&#x25;",
        entity_named: "&percnt;",
        operate: remainder,
    },
    SUBSTRACTION: {
        entity_decimal: "&#8722;",
        entity_hex: "&#x2212;",
        entity_named: "&minus;",
        operate: substraction,
    },
    UNARY_NEGATION: {
        entity_decimal: "&#8722;",
        entity_hex: "&#x2212;",
        entity_named: "&minus;",
        operate: unaryNegation,
    },
    UNARY_PLUS: {
        entity_decimal: "&#43;",
        entity_hex: "&#x2B;",
        entity_named: "&plus;",
        operate: unaryPlus,
    },
};
