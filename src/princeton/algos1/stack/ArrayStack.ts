import IStack from "./IStack";

// TODO: test
export default class ArrayStack<T> implements IStack<T> {
  constructor(private stack: Array<T>, private head: number, size: number) {
    stack = new Array(size);
    head = 0;
  }

  isEmpty() {
    return this.head === 0;
  }

  push(item: T): void {
    this.stack[this.head] = item;
    this.head++;
  }

  pop(): T {
    if (this.isEmpty()) throw Error("stack empty");

    this.head--;
    const val = this.stack[this.head];
    this.stack[this.head] = undefined as T;
    return val;
  }

  peek(): T {
    if (this.isEmpty()) throw Error("stack empty");

    return this.stack[this.head - 1];
  }
}
