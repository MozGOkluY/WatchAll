import { UserShowModel } from './../../../../../shared/models/user-show-models/user.show.model';
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ShowModel } from 'src/app/shared/models/show.model';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserSeasonModel } from 'src/app/shared/models/user-show-models/user.season.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent implements OnChanges {

  @Input() currentShow: ShowModel;
  @Input() userProfile: UserModel;

  @Output() showChange: EventEmitter<UserModel> = new EventEmitter<UserModel>();

  currentUserStatus = 4;
  episodesCount = 0;
  constructor() { }

  ngOnChanges() {
    if (this.currentShow) {
      this.episodesCount = this.currentShow.seasons.map(x => x.episodes.length).reduce(function (sum, current) {
        return sum + current;
      }, 0);
    }

    if (this.userProfile) {
      const show = this.userProfile.shows.find(x => x.showId === this.currentShow.id);
      if (show) {
        this.currentUserStatus = show.status;
      }
    }
  }

  changeStatus(status: number) {
    this.currentUserStatus = status;

    const userProfile = {
      ...this.userProfile,
    };

    const existingUserShow = userProfile.shows.find(x => x.showId === this.currentShow.id);

    if (!existingUserShow) {
      const newUserShow = <UserShowModel>{
        showId: this.currentShow.id,
        seasons: [],
        status: this.currentUserStatus
      };
      userProfile.shows.push(newUserShow);
    } else {
      existingUserShow.status = this.currentUserStatus;
    }

    this.showChange.emit(userProfile);
  }

  episodeToggle(episodeId: string, state: boolean) {

  }
}
