import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Task1SortComponent} from './task-1-sort.component';

const routes: Routes = [
  {path: '', component: Task1SortComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Task1SortRoutingModule {
}
