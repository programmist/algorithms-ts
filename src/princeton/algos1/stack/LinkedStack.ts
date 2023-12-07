import IStack from "./IStack";
import { LinkedList } from "@/princeton/linked-list";

// TODO: test
export default abstract class LinkedStack<T> implements IStack<T> {
  push(item: T): void {
    throw new Error("Method not implemented.");
  }
  pop(): T | undefined {
    throw new Error("Method not implemented.");
  }
  peek(): T | undefined {
    throw new Error("Method not implemented.");
  }
  private stack = new LinkedList<T>();
}
