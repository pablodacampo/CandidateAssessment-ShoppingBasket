import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserByLogin('Pablo', 'admin123').subscribe((user) => {
    });
  }

  getUserByLogin(loginName: string, password: string): void {
    this.userService.getUserByLogin(loginName, password).subscribe((users: User[]) => {
      const id = users[0].id;
      if (id) {
        // Successful Login
        this.router.navigate([`products/userid/${id}`]);
      } else {
        console.log('User Name Or Password Incorrect');
      }
    });
  }
}
