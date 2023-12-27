import { ArraySorter, Sortable } from "./Sort";
import { swap } from "../helpers";

class SelectionSort implements ArraySorter {
  sort(list: Sortable[]) {
    for (let i = 0; i < list.length; i++) {
      let min = i;
      for (let j = i + 1; j < list.length; j++) {
        if (list[j] < list[min]) min = j;
      }
      swap(list, i, min);
    }
  }
}

const SelectionSorter = new SelectionSort();
export default SelectionSorter;
