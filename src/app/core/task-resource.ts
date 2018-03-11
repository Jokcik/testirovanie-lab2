import {Resource, ResourceParams} from 'ngx-resource';
import {environment} from '../../environments/environment';

@ResourceParams({url: environment.host})
export class TaskResource extends Resource {

}
