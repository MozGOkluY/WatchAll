import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userActions from './user.actions';
import { UserInfoService } from 'src/app/shared/services/user-info.service';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions,
                private userService: UserInfoService) {
    }

    @Effect()
    getUserInfo$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.LoadUserInfo),
        switchMap(() =>
            this.userService.getUserInfo().pipe(
                map(response => new userActions.LoadUserInfoSuccess(response)),
                catchError(err => of(new userActions.LoadUserInfoFail(err)))
            )
        )
    );
}
