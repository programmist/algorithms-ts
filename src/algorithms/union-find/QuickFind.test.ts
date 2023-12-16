import { QuickFind } from "./QuickFind";
import { expect, test, describe } from "vitest";

// test stub

test.todo("test...", () => {});

const components = new QuickFind(10);
components.forEach((c, i) => {
  c === i
    ? console.log(`PASS: ${c} === ${i}`)
    : console.error(`FAIL: ${c} !== ${i}`);
});

components.union(0, 1);
components.print();

components.union(1, 2);
components.print();

components.union(8, 9);
components.print();

components.union(7, 8);
components.print();
