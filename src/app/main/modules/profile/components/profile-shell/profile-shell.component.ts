import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../../../state/app.state';
import * as fromUser from '../../state';
import * as userActions from '../../state/user.actions';
import { Observable, Subscription } from 'rxjs';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile-shell',
  templateUrl: './profile-shell.component.html',
  styles: [],
  animations: []
})
export class ProfileShellComponent implements OnInit {

  userProfile$: Observable<UserModel>;
  notifSub: Subscription;
  constructor(private store: Store<fromRoot.IAppState>, private toastr: ToastrService) { }

  ngOnInit() {
    this.store.dispatch(new userActions.LoadUserInfo);

    this.userProfile$ = this.store.pipe(select(fromUser.getUserInfo));
    this.notifSub = this.store.pipe(select(fromUser.getNotification)).subscribe(x => {
      if (x && x.length > 0) {
        this.toastr.success(x, 'Info');
        this.store.dispatch(new userActions.ClearNotification());
      }
    });
  }

  saveUser(userModel: UserModel) {
    this.store.dispatch(new userActions.UpdateUserInfo(userModel));
  }

}
