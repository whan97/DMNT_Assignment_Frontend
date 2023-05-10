import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Login, LoginPost } from '../model/login.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url = environment.serviceUrl;

  constructor(private http: HttpClient) { }

  getValues() {
   return this.http.get<User[]>(`${this.url}/api/users`)
  }

  postValue(loginRequest : LoginPost){
    return this.http.post(`${this.url}/api/login`, loginRequest, {})
  }
}
