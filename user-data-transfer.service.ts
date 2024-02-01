import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataTransferService {
  constructor(private hc: HttpClient) {}

  // USER CREATION SERVICE

  createNewUser(userObj) {
    return this.hc.post('http://localhost:4000/user-api/user', userObj);
  }

  UserLogin(userCredentialsObject) {
    return this.hc.post(
      'http://localhost:4000/user-api/user-login',
      userCredentialsObject
    );
  }
}

export interface UserCred {
  username: string;
  password: string;
}

export interface User {
  username: string;
  password: string;
}
