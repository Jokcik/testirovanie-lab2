export enum Color {
  RED = 1,
  BLACK = 2
}

export class RBTree {
  parent: RBTree = null;
  left: RBTree = null;
  right: RBTree = null;
  value: number;
  color: Color;

  constructor(parent: RBTree, color?: Color) {
    this.parent = parent;
    this.color = color || Color.BLACK;
  }
}
