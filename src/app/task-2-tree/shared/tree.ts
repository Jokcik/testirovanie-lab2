export enum Color {
  RED = 1,
  BLACK = 2
}

export class RBTree {
  parent: RBTree = null;
  left: RBTree = null;
  right: RBTree = null;
  value: number = null;
  color: Color;

  constructor(parent: RBTree, color?: Color, value?: number, init: boolean = false) {
    this.parent = parent;
    this.color = color || Color.BLACK;
    this.value = value || this.value;

    if (init) {
      this.left = new RBTree(this, Color.BLACK);
      this.right = new RBTree(this, Color.BLACK);
    }
  }
}
