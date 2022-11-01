class QuickUnionFind {
  private ids: number[] = [];

  //set if of each object to itself
  find(n: number) {
    for (let i = 0; i < n; i++) {
      this.ids[i] = i;
    }
  }

  //change all entries ids[p] to ids[q]
  union(p: number, q: number) {
    const pid = this.ids[p];
    const qid = this.ids[q];

    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] === pid) {
        this.ids[i] = qid;
      }
    }
  }

  //check if p and q are in same component
  connected(p: number, q: number): boolean {
    return this.ids[p] === this.ids[q];
  }
}
