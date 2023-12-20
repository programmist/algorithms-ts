import { describe, expect, test } from "vitest";
import { LinkedList } from ".";

describe("LinkedList positive tests", () => {
  test("constructor", () => {
    const list = new LinkedList<number>([3, 9, 4]);
    expect([3, 9, 4]).toEqual(Array.from(list));
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
    expect([1]).toEqual(Array.from(list));

    list.append(2);
    expect([1, 2]).toEqual(Array.from(list));

    list.append(3);
    expect([1, 2, 3]).toEqual(Array.from(list));
  });

  test("insert", () => {
    const list = new LinkedList<number>();
    list.insert(0, 2);
    expect([2]).toEqual(Array.from(list));

    list.insert(0, 1);
    expect([1, 2]).toEqual(Array.from(list));

    list.insert(2, 4);
    expect([1, 2, 4]).toEqual(Array.from(list));

    list.insert(2, 3);
    expect([1, 2, 3, 4]).toEqual(Array.from(list));

    list.insert(1, 1.5);
    expect([1, 1.5, 2, 3, 4]).toEqual(Array.from(list));
  });

  test("removeHead", () => {
    const list = new LinkedList<number>([1, 2, 3]);

    expect(list.removeHead()).toBe(1);
    expect([2, 3]).toEqual(Array.from(list));

    expect(list.removeHead()).toBe(2);
    expect([3]).toEqual(Array.from(list));

    expect(list.removeHead()).toBe(3);
    expect(Array.from(list).length).toBe(0);
  });

  test("removeTail", () => {
    const list = new LinkedList<number>([1, 2, 3]);

    expect(list.removeTail()).toBe(3);
    expect([1, 2]).toEqual(Array.from(list));

    expect(list.removeTail()).toBe(2);
    expect([1]).toEqual(Array.from(list));

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
