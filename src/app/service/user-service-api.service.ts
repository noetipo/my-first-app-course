import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceApiService {

//private apiUrl: 'http://jsonplaceholder.typicode.com/' | undefined;

constructor(private http: HttpClient) {
  }
  public getUser():Observable<any> {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
    //return this.http.get<any[]>(this.apiUrl);
  }
}
