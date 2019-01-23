import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ShowModel } from 'src/app/shared/models/show.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent implements OnChanges {

  @Input() currentShow: ShowModel;
  currentUserStatus = 0;
  episodesCount = 0;
  constructor() { }

  ngOnChanges() {
    this.episodesCount = this.currentShow.seasons.map(x => x.episodes.length).reduce(function (sum, current) {
      return sum + current;
    }, 0);
  }

  changeStatus(status: number) {
    this.currentUserStatus = status;
  }

}
