import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../../../state/app.state';
import * as fromShow from '../../state';
import * as fromUser from '../../../profile/state';
import * as userActions from '../../../profile/state/user.actions';
import * as showActions from '../../state/show.actions';
import { Observable } from 'rxjs';
import { ShowModel } from 'src/app/shared/models/show.model';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-show-info-shell',
  templateUrl: './show-info-shell.component.html',
  styles: [],
  animations: []
})

export class ShowInfoShellComponent implements OnInit {

  currentShow$: Observable<ShowModel>;
  userProfile$: Observable<UserModel>;
  constructor(private store: Store<fromRoot.IAppState>, private toastr: ToastrService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.store.dispatch(new showActions.LoadShowInfo(params.id));
    });

    this.userProfile$ = this.store.pipe(select(fromUser.getUserInfo));
    this.currentShow$ = this.store.pipe(select(fromShow.getShowInfo));
  }

  onShowChange(profile: UserModel) {
    this.store.dispatch(new userActions.UpdateUserInfo(profile));
  }
}
