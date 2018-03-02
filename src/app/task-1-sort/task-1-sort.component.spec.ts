import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1SortComponent } from './task-1-sort.component';
import {CommonModule} from '@angular/common';
import {Task1SortRoutingModule} from './task-1-sort-routing';
import {RouterTestingModule} from '@angular/router/testing';

describe('Task1SortComponent', () => {
  let component: Task1SortComponent;
  let fixture: ComponentFixture<Task1SortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      declarations: [ Task1SortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task1SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
