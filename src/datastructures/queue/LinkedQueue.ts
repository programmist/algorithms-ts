import { LinkedList } from "../linked-list";
import Queue from "./Queue";

export default class LinkedQueue<T> implements Queue<T> {
  private list: LinkedList<T> = new LinkedList<T>();

  enqueue(item: T): void {
    this.list.append(item);
  }

  dequeue(): T {
    return this.list.removeHead();
  }

  peek(): T {
    return this.list.head!.value;
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }
}
