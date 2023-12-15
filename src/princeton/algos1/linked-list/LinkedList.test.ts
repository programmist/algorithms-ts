import { describe, expect, test } from "vitest";
import { LinkedList } from ".";

const arraysEqual = (expected: number[], actual: number[]) => {
  const outer = expected.length > actual.length ? expected : actual;
  const inner = outer == expected ? actual : expected;
  return outer.every((val, index) => {
    return val === inner[index];
  });
};

describe("LinkedList positive tests", () => {
  test("constructor", () => {
    const list = new LinkedList<number>([3, 9, 4]);
    let isEqual = arraysEqual([3, 9, 4], Array.from(list) as number[]);
    expect(isEqual).toBe(true);
  });

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

  test("removeHead", () => {
    const list = new LinkedList<number>([1, 2, 3]);

    expect(list.removeHead()).toBe(1);
    let isEqual = arraysEqual([2, 3], Array.from(list) as number[]);
    expect(isEqual).toBe(true);

    expect(list.removeHead()).toBe(2);
    isEqual = arraysEqual([3], Array.from(list) as number[]);
    expect(isEqual).toBe(true);

    expect(list.removeHead()).toBe(3);
    expect(Array.from(list).length).toBe(0);
  });

  test("removeTail", () => {
    const list = new LinkedList<number>([1, 2, 3]);

    expect(list.removeTail()).toBe(3);
    let isEqual = arraysEqual([1, 2], Array.from(list) as number[]);
    expect(isEqual).toBe(true);

    expect(list.removeTail()).toBe(2);
    isEqual = arraysEqual([1], Array.from(list) as number[]);
    expect(isEqual).toBe(true);

    expect(list.removeTail()).toBe(1);
    expect(Array.from(list).length).toBe(0);
  });

  test("get", () => {
    const list = new LinkedList<number>([1, 2, 3]);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
  });
});

// TODO LinkedList negative tests
describe.todo("LinkedList negative tests", () => {});
