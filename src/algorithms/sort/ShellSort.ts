import { ArraySorter, Sortable } from "./Sort";
import { swap } from "./helpers";

class ShellSort implements ArraySorter {
  sort(list: Sortable[]): Sortable[] {
    let h = 1;

    // get start of sequence
    while (h < list.length / 3) h = 3 * h + 1;

    while (h >= 1) {
      for (let i = h; i < list.length; i++) {
        for (let j = i; j >= h && list[j] < list[j - h]; j -= h) {
          swap(list, j, j - h);
        }
      }
      h = Math.floor(h / 3);
    }
    return list;
  }
}

const ShellSorter = new ShellSort();
export default ShellSorter;
