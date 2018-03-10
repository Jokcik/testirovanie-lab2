import { Component, OnInit } from '@angular/core';
import {Task3SocnetService} from './task-3-socnet.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-task-3-socnet',
  templateUrl: './task-3-socnet.component.html',
})
export class Task3SocnetComponent implements OnInit {
  public results: any[] = [];

  constructor(private task3SocnetService: Task3SocnetService,
              private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('https://api.vk.com/method/users.get?user_ids=3586081,203586082,1,2,3&v=5.0')
      .subscribe(res => this.results = res);
  }

}
