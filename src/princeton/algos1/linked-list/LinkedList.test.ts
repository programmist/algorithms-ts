import { describe, expect, test } from "vitest";
import { LinkedList } from ".";

const arraysEqual = (expected: number[], actual: number[]) =>
  expected.every((val, index) => val === actual[index]);

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

  test("insert", () => {
    const list = new LinkedList<number>();
    list.insert(0, 2);
    let isEqual = arraysEqual([2], Array.from(list) as number[]);
    expect(isEqual).toBe(true);

    list.insert(0, 1);
    isEqual = arraysEqual([1, 2], Array.from(list) as number[]);
    expect(isEqual).toBe(true);

    list.insert(2, 4);
    isEqual = arraysEqual([1, 2, 4], Array.from(list) as number[]);
    expect(isEqual).toBe(true);

    list.insert(2, 3);
    isEqual = arraysEqual([1, 2, 3, 4], Array.from(list) as number[]);
    expect(isEqual).toBe(true);

    list.insert(1, 1.5);
    isEqual = arraysEqual([1, 1.5, 2, 3, 4], Array.from(list) as number[]);
    expect(isEqual).toBe(true);
  });
});
