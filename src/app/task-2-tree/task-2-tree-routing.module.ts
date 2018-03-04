import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Task2TreeComponent} from './task-2-tree.component';

const routes: Routes = [
  {path: '', component: Task2TreeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Task2TreeRoutingModule {
}
