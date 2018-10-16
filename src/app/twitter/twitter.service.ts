import {Injectable} from '@angular/core';
import {AppSettings} from '../app.settings';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: Http) {
  }


  public getProducts(model: string = 'tweet_list'){
    return this.http.get(`${AppSettings.getApiEndpoint()}/${model}/`).map((response) => response.json());

  }


}
