import {Component, OnInit} from '@angular/core';
import {Task3SocnetService} from './task-3-socnet.service';
import {User} from './shared/user';

@Component({
  selector: 'app-task-3-socnet',
  templateUrl: './task-3-socnet.component.html',
})
export class Task3SocnetComponent implements OnInit {
  public users: User[] = [];
  public friends: User[] = [];

  constructor(private task3SocnetService: Task3SocnetService) { }

  ngOnInit() {
    this.task3SocnetService.users({users_ids: [1, 2, 3]}).$observable.subscribe(users => this.users = users.response);
    this.task3SocnetService.friends({user_id: 3586081}).$observable.subscribe(friends => this.friends = friends.response.items);
  }

}
