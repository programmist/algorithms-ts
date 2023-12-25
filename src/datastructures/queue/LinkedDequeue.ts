import { LinkedList } from "../linked-list";
import Dequeue from "./Dequeue";

export default class LinkedDequeue<T> implements Dequeue<T> {
  private list = new LinkedList<T>();

  addFirst(item: T): void {
    this.list.insert(0, item);
  }

  addLast(item: T): void {
    this.list.append(item);
  }

  removeFirst(): T {
    return this.list.removeHead();
  }

  removeLast(): T {
    return this.list.removeTail();
  }

  PeekHead(): T {
    return this.list.head!.value;
  }

  peekTail(): T {
    return this.list.tail!.value;
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }
}
