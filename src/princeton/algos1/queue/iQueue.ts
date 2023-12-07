export default interface IQueue<T> {
  /**
   * Add an item to the head of the queue
   * @param item
   */
  add(item: T): void;

  /**
   * Remove and item from the tail of the queue
   */
  remove(): T;

  /**
   * Return a reference to the item at the head of the queue
   */
  peek(): T;
}
