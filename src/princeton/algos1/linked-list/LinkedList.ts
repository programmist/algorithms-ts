import Node from "./Node";

// TODO: Test
export default class LinkedList<T> {
  private length = 0;
  public head?: Node<T>;
  public tail?: Node<T>;

  constructor(list?: T[]) {
    if (list) {
      list.forEach((element: T) => {
        this.append(element);
      });
    }
  }

  private getNode(index: number): Node<T> | undefined {
    let count = 0;
    let current = this.head;
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
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  /**
   * Add element to the given index in the list
   * @param index
   * @param element
   */
  public insert(index: number, element: T): void {
    if (index < 0 || index > this.length) {
      throw Error("Index out of bounds");
    }

    if (!this.head) {
      this.append(element);
    } else {
      const insertedNode = new Node<T>(element);
      if (index === 0) {
        insertedNode.next = this.head;
        this.head.prev = insertedNode;
        this.head = insertedNode;
      } else if (index === this.length) {
        this.tail!.next = insertedNode;
        insertedNode.prev = this.tail;
        this.tail = insertedNode;
      } else {
        const nodeAtIndex = this.getNode(index);
        nodeAtIndex!.prev!.next = insertedNode;
        insertedNode.next = nodeAtIndex;
      }
      this.length++;
    }
  }

  public removeHead(): T {
    if (this.isEmpty()) {
      throw Error("List is empty");
    }

    const val = this.head!.value;
    if (this.length === 1) {
      this.head = this.tail = undefined;
    } else {
      this.head = this.head!.next;
      this.head!.prev = undefined;
    }
    this.length--;
    return val;
  }

  public removeTail(): T {
    if (this.isEmpty()) {
      throw Error("List is empty");
    }

    const val = this.tail!.value;
    if (this.length === 1) {
      this.head = this.tail = undefined;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = undefined;
    }
    this.length--;
    return val;
  }

  get(index: number): T {
    if (this.isEmpty()) {
      throw Error("List is empty");
    }
    if (index < 0 || index >= this.length) {
      throw Error("Index out of bounds");
    }

    return this.getNode(index)!.value;
  }

  isEmpty(): boolean {
    return !this.head;
  }

  [Symbol.iterator]() {
    let current = this.head;
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
