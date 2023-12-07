import IStack from "./IStack";

// TODO: test
export default class ArrayStack<T> implements IStack<T> {
  constructor(private stack: T[], private head: number, size: number) {
    stack = new Array<T>(size);
    head = 0;
  }

  push(item: T): void {
    this.stack[this.head] = item;
    this.head++;
  }

  pop(): T {
    this.head--;
    return this.stack[this.head];
  }

  peek(): T {
    return this.stack[this.head - 1];
  }
}
