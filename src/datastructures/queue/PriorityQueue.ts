import Queue from "./Queue";

/**
 * A queue that returns items in priority order from dequeue() regardless of the
 * order items were enqueued.
 *
 * Notes
 * - Priority can just be a scalar numerical value assigned to each item
 * - A binary heap should work well for this
 */
class PriorityQueue<T> implements Queue<T> {
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
