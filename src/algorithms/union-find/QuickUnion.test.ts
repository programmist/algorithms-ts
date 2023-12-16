import { QuickUnion } from "./QuickUnion";
import { expect, test } from "vitest";

// test stub
test.todo("test...", () => {});

const components = new QuickUnion(10);
const printState = () => {
  components.printRaw();
  components.print();
};

components.union(0, 1);
printState();

components.union(1, 2);

components.union(2, 8);
printState();

components.union(7, 2);

components.union(6, 4);
printState();

components.union(5, 6);

components.union(0, 2); // should be no op

components.union(5, 0); // 5's root (4) attaches to 0's root (8)
printState();
