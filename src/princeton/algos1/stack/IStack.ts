export default interface IStack<T> {
  /**
   * Add an item onto the top of the stack
   * @param item
   */
  push(item: T): void;

  /**
   * Remove an item from the top of the stack
   */
  pop(): T | undefined;

  /**
   * Return a reference to the item at the top of hte stack
   */
  peek(): T | undefined;
}
