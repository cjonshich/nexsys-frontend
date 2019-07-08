import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User();

  public isEmailValid = true;
  public isPasswordValid = true;

  constructor(private router: Router) { }

  ngOnInit() { }

  public login() {
    this.isEmailValid = this.user.isValidEmail();
    this.isPasswordValid = this.user.isValidPassword();
    if (!this.isEmailValid || !this.isPasswordValid) {
      return;
    }
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/inicio']);
    // Redirect to dashboard
  }

}
