import { getRandomInt, swap } from "../helpers";
import shuffle from "../shuffle/Shuffle";
import { ArraySorter, Sortable } from "./Sort";

class QuickSort implements ArraySorter {
  sort(list: Sortable[]) {
    shuffle(list);
    partition(list, 0, list.length - 1);
    // TODO: sort
  }
}

/**
 * * Partition the list in-place and return the pivot index
 * @returns pivot index
 */
export function partition(list: Sortable[], lo: number, hi: number) {
  let i = lo;
  let j = hi + 1;
  while (true) {
    // scan i right until value >= lo value
    while (list[++i] < list[lo]) {
      if (i === hi) break;
    }
    // scan j left until value <= lo value
    while (list[--j] > list[lo]) {
      if (j == lo) break;
    }

    if (i >= j) break;
    swap(list, i, j);
  }
  swap(list, lo, j);
  return j;
}

/**
 * Alternate partition implementation
 *
 * @returns pivot index
 */
export function partition2(list: Sortable[], lo: number, hi: number) {
  const pivotIndex = getRandomInt(0, list.length - 1);

  // move pivot to start of array (keep track of it)
  swap(list, lo, pivotIndex);

  // current end of <= pivot partition
  let less = lo;
  const pivotVal = list[lo];
  for (let i = 0; i <= hi; i++) {
    if (list[i] <= pivotVal) {
      swap(list, less + 1, i);
      less++;
    }
  }
  // put pivot back in place
  swap(list, lo, less);

  // return pivot index;
  return less;
}
