import { UserModel } from 'src/app/shared/models/user.model';
/* NgRx */
import { Action } from '@ngrx/store';

// Enum
export enum UserActionTypes {
    LoadUserInfo = '[User] Load profile',
    LoadUserInfoSuccess = '[User] Load profile Success',
    LoadUserInfoFail = '[User] Load profile Fail',
}

// Action Creators
export class LoadUserInfo implements Action {
    readonly type = UserActionTypes.LoadUserInfo;
}

export class LoadUserInfoSuccess implements Action {
    readonly type = UserActionTypes.LoadUserInfoSuccess;

    constructor(public user: UserModel) { }
}

export class LoadUserInfoFail implements Action {
    readonly type = UserActionTypes.LoadUserInfoFail;

    constructor(public payload: string) { }
}

// Union the valid types
export type UserActions = LoadUserInfo
    | LoadUserInfoSuccess
    | LoadUserInfoFail;
