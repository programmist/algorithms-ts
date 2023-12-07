import Node from "./Node";

export default class LinkedList<T> {
  constructor(public head?: Node<T>, public tail?: Node<T>) {}
}
