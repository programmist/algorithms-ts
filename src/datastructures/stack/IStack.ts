export default interface IStack<T> {
  /**
   * Add an item onto the top of the stack
   * @param item
   */
  push(item: T): void;

  /**
   * Remove an item from the top of the stack
   */
  pop(): T;

  /**
   * Return a reference to the item at the top of the stack
   */
  peek(): T;

  /**
   * Returns the current size of the stack
   */
  size(): number;
}
