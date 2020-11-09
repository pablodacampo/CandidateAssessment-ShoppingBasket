import { Observable} from 'rxjs';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User;

  constructor( private http: HttpClient ) {
  }

  private usersUrl = 'api/users';

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }
  getUserByLogin(loginName: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}/?loginName=${loginName}&password=${password}`);
  }

}
