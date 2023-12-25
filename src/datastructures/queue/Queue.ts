export default interface Queue<T> {
  /**
   * Add an item to the head of the queue
   * @param item
   */
  enqueue(item: T): void;

  /**
   * Remove and item from the tail of the queue
   */
  dequeue(): T;

  /**
   * Return a reference to the item at the head of the queue
   */
  peek(): T;

  /**
   * Report whether queue is empty
   */
  isEmpty(): boolean;
}
