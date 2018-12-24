import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../../../state/app.state';
import * as fromUser from '../../state';
import * as userActions from '../../state/user.actions';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile-shell',
  templateUrl: './profile-shell.component.html',
  styles: []
})
export class ProfileShellComponent implements OnInit {

  userProfile$: Observable<UserModel>;
  constructor(private store: Store<fromRoot.IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new userActions.LoadUserInfo);

    this.userProfile$ = this.store.pipe(select(fromUser.getUserInfo));
  }

}
