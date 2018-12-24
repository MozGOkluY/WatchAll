import { ShowService } from './../shared/show.service';
import { Component, OnInit, OnChanges } from '@angular/core';
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
  searchStr: string;
  lastPattern = '';
  message: string;
  constructor(private serv: ShowService, private authServ: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.authServ.getUserRole();
  }

  logout() {
    this.authServ.logout();
    this.router.navigate(['/login']);
  }

  findIt() {
    if (!this.searchStr || this.searchStr.trim() === this.lastPattern.trim()) {
      return;
    }
    this.serv.getFiltered(this.searchStr).subscribe(x => {
      this.top5 = x.shows;
    });
    this.lastPattern = this.searchStr;
  }
}
