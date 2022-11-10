import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JitsService {

  private readonly APISignup = 'api/signup';

  private readonly APILogin = 'api/login';

  constructor(private httpClient: HttpClient) { }

  saveSignup(record: User) {
    return this.httpClient.post<User>(this.APISignup, record);
  }

  saveLogin(record: User) {
    return this.httpClient.post<User>(this.APILogin, record);
  }
}
