import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  login: FormControl;
  password: FormControl;
  fName: FormControl;
  lName: FormControl;
  email: FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }

    this.login = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.fName = new FormControl('', Validators.required);
    this.lName = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      userName: this.login,
      password: this.password,
      fName: this.fName,
      lName: this.lName,
      email: this.email
    });
  }

  register() {
    this.authService.registerUser(<UserModel>{
      login: this.login.value,
      email: this.email.value,
      firstName: this.fName.value,
      lastName: this.lName.value,
      password: this.password.value
    }).subscribe((resp) => {
      if (resp) {
        switch (resp.statusCode) {
          case 0:
            break;

          case 200:
            this.router.navigate(['/home']);
            break;

          case 400:
          case 403:
          case 500:
          case 501:
          case 502:
          case 503:
          case 504:
          case 505:
          case 506:
          case 507:
          case 508:
          case 509:
          case 510:
          case 511:
          default:
            break;
        }
      }
    });

  }

  toLogin() {
    this.router.navigate(['/login']);
  }
}
