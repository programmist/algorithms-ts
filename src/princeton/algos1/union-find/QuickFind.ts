// Slow, naive algorithm
export class QuickFind {
  private ids: number[];

  constructor(size: number) {
    this.ids = Array.from({ length: size }, (_, i) => i);
  }

  connected(p: number, q: number) {
    return this.ids[p] === this.ids[q];
  }

  union(p: number, q: number) {
    if (this.connected(p, q)) return;

    // Re-label every node in p's network with q's network ID

    this.ids.forEach((id, i) => {
      const qid = this.ids[p];
      if (id === qid) {
        const qid = this.ids[q];
        this.ids[i] = qid;
      }
    });
  }

  forEach(func: (n: number, i: number) => void) {
    return this.ids.forEach(func);
  }

  print() {
    console.log(this.ids);
  }
}
