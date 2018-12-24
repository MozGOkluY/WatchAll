import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userName: FormControl;
  password: FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password
    });
  }

  login() {
    this.authService.loginUser(this.loginForm.value.userName, this.loginForm.value.password).subscribe((resp) => {
      if (resp) {
        switch (resp.statusCode) {
          case 0:
            break;

          case 200:
            this.router.navigate(['']);
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

  register() {
    this.router.navigate(['/register']);
  }
}
