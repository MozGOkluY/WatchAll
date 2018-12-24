import { ShowService } from './../shared/show.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShowModel } from '../models/show.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent implements OnInit {

  constructor(private router: ActivatedRoute, private showService: ShowService) { }

  show: ShowModel;
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.showService.getShowById(params.id).subscribe(x => {
        this.show = x;
      });
      console.log(this.show);
    });
  }

}
