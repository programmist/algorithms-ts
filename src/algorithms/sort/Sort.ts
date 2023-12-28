import InsertionSorter from "./InsertionSort";
import SelectionSorter from "./SelectionSort";
import ShellSorter from "./ShellSort";
import BubbleSorter from "./BubbleSort";
import MergeSorter from "./MergeSort";

export type Sortable = number | string;
export interface ArraySorter {
  // TODO: Deal with sorting in place vs returning new array
  /**
   * Take an array of items and sort in-place
   * @param list
   */
  sort(list: Sortable[]): void;
}

// https://www.geeksforgeeks.org/sorting-algorithms/
// https://www.toptal.com/developers/sorting-algorithms

export enum SortType {
  BubbleSort,
  SelectionSort,
  InsertionSort,
  ShellSort,
  HeapSort,
  MergeSort,
  QuickSort,
}

const sortAlgoMap = new Map<SortType, ArraySorter>([
  [SortType.BubbleSort, BubbleSorter],
  [SortType.SelectionSort, SelectionSorter],
  [SortType.InsertionSort, InsertionSorter],
  [SortType.ShellSort, ShellSorter],
  [SortType.MergeSort, MergeSorter],
]);

export function getSorter(name: SortType) {
  return sortAlgoMap.get(name);
}
