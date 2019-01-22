import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../../../state/app.state';
import * as fromUser from '../../state';
import * as showActions from '../../state/show.actions';
import { Observable, Subscription } from 'rxjs';
import { ShowModel } from 'src/app/shared/models/show.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-info-shell',
  templateUrl: './show-info-shell.component.html',
  styles: [],
  animations: []
})
export class ShowInfoShellComponent implements OnInit {

  currentShow$: Observable<ShowModel>;
  constructor(private store: Store<fromRoot.IAppState>, private toastr: ToastrService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.store.dispatch(new showActions.LoadShowInfo(params.id));
    });
    this.currentShow$ = this.store.pipe(select(fromUser.getShowInfo));

  }
}
