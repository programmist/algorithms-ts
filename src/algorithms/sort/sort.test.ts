import { describe, expect, test } from "vitest";
import { merge } from "./MergeSort";
import { SortType, Sortable, getSorter } from "./Sort";
import { partition } from "./QuickSort";

function testSort(list: Sortable[], sortType: SortType, expected: Sortable[]) {
  const sorter = getSorter(sortType)!;
  sorter.sort(list);
  expect(list).toEqual(expected);
}

describe("sorting algorithms", () => {
  test("selection sort numbers", () => {
    testSort(
      [3, 5, 99, 1, 8, 3, 0],
      SortType.SelectionSort,
      [0, 1, 3, 3, 5, 8, 99]
    );
  });

  test("selection sort strings", () => {
    testSort(
      ["m", "e", "r", "g", "e", "s", "o", "r", "t", "s"],
      SortType.SelectionSort,
      ["e", "e", "g", "m", "o", "r", "r", "s", "s", "t"]
    );
  });

  test("insertion sort numbers", () => {
    testSort(
      [3, 5, 99, 1, 8, 3, 0],
      SortType.InsertionSort,
      [0, 1, 3, 3, 5, 8, 99]
    );
  });

  test("insertion sort strings", () => {
    testSort(
      ["m", "e", "r", "g", "e", "s", "o", "r", "t", "s"],
      SortType.InsertionSort,
      ["e", "e", "g", "m", "o", "r", "r", "s", "s", "t"]
    );
  });

  test("shell sort numbers", () => {
    testSort(
      [3, 5, 99, 1, 8, 3, 0],
      SortType.ShellSort,
      [0, 1, 3, 3, 5, 8, 99]
    );
  });

  test("shell sort strings", () => {
    testSort(
      ["m", "e", "r", "g", "e", "s", "o", "r", "t", "s"],
      SortType.ShellSort,
      ["e", "e", "g", "m", "o", "r", "r", "s", "s", "t"]
    );
  });

  test("merge sort numbers", () => {
    testSort(
      [3, 5, 99, 1, 8, 3, 0],
      SortType.MergeSort,
      [0, 1, 3, 3, 5, 8, 99]
    );
  });

  test("merge sort strings", () => {
    testSort(
      ["m", "e", "r", "g", "e", "s", "o", "r", "t", "s"],
      SortType.MergeSort,
      ["e", "e", "g", "m", "o", "r", "r", "s", "s", "t"]
    );
  });
});

describe("Miscellaneous Sorting", () => {
  test("Merge two sorted string arrays", () => {
    const arr = ["e", "e", "g", "m", "r", "a", "c", "e", "r", "t"];
    const aux = [...arr];
    const expected = ["a", "c", "e", "e", "e", "g", "m", "r", "r", "t"];

    merge(arr, aux, 0, 4, 9);

    expect(arr).toEqual(expected);
  });

  test("Quicksort partition string", () => {
    const arr = ["k", "r", "a", "t", "e", "l", "e", "p", "u", "i", "c", "x"];
    const exp = ["e", "c", "a", "i", "e", "k", "l", "p", "u", "t", "r", "x"];
    partition(arr, 0, arr.length - 1);
    expect(arr).toEqual(exp);
  });

  test("Quicksort partition number", () => {
    const arr = [5, 7, 6, 1, 0, 9, 2, 8, 4];
    const exp = [0, 4, 2, 1, 5, 9, 6, 8, 7];
    partition(arr, 0, arr.length - 1);
    expect(arr).toEqual(exp);
  });
});
