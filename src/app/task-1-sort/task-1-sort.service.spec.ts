import {inject, TestBed} from '@angular/core/testing';

import {Task1SortService} from './task-1-sort.service';
import {CommonModule} from '@angular/common';

describe('Task1SortService', () => {
  let taskService: Task1SortService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [Task1SortService]
    });
  });

  beforeEach(inject([Task1SortService], (service: Task1SortService) => {
    taskService = service;
  }));

  it('should be created', () => {
    expect(taskService).toBeTruthy();
  });

  it('Не выполняются предусловия', () => {
    const array = [];
    expect(() => taskService.run(array)).toThrow(new Error('Должен быть массив более чем из 1 элемента'));
  });

  describe('flag = false', () => {
    it('N = 1', () => {
      const array = [5];
      expect(taskService.run(array)).toEqual(array);
    });

    describe('N = 2^k', () => {
      it('отсортирован в обратном порядке', () => {
        const array = [74, 55, 12, 4, 4, 2, 1, -1];
        expect(taskService.run(array)).toEqual([-1, 1, 2, 4, 4, 12, 55, 74]);
      });

      it('отсортирован', () => {
        const array = [1, 5, 23, 55, 55, 56, 123, 555];
        expect(taskService.run(array)).toEqual(array);
      });

      it('не отсортирован', () => {
        const array = [1, 6, 2, 4, 3, 7, 6, 8];
        expect(taskService.run(array)).toEqual([1, 2, 3, 4, 6, 6, 7, 8]);
      });
    });

    describe('N = 2^k - 1', () => {
      it('отсортирован в обратном порядке', () => {
        const array = [74, 55, 12, 4, 4, 2, 1];
        expect(taskService.run(array)).toEqual([1, 2, 4, 4, 12, 55, 74]);
      });

      it('отсортирован', () => {
        const array = [1, 5, 23, 55, 55, 56, 123];
        expect(taskService.run(array)).toEqual(array);
      });

      it('не отсортирован', () => {
        const array = [1, 6, 2, 4, 3, 7, 6];
        expect(taskService.run(array)).toEqual([1, 2, 3, 4, 6, 6, 7]);
      });
    });

    describe('N = 2^k + 1', () => {
      it('отсортирован в обратном порядке', () => {
        const array = [74, 55, 12, 4, 4, 2, 1, -1, -10];
        expect(taskService.run(array)).toEqual([-10, -1, 1, 2, 4, 4, 12, 55, 74]);
      });

      it('отсортирован', () => {
        const array = [1, 5, 23, 55, 55, 56, 123, 555, 1000];
        expect(taskService.run(array)).toEqual(array);
      });

      it('не отсортирован', () => {
        const array = [1, 6, 2, 4, 3, 7, 6, 8, -10];
        expect(taskService.run(array)).toEqual([-10, 1, 2, 3, 4, 6, 6, 7, 8]);
      });
    });

    describe('N = другое', () => {
      it('отсортирован в обратном порядке', () => {
        const array = [74, 55, 12, 4, 4, 2];
        expect(taskService.run(array)).toEqual([2, 4, 4, 12, 55, 74]);
      });

      it('отсортирован', () => {
        const array = [1, 5, 23, 55, 55, 56];
        expect(taskService.run(array)).toEqual(array);
      });

      it('не отсортирован', () => {
        const array = [1, 6, 2, 4, 3, 7];
        expect(taskService.run(array)).toEqual([1, 2, 3, 4, 6, 7]);
      });
    });
  });

  describe('flag = true', () => {
      it('N = 1', () => {
        expect(taskService.run([-1], true)).toEqual([-1]);
      });

      describe('N = 2^k', () => {
        it('отсортирован в обратном порядке', () => {
          const array = [74, 55, 12, 4, 4, 2, 1, -1];
          expect(taskService.run(array, true)).toEqual(array);
        });

        it('отсортирован', () => {
          const array = [1, 5, 23, 55, 55, 56, 123, 555];
          expect(taskService.run(array, true)).toEqual([555, 123, 56, 55, 55, 23, 5, 1]);
        });

        it('не отсортирован', () => {
          const array = [1, 6, 2, 4, 3, 7, 6, 8];
          expect(taskService.run(array, true)).toEqual([8, 7, 6, 6, 4, 3, 2, 1]);
        });
      });

    describe('N = 2^k + 1', () => {
      it('отсортирован в обратном порядке', () => {
        const array = [74, 55, 12, 4, 4, 2, 1, -1, -2];
        expect(taskService.run(array, true)).toEqual(array);
      });

      it('отсортирован', () => {
        const array = [1, 5, 23, 55, 55, 56, 123, 555, 666];
        expect(taskService.run(array, true)).toEqual([666, 555, 123, 56, 55, 55, 23, 5, 1]);
      });

      it('не отсортирован', () => {
        const array = [1, 6, 2, 4, 3, 7, 6, 8, -1];
        expect(taskService.run(array, true)).toEqual([8, 7, 6, 6, 4, 3, 2, 1, -1]);
      });
    });

    describe('N = 2^k - 1', () => {
      it('отсортирован в обратном порядке', () => {
        const array = [74, 55, 12, 4, 4, 2, 1];
        expect(taskService.run(array, true)).toEqual(array);
      });

      it('отсортирован', () => {
        const array = [1, 5, 23, 55, 55, 56, 123];
        expect(taskService.run(array, true)).toEqual([123, 56, 55, 55, 23, 5, 1]);
      });

      it('не отсортирован', () => {
        const array = [1, 6, 2, 4, 3, 7, 6];
        expect(taskService.run(array, true)).toEqual([7, 6, 6, 4, 3, 2, 1]);
      });
    });

    describe('N = другое', () => {
      it('отсортирован в обратном порядке', () => {
        const array = [74, 55, 12, 4, 4, 2];
        expect(taskService.run(array, true)).toEqual(array);
      });

      it('отсортирован', () => {
        const array = [1, 5, 23, 55, 55, 56];
        expect(taskService.run(array, true)).toEqual([56, 55, 55, 23, 5, 1]);
      });

      it('не отсортирован', () => {
        const array = [1, 6, 2, 4, 3, 7];
        expect(taskService.run(array, true)).toEqual([7, 6, 4, 3, 2, 1]);
      });
    });
  });
});
