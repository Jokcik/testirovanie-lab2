import {TestBed, inject} from '@angular/core/testing';

import {Task2TreeService} from './task-2-tree.service';
import {Color, RBTree} from './shared/tree';

describe('Task2TreeService', () => {
  let service: Task2TreeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Task2TreeService]
    });
  });

  beforeEach(inject([Task2TreeService], (taskService: Task2TreeService) => {
    service = taskService;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('rightsRotate', () => {
    it('1', () => {
      const tree = new RBTree(null, Color.BLACK, 1);
      tree.left = new RBTree(tree, Color.RED, 2);
      tree.left.left = new RBTree(tree.left, Color.RED, 3);

      const result = new RBTree(null, Color.RED, 2);
      result.left = new RBTree(result, Color.RED, 3);
      result.right = new RBTree(result, Color.BLACK, 1);

      (<any>service).rightsRotate(tree.left, tree);
      expect(tree.parent).toEqual(result);
    });

    it('2', () => {
      const tree = new RBTree(null, Color.BLACK, 1);
      tree.left = new RBTree(tree, Color.RED, 2);
      tree.left.left = new RBTree(tree.left, Color.RED, 3);

      const result = new RBTree(null, Color.BLACK, 1);
      result.left = new RBTree(result, Color.RED, 3);
      result.left.right = new RBTree(result.left, Color.RED, 2);

      (<any>service).rightsRotate(tree.left.left, tree.left);
      expect(tree).toEqual(result);
    });

    it('3', () => {
      const tree = new RBTree(null, Color.BLACK, 1);
      tree.right = new RBTree(tree, Color.RED, 2);
      tree.right.right = new RBTree(tree.right, Color.RED, 3);

      const result = new RBTree(null, Color.BLACK, 1);
      result.right = new RBTree(result, Color.RED, 3);
      result.right.right = new RBTree(result.right, Color.RED, 2);
      result.right.right.right = result.right;

      (<any>service).rightsRotate(tree.right.right, tree.right);
      expect(tree).toEqual(result);
    });
  });

  describe('leftRotate', () => {
    it('1', () => {
      const tree = new RBTree(null, Color.BLACK, 1);
      tree.right = new RBTree(tree, Color.RED, 2);
      tree.right.right = new RBTree(tree.right, Color.RED, 3);

      const result = new RBTree(null, Color.RED, 2);
      result.right = new RBTree(result, Color.RED, 3);
      result.left = new RBTree(result, Color.BLACK, 1);

      (<any>service).leftRotate(tree.right, tree);
      expect(tree.parent).toEqual(result);
    });

    it('2', () => {
      const tree = new RBTree(null, Color.BLACK, 1);
      tree.right = new RBTree(tree, Color.RED, 2);
      tree.right.right = new RBTree(tree.right, Color.RED, 3);

      const result = new RBTree(null, Color.BLACK, 1);
      result.right = new RBTree(result, Color.RED, 3);
      result.right.left = new RBTree(result.right, Color.RED, 2);

      (<any>service).leftRotate(tree.right.right, tree.right);
      expect(tree).toEqual(result);
    });

    it('3', () => {
      const tree = new RBTree(null, Color.BLACK, 1);
      tree.left = new RBTree(tree, Color.RED, 2);
      tree.left.left = new RBTree(tree.left, Color.RED, 3);

      const result = new RBTree(null, Color.BLACK, 1);
      result.left = new RBTree(result, Color.RED, 3);
      result.left.left = new RBTree(result.left, Color.RED, 2);
      result.left.left.left = result.left;

      (<any>service).leftRotate(tree.left.left, tree.left);
      expect(tree).toEqual(result);
    });
  });

  describe('insert', () => {
    it('1', () => {
      const tree = new RBTree(null, Color.RED);
      const element = 10;

      const result = new RBTree(null, Color.RED, element);
      result.left = new RBTree(result);
      result.right = new RBTree(result);

      expect((<any>service).insert(tree, element)).toEqual(result);
    });

    it('2', () => {
      const tree = new RBTree(null, Color.RED, 10);
      tree.left = new RBTree(tree);
      tree.right = new RBTree(tree);
      const element = 20;

      const result = new RBTree(null, Color.RED, 10);
      result.left = new RBTree(result);
      result.right = new RBTree(result, Color.RED, element);
      result.right.left = new RBTree(result.right);
      result.right.right = new RBTree(result.right);

      (<any>service).insert(tree, element);
      expect(tree).toEqual(result);
    });

    it('3', () => {
      const tree = new RBTree(null, Color.RED, 10);
      tree.left = new RBTree(tree);
      tree.right = new RBTree(tree);
      const element = 5;

      const result = new RBTree(null, Color.RED, 10);
      result.right = new RBTree(result);
      result.left = new RBTree(result, Color.RED, element);
      result.left.left = new RBTree(result.left);
      result.left.right = new RBTree(result.left);

      (<any>service).insert(tree, element);
      expect(tree).toEqual(result);
    });
  });

  describe('find', () => {
    const element = 10;

    it('1', () => {
      const tree = new RBTree(null);
      const result = new RBTree(null);
      expect(service.find(tree, 10)).toEqual(result);
    });

    it('2', () => {
      const tree = new RBTree(null, Color.BLACK, 10);
      const result = new RBTree(null, Color.BLACK, 10);

      expect(service.find(tree, 10)).toEqual(result);
    });

    it('3', () => {
      const tree = new RBTree(null, Color.BLACK, 20);
      tree.right = new RBTree(tree, Color.BLACK, 30);

      const result = new RBTree(tree, Color.BLACK, 30);

      expect(service.find(tree, 30)).toEqual(result);
    });

    it('4', () => {
      const tree = new RBTree(null, Color.BLACK, 20);
      tree.left = new RBTree(tree, Color.BLACK, 10);

      const result = new RBTree(tree, Color.BLACK, 10);

      expect(service.find(tree, 10)).toEqual(result);
    });
  });

  describe('PreOrderRBTree', () => {
    it('1', () => {
      const tree = new RBTree(null, Color.BLACK, 20);
      tree.left = new RBTree(tree, Color.BLACK, 10);
      tree.right = new RBTree(tree, Color.BLACK, 30);

      const result = [20, 10, 30];

      const res = [];
      service.PreOrderRBTree(tree, res);
      expect(res).toEqual(result);
    });

    it('2', () => {
      const tree = new RBTree(null);

      const result = [];

      const res = [];
      service.PreOrderRBTree(tree, res);
      expect(res).toEqual(result);
    });
  });

  describe('PostOrderRBTree', () => {
    it('1', () => {
      const tree = new RBTree(null, Color.BLACK, 20);
      tree.left = new RBTree(tree, Color.BLACK, 10);
      tree.right = new RBTree(tree, Color.BLACK, 30);

      const result = [10, 30, 20];

      const res = [];
      service.PostOrderRBTree(tree, res);
      expect(res).toEqual(result);
    });

    it('2', () => {
      const tree = new RBTree(null);

      const result = [];

      const res = [];
      service.PostOrderRBTree(tree, res);
      expect(res).toEqual(result);
    });
  });

  describe('SymmetricOrderRBTree', () => {
    it('1', () => {
      const tree = new RBTree(null, Color.BLACK, 20);
      tree.left = new RBTree(tree, Color.BLACK, 10);
      tree.right = new RBTree(tree, Color.BLACK, 30);

      const result = [10, 20, 30];

      const res = [];
      service.SymmetricOrderRBTree(tree, res);
      expect(res).toEqual(result);
    });

    it('2', () => {
      const tree = new RBTree(null);

      const result = [];

      const res = [];
      service.SymmetricOrderRBTree(tree, res);
      expect(res).toEqual(result);
    });
  });

  describe('Balance', () => {
    it('1', () => {
      const tree = new RBTree(null, Color.BLACK, 20);
      const result = new RBTree(null, Color.BLACK, 20);
      expect((<any>service).balance(tree)).toEqual(result);
    });

    it('2', () => {
      const tree = new RBTree(null, Color.RED, 20);
      const result = new RBTree(null, Color.BLACK, 20);
      expect((<any>service).balance(tree)).toEqual(result);
    });

    it('3', () => {
      const tree = new RBTree(null, Color.BLACK, 20);
      tree.right = new RBTree(tree, Color.RED, 10);

      expect((<any>service).balance(tree.right)).toEqual(tree.right);
    });

    it('4', () => {
      const tree = new RBTree(null, Color.BLACK, 10, true);
      tree.right = new RBTree(tree, Color.RED, 20, true);
      tree.right.right = new RBTree(tree.right, Color.RED, 30, true);

      const exp = new RBTree(null, Color.BLACK, 20, true);
      exp.left = new RBTree(exp, Color.RED, 10, true);
      exp.right = new RBTree(exp, Color.RED, 30, true);

      const result = (<any>service).balance(tree.right.right);

      expect(result.value).toEqual(exp.value);
      expect(result.color).toEqual(exp.color);

      expect(result.left.value).toEqual(exp.left.value);
      expect(result.left.color).toEqual(exp.left.color);

      expect(result.right.value).toEqual(exp.right.value);
      expect(result.right.color).toEqual(exp.right.color);
    });

    it('5', () => {
      const tree = new RBTree(null, Color.BLACK, 10, true);
      tree.left = new RBTree(tree, Color.RED, 9, true);
      tree.right = new RBTree(tree, Color.RED, 20, true);
      tree.right.right = new RBTree(tree.right, Color.RED, 30, true);

      const exp = new RBTree(null, Color.BLACK, 10, true);
      exp.left = new RBTree(exp, Color.BLACK, 9, true);
      exp.right = new RBTree(exp, Color.BLACK, 20, true);
      exp.right.right = new RBTree(exp.right, Color.RED, 30, true);

      const result = (<any>service).balance(tree.right.right);

      expect(result.value).toEqual(exp.value);
      expect(result.color).toEqual(exp.color);

      expect(result.left.value).toEqual(exp.left.value);
      expect(result.left.color).toEqual(exp.left.color);

      expect(result.right.value).toEqual(exp.right.value);
      expect(result.right.color).toEqual(exp.right.color);

      expect(result.right.right.value).toEqual(exp.right.right.value);
      expect(result.right.right.color).toEqual(exp.right.right.color);
    });

    it('6', () => {
      const tree = new RBTree(null, Color.BLACK, 20);
      tree.left = new RBTree(tree, Color.RED, 10);

      expect((<any>service).balance(tree.left)).toEqual(tree.left);
    });

    it('7', () => {
      const tree = new RBTree(null, Color.BLACK, 10, true);
      tree.left = new RBTree(tree, Color.RED, 9, true);
      tree.right = new RBTree(tree, Color.RED, 20, true);
      tree.left.left = new RBTree(tree.left, Color.RED, 5, true);

      const exp = new RBTree(null, Color.BLACK, 10, true);
      exp.left = new RBTree(exp, Color.BLACK, 9, true);
      exp.right = new RBTree(exp, Color.BLACK, 20, true);
      exp.left.left = new RBTree(exp.left, Color.RED, 5, true);

      const result = (<any>service).balance(tree.left.left);

      expect(result.value).toEqual(exp.value);
      expect(result.color).toEqual(exp.color);

      expect(result.left.value).toEqual(exp.left.value);
      expect(result.left.color).toEqual(exp.left.color);

      expect(result.right.value).toEqual(exp.right.value);
      expect(result.right.color).toEqual(exp.right.color);

      expect(result.left.left.value).toEqual(exp.left.left.value);
      expect(result.left.left.color).toEqual(exp.left.left.color);
    });

    it('8', () => {
      const tree = new RBTree(null, Color.BLACK, 10, true);
      tree.left = new RBTree(tree, Color.RED, 5, true);
      tree.left.left = new RBTree(tree.left, Color.RED, 2, true);

      const exp = new RBTree(null, Color.BLACK, 5, true);
      exp.left = new RBTree(exp, Color.RED, 2, true);
      exp.right = new RBTree(exp, Color.RED, 10, true);

      const result = (<any>service).balance(tree.left.left);

      expect(result.value).toEqual(exp.value);
      expect(result.color).toEqual(exp.color);

      expect(result.left.value).toEqual(exp.left.value);
      expect(result.left.color).toEqual(exp.left.color);

      expect(result.right.value).toEqual(exp.right.value);
      expect(result.right.color).toEqual(exp.right.color);
    });
  });

  describe('createTreeRedBlack', () => {
    it('1', () => {
      const tree = service.createTreeRedBlack([10, 20, 30]);

      const exp = new RBTree(null, Color.BLACK, 20, true);
      exp.left = new RBTree(exp, Color.RED, 10, true);
      exp.right = new RBTree(exp, Color.RED, 30, true);

      expect(tree.value).toEqual(exp.value);
      expect(tree.color).toEqual(exp.color);

      expect(tree.left.value).toEqual(exp.left.value);
      expect(tree.left.color).toEqual(exp.left.color);

      expect(tree.right.value).toEqual(exp.right.value);
      expect(tree.right.color).toEqual(exp.right.color);
    });
  });

  describe('removeElement', () => {
    it('1', () => {
      const tree = service.createTreeRedBlack([10, 20, 30]);
      const delElement = 25;

      const exp = new RBTree(null, Color.BLACK, 20, true);
      exp.left = new RBTree(exp, Color.RED, 10, true);
      exp.right = new RBTree(exp, Color.RED, 30, true);

      service.removeElement(tree, delElement);

      expect(tree.value).toEqual(exp.value);
      expect(tree.color).toEqual(exp.color);

      expect(tree.left.value).toEqual(exp.left.value);
      expect(tree.left.color).toEqual(exp.left.color);

      expect(tree.right.value).toEqual(exp.right.value);
      expect(tree.right.color).toEqual(exp.right.color);
    });

    it('2', () => {
      const tree = service.createTreeRedBlack([10, 20, 30]);
      const delElement = 30;

      const exp = new RBTree(null, Color.BLACK, 20, true);
      exp.left = new RBTree(exp, Color.RED, 10, true);

      service.removeElement(tree, delElement);

      expect(tree.value).toEqual(exp.value);
      expect(tree.color).toEqual(exp.color);

      expect(tree.left.value).toEqual(exp.left.value);
      expect(tree.left.color).toEqual(exp.left.color);

      expect(tree.right.value).toEqual(exp.right.value);
      expect(tree.right.color).toEqual(exp.right.color);
    });

    it('3', () => {
      const tree = new RBTree(null, Color.RED, 20, true);
      tree.left = new RBTree(tree, Color.BLACK, 10, true);
      const delElement = 20;

      const exp = new RBTree(null, Color.BLACK, 10, true);

      service.removeElement(tree, delElement);

      expect(tree.value).toEqual(exp.value);
      expect(tree.color).toEqual(exp.color);
      expect(tree.parent).toEqual(exp.parent);
    });

    it('4', () => {
      const tree = new RBTree(null, Color.RED, 20, true);
      tree.right = new RBTree(tree, Color.BLACK, 30, true);
      const delElement = 20;

      const exp = new RBTree(null, Color.BLACK, 30, true);

      service.removeElement(tree, delElement);

      expect(tree.value).toEqual(exp.value);
      expect(tree.color).toEqual(exp.color);
    });

    it('5', () => {
      const tree = new RBTree(null, Color.RED, 20, true);
      tree.left = new RBTree(tree, Color.BLACK, 10, true);
      tree.right = new RBTree(tree, Color.BLACK, 30, true);
      const delElement = 20;

      const exp = new RBTree(null, Color.BLACK, 10, true);
      exp.right = new RBTree(exp, Color.BLACK, 30, true);

      service.removeElement(tree, delElement);

      expect(tree.value).toEqual(exp.value);
      expect(tree.color).toEqual(exp.color);

      expect(tree.right.value).toEqual(exp.right.value);
      expect(tree.right.color).toEqual(exp.right.color);
    });

    it('6', () => {
      const tree = new RBTree(null, Color.BLACK, 20, true);
      tree.left = new RBTree(tree, Color.BLACK, 10, true);
      const delElement = 20;

      const exp = new RBTree(null, Color.BLACK, 10, true);

      service.removeElement(tree, delElement);

      expect(tree.value).toEqual(exp.value);
      expect(tree.color).toEqual(exp.color);
    });

    it('7', () => {
      const tree = new RBTree(null, Color.BLACK, 20, true);
      tree.right = new RBTree(tree, Color.BLACK, 30, true);
      const delElement = 20;

      const exp = new RBTree(null, Color.BLACK, 30, true);

      service.removeElement(tree, delElement);

      expect(tree.value).toEqual(exp.value);
      expect(tree.color).toEqual(exp.color);
    });

    it('8', () => {
      const tree = new RBTree(null, Color.BLACK, 20, true);
      tree.left = new RBTree(tree, Color.RED, 10, true);
      tree.right = new RBTree(tree, Color.RED, 30, true);
      const delElement = 20;

      const exp = new RBTree(null, Color.RED, 10, true);
      exp.right = new RBTree(null, Color.RED, 30, true);

      service.removeElement(tree, delElement);

      expect(tree.value).toEqual(exp.value);
      expect(tree.color).toEqual(exp.color);

      expect(tree.right.value).toEqual(exp.right.value);
      expect(tree.right.color).toEqual(exp.right.color);
    });

    it('9', () => {
      const tree = new RBTree(null, Color.BLACK, 20, true);
      tree.left = new RBTree(tree, Color.RED, 10, true);
      tree.left.right = new RBTree(tree.left, Color.BLACK, 15, true);
      tree.right = new RBTree(tree, Color.RED, 30, true);
      const delElement = 20;

      const exp = new RBTree(null, Color.BLACK, 15, true);
      exp.left = new RBTree(null, Color.RED, 10, true);
      exp.right = new RBTree(null, Color.RED, 30, true);

      service.removeElement(tree, delElement);

      expect(tree.value).toEqual(exp.value);
      expect(tree.color).toEqual(exp.color);

      expect(tree.right.value).toEqual(exp.right.value);
      expect(tree.right.color).toEqual(exp.right.color);

      expect(tree.left.value).toEqual(exp.left.value);
      expect(tree.left.color).toEqual(exp.left.color);
    });
  });
});
