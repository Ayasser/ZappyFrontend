import {environment} from '../environments/environment';

export class AppSettings {
  static getApiEndpoint(env?: string) {
    return environment.apiEndpoint;
  }
}
