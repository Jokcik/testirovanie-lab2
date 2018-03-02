import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'task-1', loadChildren: 'app/task-1-sort/task-1-sort.module#Task1SortModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
