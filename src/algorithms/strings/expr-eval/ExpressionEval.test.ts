import { describe, expect, test } from "vitest";
import { evaluateInfix } from "./ExpressionEval";

describe("ExpressionEval", () => {
  test("evaluateInfix without parens", () => {
    expect(evaluateInfix("1 + 4 / 2 + 1")).toBe(4);
  });

  // TODO: enable when algorithm is updated to handle parens
  test.todo("evaluateInfix with parens", () => {
    expect(evaluateInfix("(1 + 2) * (2 + 1)")).toBe(9);
  });
});
