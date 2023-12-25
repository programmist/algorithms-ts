import { ArraySorter } from "./Sort";

/**
 * Swap the values of two indices of the given array, in place
 * @param list
 * @param i
 * @param j
 */
function swap<T>(list: T[], i: number, j: number) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

class SelectionSort implements ArraySorter {
  sort(list: number[]): number[] {
    for (let i = 0; i < list.length; i++) {
      let min = i;
      for (let j = i + 1; j < list.length; j++) {
        if (list[j] < list[min]) min = j;
      }
      swap(list, i, min);
    }
    return list;
  }
}

const SelectionSorter = new SelectionSort();
export default SelectionSorter;
