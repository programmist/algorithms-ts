export default interface Dequeue<T> {
  /**
   * Add an item to the head of the queue
   * @param item
   */
  addFirst(item: T): void;

  /**
   * Add an item to the tail of the queue
   * @param item
   */
  addLast(item: T): void;

  /**
   * Remove and item from the head of the queue
   */
  removeFirst(): T;

  /**
   * Remove and item from the tail of the queue
   */
  removeLast(): T;

  /**
   * Return a reference to the item at the head of the queue
   */
  PeekHead(): T;

  /**
   * Return a reference to the item at the tail of the queue
   */
  peekTail(): T;

  /**
   * Report whether queue is empty
   */
  isEmpty(): boolean;
}
