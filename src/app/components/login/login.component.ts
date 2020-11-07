import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserByLogin('Pablo1', 'admin123');
  }

  getUserByLogin(loginName: string, password: string): void {
    this.userService.getUserByLogin(loginName, password).subscribe((user: User) => {
      if (user.id) {
        console.log(user);
      } else {
        console.log('User Name Or Password Incorrect');
      }
    });
  }
}
