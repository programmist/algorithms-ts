import { describe, expect, test } from "vitest";
import { LinkedList } from ".";

describe("LinkedList", () => {
  test("isEmpty is true", () => {
    const list = new LinkedList<number>();
    expect(list.isEmpty()).toBe(true);
  });

  test("isEmpty is false", () => {
    const list = new LinkedList<number>();
    list.append(1);
    expect(list.isEmpty()).toBe(false);
  });

  test("append", () => {
    const arraysEqual = (expected: number[], actual: number[]) =>
      expected.every((val, index) => val === actual[index]);

    const list = new LinkedList<number>();
    list.append(1);
    let isEqual = arraysEqual([1], Array.from(list) as number[]);
    expect(isEqual).toBe(true);

    list.append(2);
    isEqual = arraysEqual([1, 2], Array.from(list) as number[]);
    expect(isEqual).toBe(true);

    list.append(3);
    isEqual = arraysEqual([1, 2, 3], Array.from(list) as number[]);
    expect(isEqual).toBe(true);
  });
});
