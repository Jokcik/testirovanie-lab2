import { Component, OnInit } from '@angular/core';
import {Task1SortService} from './task-1-sort.service';

@Component({
  selector: 'app-task-1-sort',
  templateUrl: './task-1-sort.component.html',
})
export class Task1SortComponent implements OnInit {
  public array: number[] = [20, 10, 0, 5, 2, 5, 23];
  public result: number[] = [];
  constructor(private task1SortService: Task1SortService) { }

  ngOnInit() {
  }

  public run() {
    this.result = this.task1SortService.run(this.array);
  }
}
