import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnChanges {

  @Input() userProfile: UserModel;

  constructor() { }

  ngOnInit() {
    console.log(this.userProfile);
  }

  ngOnChanges() {
    console.log(this.userProfile);
  }

}
