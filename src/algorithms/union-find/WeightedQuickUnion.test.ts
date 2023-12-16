import { WeightedQuickUnion } from "./WeightedQuickUnion";
import { expect, test } from "vitest";

// test stub
test.todo("test...", () => {});

const components = new WeightedQuickUnion(10);
const printState = () => {
  components.printRaw();
  components.print();
};

components.union(4, 3);
printState();

components.union(3, 8);
printState();

components.union(6, 5);
printState();

components.union(9, 4);
printState();

components.union(2, 1);
printState();

components.union(5, 0);
printState();

components.union(7, 2);
printState();

components.union(6, 1);
printState();

// All trees combined
// First union operation that causes compression
components.union(7, 3);
printState();

// trees are already combined, but this should compress further
components.union(3, 8);
printState();

// Fully compressed
components.union(1, 9);
printState();
