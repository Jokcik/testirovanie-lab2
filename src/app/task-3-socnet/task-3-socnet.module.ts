import {NgModule} from '@angular/core';

import {Task3SocnetRoutingModule} from './task-3-socnet-routing.module';
import {Task3SocnetComponent} from './task-3-socnet.component';
import {CommonModule} from '@angular/common';
import {Task3SocnetService} from './task-3-socnet.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule, Task3SocnetRoutingModule],
  exports: [],
  declarations: [Task3SocnetComponent],
  providers: [Task3SocnetService],
})
export class Task3SocnetModule {
}
