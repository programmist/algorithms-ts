import Node from "./Node";

// TODO: Test
export default class LinkedList<T> {
  private _length = 0;
  private _head?: Node<T>;
  private _tail?: Node<T>;

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  constructor(list?: T[]) {
    if (list) {
      list.forEach((element: T) => {
        this.append(element);
      });
    }
  }

  private getNode(index: number): Node<T> | undefined {
    let count = 0;
    let current = this._head;
    while (count < index) {
      current = current!.next;
      count++;
    }
    return current;
  }

  /**
   * Add element to end of list
   * @param element
   */
  public append(element: T) {
    const node = new Node<T>(element);
    if (!this._head) {
      this._head = node;
      this._tail = this._head;
    } else {
      this._tail!.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    this._length++;
  }

  /**
   * Add element to the given index in the list
   * @param index
   * @param element
   */
  public insert(index: number, element: T): void {
    if (index < 0 || index > this._length) {
      throw Error("Index out of bounds");
    }

    if (!this._head) {
      this.append(element);
    } else {
      const insertedNode = new Node<T>(element);
      if (index === 0) {
        insertedNode.next = this._head;
        this._head.prev = insertedNode;
        this._head = insertedNode;
      } else if (index === this._length) {
        this._tail!.next = insertedNode;
        insertedNode.prev = this._tail;
        this._tail = insertedNode;
      } else {
        const nodeAtIndex = this.getNode(index);
        nodeAtIndex!.prev!.next = insertedNode;
        insertedNode.next = nodeAtIndex;
      }
      this._length++;
    }
  }

  public removeHead(): T {
    if (this.isEmpty()) {
      throw Error("List is empty");
    }

    const val = this._head!.value;
    if (this._length === 1) {
      this._head = this._tail = undefined;
    } else {
      this._head = this._head!.next;
      this._head!.prev = undefined;
    }
    this._length--;
    return val;
  }

  public removeTail(): T {
    if (this.isEmpty()) {
      throw Error("List is empty");
    }

    const val = this._tail!.value;
    if (this._length === 1) {
      this._head = this._tail = undefined;
    } else {
      this._tail = this._tail!.prev;
      this._tail!.next = undefined;
    }
    this._length--;
    return val;
  }

  get(index: number): T {
    if (this.isEmpty()) {
      throw Error("List is empty");
    }
    if (index < 0 || index >= this._length) {
      throw Error("Index out of bounds");
    }

    return this.getNode(index)!.value;
  }

  isEmpty(): boolean {
    return !this._head;
  }

  [Symbol.iterator]() {
    let current = this._head;
    return {
      next: () => {
        const val = { done: !current, value: current?.value };
        current = current?.next;
        return val;
      },
    };
  }
}

// private removeNode(index: number): Node<T> {
//   const node = this.getNode(index);
//   if (this.length === 1) {
//     //
//   } else {
//     //
//   }
//   const val = node!.value;
//   node?.prev = node?.next;
// }

// public remove(index: number): T {
//   if (index < 0 || index >= this.length) {
//     throw Error("Index out of bounds");
//   }

//   if (this.isEmpty()) {
//     throw Error("List is empty");
//   }

//   if (index === 0) {
//     return this.removeHead();
//   } else if (index === this.length - 1) {
//     return this.removeTail();
//   } else {
//     return this.removeNode(index)!.value;
//   }
// }

/**
 * Very basic List API
 */
// interface List<T> {
//   append(e: T): void;
//   insert(index: number): void;
//   remove(index: number): T;
//   get(index: number): T;
//   isEmpty(): boolean;
// }
