import { Observable} from 'rxjs';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) {
  }

  private usersUrl = 'api/users';

  getUserByLogin(loginName: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/?loginName=${loginName}&password=${password}`);
  }

}
