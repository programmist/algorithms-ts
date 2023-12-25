import { describe, expect, test } from "vitest";
import ArrayStack from "./ArrayStack";

describe("LinkedStack positive tests", () => {
  test("push", () => {
    const stack = new ArrayStack<number>();
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.size()).toBe(1);

    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.size()).toBe(2);

    stack.push(1);
    expect(stack.peek()).toBe(1);
    expect(stack.size()).toBe(3);
  });

  test("pop", () => {
    const stack = new ArrayStack<number>();
    stack.push(3);
    expect(stack.size()).toBe(1);

    stack.push(2);
    expect(stack.size()).toBe(2);

    stack.push(1);
    expect(stack.size()).toBe(3);

    expect(stack.pop()).toBe(1);
    expect(stack.size()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.size()).toBe(1);
    expect(stack.pop()).toBe(3);
    expect(stack.size()).toBe(0);
  });

  test("capacity doubles when full", () => {
    const stack = new ArrayStack<number>();
    loadStack(stack, 10);

    expect(stack.size()).toBe(10);
    expect(stack.capacity()).toBe(10);
    stack.push(11);
    expect(stack.size()).toBe(11);
    expect(stack.capacity()).toBe(20);
  });

  test("capacity halves when 1/4 empty", () => {
    const stack = new ArrayStack<number>();
    loadStack(stack, 11);

    expect(stack.size()).toBe(11);
    expect(stack.capacity()).toBe(20);

    // reduce to just above 1/4 of 20 (6)
    for (let i = 1; i <= 5; i++) {
      stack.pop();
    }

    expect(stack.size()).toBe(6);
    expect(stack.capacity()).toBe(20);
    stack.pop();
    expect(stack.size()).toBe(5);
    expect(stack.capacity()).toBe(10);
  });
});

/**
 * push `count` numbers onto the stack
 * @param stack
 * @param count
 */
function loadStack(stack: ArrayStack<number>, count: number) {
  for (let i = 1; i <= count; i++) {
    stack.push(i);
  }
}
