import { SeriesService } from './../shared/series.service';
import { Component, OnInit } from '@angular/core';
import { SeriesModel } from '../series-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  series: SeriesModel[];

  constructor(private serv: SeriesService ) {
    this.series = this.serv.getAllSeries();
   }

  ngOnInit() {
  }

  ratingComponentClick(rating: number) {

  }
}
