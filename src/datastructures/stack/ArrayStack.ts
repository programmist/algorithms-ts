import IStack from "./IStack";

export default class ArrayStack<T> implements IStack<T> {
  private readonly DEFAULT_CAPACITY = 10;
  private array = new Array<T>(this.DEFAULT_CAPACITY);
  private headIndex = 0;

  /**
   * Resize the backing array using the following algorithm:
   * 1. When the size of the array reaches capacity double array capacity
   * 2. When the size of the array is reduced to 1/4 of capacity half array capacity
   *
   * @param capacity
   * @returns
   */
  private resize(capacity: number) {
    if (capacity < this.DEFAULT_CAPACITY) return;

    const newArray = new Array(capacity);
    const iterations = Math.min(capacity, this.array.length);
    for (let i = 0; i < iterations; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
  }

  /**
   * Total capacity of the stack
   * @returns
   */
  capacity() {
    return this.array.length;
  }

  /**
   * Current size of the stack
   * @returns
   */
  size(): number {
    return this.headIndex;
  }

  isEmpty() {
    return this.headIndex === 0;
  }

  push(item: T): void {
    if (this.headIndex === this.array.length) {
      this.resize(Math.ceil(this.array.length * 2));
    }

    this.array[this.headIndex] = item;
    this.headIndex++;
  }

  pop(): T {
    if (this.isEmpty()) throw Error("stack empty");

    this.headIndex--;
    const val = this.array[this.headIndex];
    this.array[this.headIndex] = undefined as T;

    if (this.headIndex <= this.array.length / 4) {
      this.resize(Math.ceil(this.array.length / 2));
    }

    return val;
  }

  peek(): T {
    if (this.isEmpty()) throw Error("stack empty");

    return this.array[this.headIndex - 1];
  }
}
