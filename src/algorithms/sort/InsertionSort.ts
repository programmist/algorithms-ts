import { ArraySorter, Sortable } from "./Sort";
import { swap } from "./helpers";

class InsertionSort implements ArraySorter {
  sort(list: Sortable[]): Sortable[] {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j > 0; j--) {
        if (list[j] < list[j - 1]) swap(list, j, j - 1);
        else break;
      }
    }
    return list;
  }
}

const InsertionSorter = new InsertionSort();
export default InsertionSorter;
