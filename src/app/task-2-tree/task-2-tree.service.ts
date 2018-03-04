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
    if (tree.color === Color.BLACK) { return tree; }
    if (!tree.parent && tree.color === Color.RED) {
      tree.color = Color.BLACK;
      return tree;
    }

    if (tree.parent.color === Color.BLACK) { return tree; }
    const parent = tree.parent;
    const uncle = parent.parent.left === parent ? parent.parent.right : parent.parent.left;
    if (uncle.color === Color.RED) {
      uncle.color = Color.BLACK;
      parent.color = Color.BLACK;
      uncle.parent.color = Color.RED;

      return this.balance(uncle.parent);
    }

    let flag = tree.parent.parent.right === parent;
    if (parent.right === tree) {
      this.leftRotate(flag ? tree.parent : tree, flag ? parent.parent : parent);
      if (flag) {
        tree.parent.color = Color.BLACK;
        tree.parent.left.color = Color.RED;
        tree.parent.right.color = Color.RED;
      }
      return this.balance(flag ? tree.parent : tree);
    }

    flag = tree.parent.parent.left === parent;
    this.rightsRotate(flag ? tree.parent : tree, flag ? parent.parent : tree);
    if (flag) {
      tree.parent.color = Color.BLACK;
      tree.parent.left.color = Color.RED;
      tree.parent.right.color = Color.RED;
    }
    return flag ? tree.parent : tree;
  }

  // Правый поворот
  private rightsRotate(tree: RBTree, parent: RBTree) {
    parent.left = tree.right;
    tree.right = parent;

    if (parent.parent) {
      if (parent.parent.left === parent) {
        parent.parent.left = tree;
      } else {
        parent.parent.right = tree;
      }
    }
    tree.parent = parent.parent;
    parent.parent = tree;
  }

  // левый поворот
  private leftRotate(tree: RBTree, parent: RBTree) {
    parent.right = tree.left;
    tree.left = parent;

    if (parent.parent) {
      if (parent.parent.left === parent) {
        parent.parent.left = tree;
      } else {
        parent.parent.right = tree;
      }
    }
    tree.parent = parent.parent;
    parent.parent = tree;
  }

  // вставить в дерево
  private insert(tree: RBTree, element: number): RBTree {
    if (tree.value == null) {
      tree.value = element;
      tree.left = new RBTree(tree);
      tree.right = new RBTree(tree);
      tree.color = Color.RED;
      return tree;
    }

    if (element >= tree.value) {
      return this.insert(tree.right, element);
    }

    return this.insert(tree.left, element);
  }

  public find(tree: RBTree, element: number): RBTree {
    if (tree.value === null || tree.value === element) { return tree; }
    if (tree.value >= element) { return tree.right; }

    return tree.left;
  }

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
    const delTree = this.find(tree, element);
    if (delTree.value === null) { return tree; }

    if (delTree.color === Color.RED) {
      if (delTree.left.value === null && delTree.left.value === null) {
        this.replaceNode(delTree, delTree.left);
        return tree;
      }

      if (delTree.left.value === null && delTree.right.color === Color.BLACK) {
        delTree.right.color = Color.BLACK;
        this.replaceNode(delTree, delTree.right);
        return tree;
      }

      if (delTree.right.value === null && delTree.left.color === Color.BLACK) {
        delTree.left.color = Color.BLACK;
        this.replaceNode(delTree, delTree.left);
        return tree;
      }

      const replaceTree = this.findLastRights(delTree.left);
      replaceTree.color = delTree.color;
      this.replaceNode(delTree, replaceTree);
      return tree;
    }

    if (delTree.right.value === null) {
      this.replaceNode(delTree, delTree.left);
      return tree;
    }

    if (delTree.left.value === null) {
      this.replaceNode(delTree, delTree.right);
      return tree;
    }

    const replaceTree1 = this.findLastRights(delTree.left);
    replaceTree1.color = delTree.color;
    this.replaceNode(delTree, replaceTree1);
    return tree;
  }

  private findLastRights(tree: RBTree) {
    return tree.right.value === null ? tree : this.findLastRights(tree.right);
  }

  private replaceNode(node: RBTree, on: RBTree) {
    if (node.parent.left === node) {
      node.parent.left = on;
    } else {
      node.parent.right = on;
    }

    on.parent = node.parent;
    node.parent = null;
  }
}
