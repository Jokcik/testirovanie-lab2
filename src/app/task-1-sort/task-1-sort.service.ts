import {Injectable} from '@angular/core';

@Injectable()
export class Task1SortService {

  constructor() {
  }

  public run(array: number[]): number[] {
    if (array.length === 0) { return []; }
    let n = array.length, i = Math.floor(n / 2), j, k, t;
    while (true) {
      if (i > 0) { t = array[--i]; } else {
        n--;
        if (n === 0) { return array; }
        t = array[n];
        array[n] = array[0];
      }
      j = i;
      k = j * 2 + 1;
      while (k < n) {
        if (k + 1 < n && array[k + 1] > array[k]) { k++; }
        if (array[k] > t) {
          array[j] = array[k];
          j = k;
          k = j * 2 + 1;
        } else { break; }
      }
      array[j] = t;
    }
  }
}

// var arr = [4,7,6,5,8,2,0,3,1,12,4,7,6,5,8,2,0,3,12,4,7,6,5,8,2,0,3,1,12,4,7,6,5,8,2,3];
// function sort(b) {
//   function d(a, c) {
//     var d = b[a];
//     b[a] = b[c];
//     b[c] = d
//   }
//   for (var c = b.length; c--;) {
//     for (;;) {
//       for (var e = !0, a = 0; a < (c - 1) / 2; a++)
//         11
//       b[a] < b[2 * a + 1] && (d(a, 2 * a + 1), e = !1),
//         12
//       b[a] < b[2 * a + 2] && (d(a, 2 * a + 2), e = !1);
//       13
//       if (e) break
//       14
//     }
//     15
//     b[0] > b[c] && d(0, c)
//     16
//   }
//   17
//   return b
//   18
// };
// 19
// alert(arr + "\n" +sort(arr)+"\n"+arr)
