export default class Node<T> {
  constructor(public item: T, public next?: Node<T>) {}
}
