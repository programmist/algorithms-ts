import { describe, expect, test } from "vitest";
import { Token, tokenize } from "./tokenizer";

describe("tokenizer", () => {
  test("tokenize without parens", () => {
    let tokens = tokenize("1 +   27/3* 400");
    const expected: Token[] = [
      { value: "1", type: "operand" },
      { value: "+", type: "operator" },
      { value: "27", type: "operand" },
      { value: "/", type: "operator" },
      { value: "3", type: "operand" },
      { value: "*", type: "operator" },
      { value: "400", type: "operand" },
    ];
    expect(expected).toEqual(tokens);
  });

  test("tokenize with parens", () => {
    let tokens = tokenize("( 1+ 30)  *  (2+8)");
    const expected: Token[] = [
      { value: "(", type: "parenthesis" },
      { value: "1", type: "operand" },
      { value: "+", type: "operator" },
      { value: "30", type: "operand" },
      { value: ")", type: "parenthesis" },
      { value: "*", type: "operator" },
      { value: "(", type: "parenthesis" },
      { value: "2", type: "operand" },
      { value: "+", type: "operator" },
      { value: "8", type: "operand" },
      { value: ")", type: "parenthesis" },
    ];
    expect(expected).toEqual(tokens);
  });
});
