import Node from "./Node";

// TODO: Test
export default class LinkedList<T> implements List<T> {
  private length = 0;

  constructor(public head?: Node<T>, public tail?: Node<T>) {}

  append(element: T) {
    const node = new Node<T>(element);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
  }

  get(index: number): T {
    if (index < 0 || index >= this.length) {
      throw Error("Index out of bounds");
    } else {
      let count = 0;
      let current = this.head;
      while (count < index) {
        current = current!.next;
        count++;
      }
      return current!.value;
    }
  }

  isEmpty(): boolean {
    return this.head == undefined;
  }
}

/**
 * Very basic List API
 */
interface List<T> {
  append(e: T): void;
  get(index: number): T;
  isEmpty(): boolean;
}
