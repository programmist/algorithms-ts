import { describe, expect, test } from "vitest";
import LinkedStack from "./LinkedStack";

describe("LinkedStack positive tests", () => {
  test("push", () => {
    const stack = new LinkedStack<number>();
    stack.push(3);
    expect(stack.peek()).toBe(3);

    stack.push(2);
    expect(stack.peek()).toBe(2);

    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  test("pop", () => {
    const stack = new LinkedStack<number>();
    stack.push(3);
    expect(stack.size()).toBe(1);

    stack.push(2);
    expect(stack.size()).toBe(2);

    stack.push(1);
    expect(stack.size()).toBe(3);

    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(3);
  });
});
