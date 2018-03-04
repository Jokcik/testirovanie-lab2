import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Task1SortComponent} from './task-1-sort.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {Task1SortService} from './task-1-sort.service';


describe('Task1SortComponent', () => {
  let component: Task1SortComponent;
  let fixture: ComponentFixture<Task1SortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      declarations: [ Task1SortComponent ],
      providers: [Task1SortService]
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
