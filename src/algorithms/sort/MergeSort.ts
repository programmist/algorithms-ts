import { midpoint } from "../helpers";
import { ArraySorter, Sortable } from "./Sort";

class MergeSort implements ArraySorter {
  sort(list: Sortable[]) {
    const aux = [...list];
    this.mergesort(list, aux, 0, list.length - 1);
  }

  private mergesort(
    list: Sortable[],
    aux: Sortable[],
    low: number,
    high: number
  ) {
    // TODO: use insertion sort for smaller arrays
    // TODO: Test at what point insertion is faster than merge to get the best number
    const CUTOFF = 100;

    if (high <= low + CUTOFF - 1) {
      // Need to implement a version of insertion sort that takes an array + bounding indices
      // insertionSort(list, low, high);
      // return
    }
    if (high <= low) return;

    const mid = midpoint(low, high);
    this.mergesort(list, aux, low, mid);
    this.mergesort(list, aux, mid + 1, high);

    // lists are already sorted
    if (list[mid] < list[mid + 1]) return;

    merge(list, aux, low, mid, high);
  }
}

/**
 * Merge the two sorted halves of this array
 *
 * @param list
 * @param low starting index of first half
 * @param mid midpoint, representing end of first half
 *            (mid + 1 is beginning of second half)
 * @param high Ending index of second half
 */
export function merge(
  list: Sortable[],
  aux: Sortable[],
  low: number,
  mid: number,
  high: number
) {
  // TODO: Can this be done in-place with O(1) space?
  for (let x = low; x <= high; x++) {
    aux[x] = list[x];
  }

  let i = low;
  let j = mid + 1;
  for (let k = low; k <= high; k++) {
    // Exhausted 1st half
    if (i > mid) list[k] = aux[j++];
    // Exhausted 2nd half
    else if (j > high) list[k] = aux[i++];
    // Choose smaller item from current second half index
    else if (aux[j] < aux[i]) list[k] = aux[j++];
    // Choose smaller or equal item from current second half index
    else list[k] = aux[i++];
  }
}

const MergeSorter = new MergeSort();

export default MergeSorter;
