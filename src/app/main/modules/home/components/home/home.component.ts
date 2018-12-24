import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ShowModel } from 'src/app/shared/models/show.model';
import { ShowService } from 'src/app/shared/services/show.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
  }

}
