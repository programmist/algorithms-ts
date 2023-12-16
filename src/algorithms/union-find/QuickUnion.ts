// QuickUnion (recursive implementation)
/**
 * # Potential issues:
 * - O(n) time complexity for findRoot due to potential for "tall" trees with no branches
 * - Union is also slow due to using findRoot
 *
 * # Enhancement Ideas
 * - Balance trees to ensure findRoot of O(log n) time complexity
 */
export class QuickUnion {
  private ids: number[];

  constructor(size: number) {
    this.ids = Array.from({ length: size }, (_, i) => i);
  }

  union(q: number, p: number) {
    if (this.connected(q, p)) return;

    console.log(`union(${q},${p})`);
    const pRoot = this.findRoot(p);
    const qRoot = this.findRoot(q);
    this.ids[qRoot] = pRoot;
  }

  connected(q: number, p: number): boolean {
    return this.findRoot(q) === this.findRoot(p);
  }

  findRoot(node: number): number {
    let parent = this.ids[node];
    return parent === node ? parent : this.findRoot(parent);
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
