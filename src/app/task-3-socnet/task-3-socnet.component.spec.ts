import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Task3SocnetComponent} from './task-3-socnet.component';
import {of} from 'rxjs/observable/of';
import {By} from '@angular/platform-browser';
import createSpyObj = jasmine.createSpyObj;
import {Task3SocnetService} from './task-3-socnet.service';

describe('Task3SocnetComponent', () => {
  let component: Task3SocnetComponent;
  let fixture: ComponentFixture<Task3SocnetComponent>;
  const users = [{first_name: 'test', last_name: 'test2'}, {first_name: 'test3', last_name: 'test4'}];

  const service: Task3SocnetService = createSpyObj('Task3SocnetService', ['users', 'friends']);
  (<any>service.users).and.callFake(data => ({$observable: of({response: users})}));
  (<any>service.friends).and.callFake(data => ({$observable: of({response: {items: users}})}));


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ Task3SocnetComponent ],
      providers: [ {provide: Task3SocnetService, useValue: service} ],
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

  it('users service', () => {
    expect(service.users).toHaveBeenCalled();
  });

  it('friends service', () => {
    expect(service.users).toHaveBeenCalled();
  });

  it('users element', () => {
    const usersElement = fixture.debugElement.queryAll(By.css('.users'));
    expect(usersElement).toBeTruthy();

    users.forEach((user, idx) => expect(usersElement[idx].nativeElement.innerText).toEqual(user.first_name + ' ' + user.last_name));
  });

  it('friends element', () => {
    const friendsElement = fixture.debugElement.queryAll(By.css('.friend'));
    expect(friendsElement).toBeTruthy();

    users.forEach((user, idx) => expect(friendsElement[idx].nativeElement.innerText).toEqual(user.first_name + ' ' + user.last_name));
  });
});
