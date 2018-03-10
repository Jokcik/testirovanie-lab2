import {Injectable} from '@angular/core';
import {Color, RBTree} from './shared/tree';

@Injectable()
export class Task2TreeService {

  public createTreeRedBlack(array: number[]): RBTree {
    let tree = new RBTree(null,  Color.RED);
    array.forEach(elem => tree = this.addElement(tree, elem));

    return tree;
  }

  public addElement(tree: RBTree, element: number) {
    let rbTree = this.insert(tree, element);
    rbTree = this.balance(rbTree);
    while (rbTree.parent) {
      rbTree = rbTree.parent;
    }

    return rbTree;
  }

  private balance(tree: RBTree): RBTree {
    if (tree.color === Color.BLACK) { return tree; } // 0
    if (!tree.parent) { // 1 2
      tree.color = Color.BLACK;
      return tree;
    }

    if (tree.parent.color === Color.BLACK) { return tree; } // 3
    const parent = tree.parent; // 4
    const uncle = parent.parent.left === parent ? parent.parent.right : parent.parent.left; // 5 6
    if (uncle.color === Color.RED) { // 7
      uncle.color = Color.BLACK; // 8
      parent.color = Color.BLACK;
      uncle.parent.color = Color.RED;

      return this.balance(uncle.parent);
    }

    let flag = tree.parent.parent.right === parent;
    if (parent.right === tree) { // 9
      this.leftRotate(flag ? tree.parent : tree, flag ? parent.parent : parent); // 10 11 12
      if (flag) { // 13
        tree.parent.color = Color.BLACK; // 14
        tree.parent.left.color = Color.RED;
        tree.parent.right.color = Color.RED;
      }
      return this.balance(flag ? tree.parent : tree); // 15
    }

    flag = tree.parent.parent.left === parent; // 16
    this.rightsRotate(flag ? tree.parent : tree, flag ? parent.parent : tree); // 17 18
    if (flag) { // 19
      tree.parent.color = Color.BLACK; // 20
      tree.parent.left.color = Color.RED;
      tree.parent.right.color = Color.RED;
    }
    return flag ? tree.parent : tree;
  } // 21

  // Правый поворот
  private rightsRotate(tree: RBTree, parent: RBTree) {
    parent.left = tree.right;
    tree.right = parent; // 0

    if (parent.parent) { // 1
      if (parent.parent.left === parent) { // 2
        parent.parent.left = tree; // 3
      } else {
        parent.parent.right = tree; // 4
      }
    }
    tree.parent = parent.parent; // 5
    parent.parent = tree;
  }

  // левый поворот
  private leftRotate(tree: RBTree, parent: RBTree) {
    parent.right = tree.left;
    tree.left = parent; // 0

    if (parent.parent) { // 1
      if (parent.parent.left === parent) { // 2
        parent.parent.left = tree; // 3
      } else {
        parent.parent.right = tree; // 4
      }
    }
    tree.parent = parent.parent; // 5
    parent.parent = tree;
  }

  // вставить в дерево
  private insert(tree: RBTree, element: number): RBTree {
    if (tree.value == null) { // 0
      tree.value = element; // 1
      tree.left = new RBTree(tree);
      tree.right = new RBTree(tree);
      tree.color = Color.RED;
      return tree;
    }

    if (element >= tree.value) { // 2
      return this.insert(tree.right, element); // 3
    }

    return this.insert(tree.left, element);
  } // 4

  public find(tree: RBTree, element: number): RBTree {
    if (tree.value === null || tree.value === element) { return tree; } // 0 1
    if (tree.value < element) { return this.find(tree.right, element); } // 2 3

    return this.find(tree.left, element);
  } // 4

  // прямой обход красно-черного дерева
  public PreOrderRBTree(tree: RBTree, result: number[]) {
    if (!tree || tree.value == null) {  return; }
    result.push(tree.value);
    this.PreOrderRBTree(tree.left, result);
    this.PreOrderRBTree(tree.right, result);
  }

  // обратный обход красно-черного дерева
  public PostOrderRBTree(tree: RBTree, result: number[]) {
    if (!tree || tree.value == null) {  return; }
    this.PreOrderRBTree(tree.left, result);
    this.PreOrderRBTree(tree.right, result);
    result.push(tree.value);
  }

  // симметричный обход красно-черного дерева
  public SymmetricOrderRBTree(tree: RBTree, result: number[]) {
    if (!tree || tree.value == null) {  return; }
    this.PreOrderRBTree(tree.left, result);
    result.push(tree.value);
    this.PreOrderRBTree(tree.right, result);
  }

  public removeElement(tree: RBTree, element: number): RBTree {
    const delTree = this.find(tree, element); // 0
    if (delTree.value === null) { return tree; } // 1

    if (delTree.color === Color.RED) { // 2
      if (delTree.left.value === null && delTree.right.value === null) { // 3 4
        this.replaceNode(delTree, delTree.left); // 5
        return tree;
      }

      if (delTree.left.value === null && delTree.right.color === Color.BLACK) { // 6 7
        delTree.right.color = Color.BLACK; // 8
        this.replaceNode(delTree, delTree.right);
        return tree;
      }

      if (delTree.right.value === null && delTree.left.color === Color.BLACK) { // 9 10
        delTree.left.color = Color.BLACK; // 11
        this.replaceNode(delTree, delTree.left);
        return tree;
      }

      const replaceTree = this.findLastRights(delTree.left); // 12
      this.replaceNode(delTree, replaceTree);
      return tree;
    }

    if (delTree.right.value === null) { // 13
      this.replaceNode(delTree, delTree.left); // 14
      return tree;
    }

    if (delTree.left.value === null) { // 15
      this.replaceNode(delTree, delTree.right); // 16
      return tree;
    }

    const replaceTree1 = this.findLastRights(delTree.left); // 17
    this.replaceNode(delTree, replaceTree1);
    return tree;
  }

  private findLastRights(tree: RBTree) {
    return tree.right.value === null ? tree : this.findLastRights(tree.right);
  }

  private replaceNode(node: RBTree, on: RBTree) {
    node.value = on.value;
    node.color = on.color;

    if (on.parent) {
      if (on.parent.left === on) {
        on.parent.left = null;
      } else {
        on.parent.right = null;
      }
      on.parent = null;
    }
  }
}
