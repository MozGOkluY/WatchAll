import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShowModel } from 'src/app/shared/models/show.model';
import { ShowService } from 'src/app/shared/services/show.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopnavComponent implements OnInit {

  top5: ShowModel[] = [];
  searchStr: string;
  lastPattern = '';
  message: string;
  showList = false;

  constructor(private serv: ShowService, private authServ: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authServ.logout();
    this.router.navigate(['/login']);
  }

  findIt() {
    if (!this.searchStr) {
      this.top5 = [];
      return;
    }

    if (this.searchStr.trim() === this.lastPattern.trim()) {
      return;
    }

    this.showList = false;
    this.serv.getFiltered(this.searchStr).subscribe(x => {
      this.top5 = x;
      this.showList = true;
    });
    this.lastPattern = this.searchStr;
  }
}
