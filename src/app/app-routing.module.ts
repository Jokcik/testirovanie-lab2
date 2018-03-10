import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'task-1', loadChildren: 'app/task-1-sort/task-1-sort.module#Task1SortModule'},
  {path: 'task-2', loadChildren: 'app/task-2-tree/task-2-tree.module#Task2TreeModule'},
  {path: 'task-3', loadChildren: 'app/task-3-socnet/task-3-socnet.module#Task3SocnetModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
