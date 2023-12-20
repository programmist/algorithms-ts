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
});
