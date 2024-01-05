import { getRandomInt, swap } from "../helpers";
import { Sortable } from "../sort/Sort";

export default function shuffle(list: Sortable[]) {
  for (let i = 1; i < list.length; i++) {
    const randomIndex = getRandomInt(0, i - 1);
    swap(list, i, randomIndex);
  }
}
