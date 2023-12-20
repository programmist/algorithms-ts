type TokenType = "operator" | "operand" | "parenthesis";

export class Token {
  constructor(public value: string, public type: TokenType) {}
}

const isNumber = /^\-?\d+(\.\d+)?$/;
const isSingleSpace = /^\s$/;

const operators = ["+", "-", "*", "/", "%"] as const;

export type Operator = (typeof operators)[number];

/**
 * Get the relative precedence of any operator
 */
const precedenceMap = operators.reduce(
  (map, op, i) => map.set(op, i > 1 ? 2 : 1),
  new Map<Operator, number>()
);

const isOperator = (char: Operator) => operators.includes(char);
const isOperand = (char: string) => isNumber.test(char);
const isParen = (char: string) => char === "(" || char === ")";
const isSpace = (char: string) => isSingleSpace.test(char);

/**
 * Separate operators from operands
 *
 * @param expr
 * @returns list of Tokens
 */
export function tokenize(expr: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < expr.length) {
    const char = expr[i];
    if (isSpace(char)) {
      // skip spaces
      while (isSpace(expr[i + 1])) i++;
    } else if (isOperator(char as Operator)) {
      tokens.push(new Token(char, "operator"));
    } else if (isOperand(char)) {
      const num = [];
      num.push(expr[i]);
      while (isOperand(expr[i + 1])) {
        i++;
        num.push(expr[i]);
      }
      tokens.push(new Token(num.join(""), "operand"));
    } else if (isParen(char)) {
      tokens.push(new Token(char, "parenthesis"));
    } else {
      throw new Error(
        `Invalid character: ${char}. Expressions can only include numerical operands, parentheses,
         or the mathematical operators: ${operators.join(", ")}`
      );
    }
    i++;
  }
  return tokens;
}
