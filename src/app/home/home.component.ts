import { ShowService } from './../shared/show.service';
import { Component, OnInit } from '@angular/core';
import { ShowModel } from '../models/show.model';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  top5: ShowModel[] = [];

  constructor(private serv: ShowService, private authServ: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.serv.getTop100().subscribe(x => {
      this.top5 = x;
    });
  }

  logout() {
    this.authServ.logout();
    this.router.navigate(['/login']);
  }

  ratingComponentClick(rating: number) {

  }
}
