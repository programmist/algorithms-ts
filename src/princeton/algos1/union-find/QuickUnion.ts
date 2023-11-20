// Slow, naive algorithm
export class QuickUnion {
  private ids: number[];

  constructor(size: number) {
    this.ids = Array.from({ length: size }, (e, i) => i);
  }

  union(p: number, q: number) {
    this.ids[p] = q;
  }

  findRoot(node: number): number {
    let parent = this.ids[node];
    return parent === node ? parent : this.findRoot(parent);
  }

  printRaw() {
    console.log(this.ids);
  }

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
