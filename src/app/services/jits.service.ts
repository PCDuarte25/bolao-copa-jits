import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JitsService {

  private readonly API = 'api/signup';

  constructor(private httpClient: HttpClient) { }

  save(record: User) {
    return this.httpClient.post<User>(this.API, record);
  }
}
