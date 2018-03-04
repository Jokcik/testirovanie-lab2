import {NgModule} from '@angular/core';

import {Task2TreeComponent} from './task-2-tree.component';
import {CommonModule} from '@angular/common';
import {Task2TreeRoutingModule} from './task-2-tree-routing.module';
import {Task2TreeService} from './task-2-tree.service';

@NgModule({
  imports: [CommonModule, Task2TreeRoutingModule],
  exports: [],
  declarations: [Task2TreeComponent],
  providers: [Task2TreeService],
})
export class Task2TreeModule {
}
