import { describe, expect, test } from "vitest";
import { SortType, getSorter } from "./Sort";

describe("sorting algorithms", () => {
  test("selection sort", () => {
    const sorter = getSorter(SortType.SelectionSort)!;
    expect(sorter.sort([3, 5, 99, 1, 8, 3, 0])).toEqual([0, 1, 3, 3, 5, 8, 99]);
  });
});
