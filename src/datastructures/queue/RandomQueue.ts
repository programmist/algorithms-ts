import Queue from "./Queue";

/**
 * Functions as a normal queue except that the dequeue operation returns an item
 * chosen at random from the queued items
 */
class RandomQueue<T> implements Queue<T> {
  enqueue(item: T): void {
    throw new Error("Method not implemented.");
  }
  dequeue(): T {
    throw new Error("Method not implemented.");
  }
  peek(): T {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
}
