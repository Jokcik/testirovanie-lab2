import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2TreeComponent } from './task-2-tree.component';
import {Task2TreeService} from "./task-2-tree.service";

describe('Task2TreeComponent', () => {
  let component: Task2TreeComponent;
  let fixture: ComponentFixture<Task2TreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [Task2TreeService],
      declarations: [ Task2TreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task2TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
