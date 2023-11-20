import { QuickUnion } from "./QuickUnion";

const components = new QuickUnion(10);

components.union(0, 1);

components.union(1, 2);

components.union(2, 8);

components.union(7, 8);

components.printRaw();
components.print();
