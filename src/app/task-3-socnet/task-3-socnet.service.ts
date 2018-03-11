import { Injectable } from '@angular/core';
import {TaskResource} from '../core/task-resource';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {User} from './shared/user';

@Injectable()
@ResourceParams({pathPrefix: 'vk'})
export class Task3SocnetService extends TaskResource {
  @ResourceAction({path: '/users'})
  users: ResourceMethod<{users_ids: number[]}, {response: User[]}>;

  @ResourceAction({path: '/friends'})
  friends: ResourceMethod<{user_id: number}, {response: {items: User[]}}>;
}
