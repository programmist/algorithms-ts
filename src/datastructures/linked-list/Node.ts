export default class Node<T> {
  constructor(public value: T, public next?: Node<T>, public prev?: Node<T>) {}
}
