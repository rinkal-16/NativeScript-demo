import { Injectable } from '@angular/core';
import {environment} from '~/environments/environment';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  baseUrl: any = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<any> {
    return this.http.get(this.baseUrl + 'todos');
  }

}
