import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Task3SocnetComponent} from './task-3-socnet.component';

const routes: Routes = [
  {path: '', component: Task3SocnetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Task3SocnetRoutingModule {
}
