import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
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
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password
    });
  }

  login() {
    this.authService.loginUser(this.loginForm.value.userName, this.loginForm.value.password).subscribe((resp) => {
      this.authService.notificationMessage = '';

    console.log(resp);

      if (resp) {
        switch (resp.statusCode) {
          case 0:
            break;

          case 200:
            this.router.navigate(['/home']);
            break;

          case 400:
            break;

          case 403:
            break;

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
            break;


          default:
            break;
        }
      }
    });

  }
}
