/**
 * Weighted QuickUnion (recursive implementation)
 * 1. Balances tree height by always linking the root of the shortest tree
 * to the root of the tallest tree in any union operation.
 *
 * 2. Implements path compression in the `findRoot` function
 */
export class WeightedQuickUnion {
  private ids: number[];
  private size: number[];

  constructor(size: number) {
    this.ids = Array.from({ length: size }, (_, i) => i);
    this.size = new Array(size).fill(1);
  }

  union(p: number, q: number) {
    console.log(`union(${p},${q})`);

    const rootP = this.findRoot(p);
    const rootQ = this.findRoot(q);
    if (rootP === rootQ) return;

    // Can this be simplified?
    if (this.size[rootP] < this.size[rootQ]) {
      this.ids[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    } else {
      this.ids[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    }
  }

  connected(p: number, q: number): boolean {
    return this.findRoot(q) === this.findRoot(p);
  }

  findRoot(node: number): number {
    let parent = this.ids[node];
    if (parent === node) {
      return parent;
    } else {
      const root = this.findRoot(parent);
      this.ids[node] = root; // compress
      return root;
    }
  }

  /**
   * Print the backing array
   */
  printRaw() {
    console.log(this.ids);
  }

  /**
   * Print text-based tree structures with roots on the left
   */
  print() {
    const visited = new Array(this.ids.length).fill(false);
    for (let node = 0; node < this.ids.length; node++) {
      if (!visited[node]) {
        console.log(this.printNode(node, visited));
      }
    }
  }

  printNode(node: number, visited: boolean[]): string {
    visited[node] = true;
    let parent = this.ids[node];
    if (node !== parent) {
      return this.printNode(parent, visited) + " --> " + node;
    } else {
      return String(parent);
    }
  }
}
