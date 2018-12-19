import { ShowService } from './../shared/show.service';
import { Component, OnInit } from '@angular/core';
import { ShowModel } from '../models/show.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  top5: ShowModel[] = [];

  constructor(private serv: ShowService) {

  }

  ngOnInit() {
    this.serv.getTop100().subscribe(x => {
      this.top5 = x;
    });
  }

  ratingComponentClick(rating: number) {

  }
}
