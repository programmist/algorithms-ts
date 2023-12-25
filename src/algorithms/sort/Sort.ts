import SelectionSorter from "./SelectionSort";
import BubbleSorter from "./bubblesort";

export interface ArraySorter {
  /**
   * Take an array of items and return a new, sorted array
   * @param list
   */
  sort(list: number[]): number[];
}

// https://www.geeksforgeeks.org/sorting-algorithms/
// https://www.toptal.com/developers/sorting-algorithms

export enum SortType {
  BubbleSort,
  SelectionSort,
  InsertionSort,
  HeapSort,
  MergeSort,
  QuickSort,
}

const sortAlgoMap = new Map<SortType, ArraySorter>([
  [SortType.BubbleSort, BubbleSorter],
  [SortType.SelectionSort, SelectionSorter],
]);

export function getSorter(name: SortType) {
  return sortAlgoMap.get(name);
}
