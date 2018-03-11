import {inject, TestBed} from '@angular/core/testing';
import {Task3SocnetService} from './task-3-socnet.service';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {TaskResource} from "../core/task-resource";

// https://angular.io/api/http/testing/MockBackend
describe('Task3SocnetService', () => {
  let service: Task3SocnetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions},
        Http,
        TaskResource,
        Task3SocnetService,
      ]
    });
  });

  beforeEach(inject([Task3SocnetService], (task3SocnetService: Task3SocnetService) => service = task3SocnetService));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('mock server', () => {
    let backend: MockBackend;
    let lastConnection: MockConnection;

    beforeEach(inject([ConnectionBackend], (httpBackend: MockBackend) => {
      backend = httpBackend;
      backend.connections.subscribe((connection: any) => lastConnection = connection);
    }));

    it('users', async () => {
      service.users({users_ids: [1, 2, 3]}).$observable.subscribe(() => {
        expect(lastConnection).toBeDefined('no http service connection at all?');
        expect(lastConnection.request.url).toMatch(/vk\/users\?user_ids=1,2,3$/, 'url invalid');
      });
    });

    it('friends', async () => {
      service.friends({user_id: 1}).$observable.subscribe(() => {
        expect(lastConnection).toBeDefined('no http service connection at all?');
        expect(lastConnection.request.url).toMatch(/vk\/users\?user_id=1/, 'url invalid');
      });
    });
  });
});
