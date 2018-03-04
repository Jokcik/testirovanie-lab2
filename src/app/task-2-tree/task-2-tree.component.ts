import { Component, OnInit } from '@angular/core';
import {Task2TreeService} from './task-2-tree.service';

@Component({
  selector: 'app-task-2-tree',
  templateUrl: './task-2-tree.component.html',
})
export class Task2TreeComponent implements OnInit {

  constructor(private service: Task2TreeService) { }

  ngOnInit() {
    const tree = this.service.createTreeRedBlack([10, 20, 30, 40, 40]);
    let res = []
    this.service.PreOrderRBTree(tree, res);
    console.log(res);
  }

}
