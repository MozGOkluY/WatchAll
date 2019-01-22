import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUser from './modules/profile/state';
import * as userActions from './modules/profile/state/user.actions';

@Component({
  selector: 'app-main-shell',
  templateUrl: './main-shell.component.html',
  styleUrls: ['./main-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainShellComponent implements OnInit {

  constructor(private store: Store<fromUser.IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new userActions.LoadUserInfo);
  }

}
