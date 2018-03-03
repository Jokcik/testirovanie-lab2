import {Injectable} from '@angular/core';
import {isUndefined} from 'util';

@Injectable()
export class Task1SortService {

  public run(array: number[], flag: boolean = false): number[] {
    if (array.length < 1) { throw Error('Должен быть массив более чем из 1 элемента'); }
    const heap = this.createHeap(array);

    const result = [];
    for (let i = 0; i < array.length; ++i) {
      result.push(heap[0]);
      this.removeElement(heap);
    }

    return flag ? result : result.reverse();
  }

  private createHeap(array: number[]): number[] {
    const heap: number[] = [];
    array.forEach((value, index) => this.addElement(heap, value, index));

    return heap;
  }

  public addElement(array: number[], element: number, index: number) {
    array[index] = element;
    while (index > 0) {
      const last = Math.floor(index / 2);
      if (array[index] <= array[last]) {
        break;
      }

      const value = array[index];
      array[index] = array[last];
      array[last] = value;
      index = last;
    }

    return array;
  }

  public removeElement(array: number[]): number[] {
    let index = 0;
    array[index] = array[array.length - 1];
    array.length = array.length - 1;
    while (index * 2 + 1 < array.length) {
      let max;
      if (!isUndefined(array[index * 2 + 2])) {
        max = array[index * 2 + 1] > array[index * 2 + 2] ? index * 2 + 1 : index * 2 + 2;
      } else {
        max = index * 2 + 1;
      }

      if (array[index] >= array[max]) {
        break;
      }

      const value = array[index];
      array[index] = array[max];
      array[max] = value;
      index = max;
    }

    return array;
  }
}
