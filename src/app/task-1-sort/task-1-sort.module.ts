import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Task1SortRoutingModule} from './task-1-sort-routing';
import {Task1SortService} from './task-1-sort.service';
import {Task1SortComponent} from './task-1-sort.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Task1SortRoutingModule,
  ],
  declarations: [Task1SortComponent],
  providers: [Task1SortService]
})
export class Task1SortModule { }
