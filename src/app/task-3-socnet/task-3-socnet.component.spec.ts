import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3SocnetComponent } from './task-3-socnet.component';

describe('Task3SocnetComponent', () => {
  let component: Task3SocnetComponent;
  let fixture: ComponentFixture<Task3SocnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task3SocnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task3SocnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
