import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userActions from './user.actions';
import { UserInfoService } from 'src/app/shared/services/user-info.service';
import { UserModel } from 'src/app/shared/models/user.model';

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

    @Effect()
    updateUser$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.UpdateUserInfo),
        map((action: userActions.UpdateUserInfo) => action.user),
        switchMap((user: UserModel) =>
            this.userService.updateUserInfo(user).pipe(
                switchMap(u => [
                    new userActions.UpdateUserInfoSuccess(u),
                    new userActions.ShowNotification('The user was updated successfully')
                ]),
                catchError(err => of(new userActions.UpdateUserInfoFail(err)))
            )
        )
    );
}
