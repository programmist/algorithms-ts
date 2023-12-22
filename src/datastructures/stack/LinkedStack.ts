import IStack from "./IStack";
import { LinkedList } from "../linked-list";

// TODO: test
export default class LinkedStack<T> implements IStack<T> {
  private list: LinkedList<T> = new LinkedList<T>();

  push(item: T): void {
    this.list.append(item);
  }
  pop(): T {
    if (this.size() === 0) {
      throw new Error("Empty Stack");
    }
    return this.list.removeTail();
  }
  peek(): T {
    return this.list.tail!.value;
  }
  size(): number {
    return this.list.length;
  }
}
