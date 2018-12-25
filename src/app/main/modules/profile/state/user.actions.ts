import { UserModel } from 'src/app/shared/models/user.model';
/* NgRx */
import { Action } from '@ngrx/store';

// Enum
export enum UserActionTypes {
    LoadUserInfo = '[User] Load profile',
    LoadUserInfoSuccess = '[User] Load profile Success',
    LoadUserInfoFail = '[User] Load profile Fail',
    UpdateUserInfo = '[User] Update profile',
    UpdateUserInfoSuccess = '[User] Update profile Success',
    UpdateUserInfoFail = '[User] Update profile Fail',
    ShowNotification = '[Nofit] Showed notification',
    ClearNotification = '[Nofit] Cleared notification',
}

// Action Creators
export class LoadUserInfo implements Action {
    readonly type = UserActionTypes.LoadUserInfo;
}

export class LoadUserInfoSuccess implements Action {
    readonly type = UserActionTypes.LoadUserInfoSuccess;

    constructor(public payload: UserModel) { }
}

export class LoadUserInfoFail implements Action {
    readonly type = UserActionTypes.LoadUserInfoFail;

    constructor(public payload: string) { }
}

export class UpdateUserInfo implements Action {
    readonly type = UserActionTypes.UpdateUserInfo;

    constructor(public user: UserModel) { }
}

export class UpdateUserInfoSuccess implements Action {
    readonly type = UserActionTypes.UpdateUserInfoSuccess;

    constructor(public payload: UserModel) { }
}

export class UpdateUserInfoFail implements Action {
    readonly type = UserActionTypes.UpdateUserInfoFail;

    constructor(public payload: string) { }
}

export class ShowNotification implements Action {
    readonly type = UserActionTypes.ShowNotification;

    constructor(public payload: string) { }
}

export class ClearNotification implements Action {
    readonly type = UserActionTypes.ClearNotification;

    constructor() { }
}

// Union the valid types
export type UserActions =
    | UpdateUserInfo
    | UpdateUserInfoSuccess
    | UpdateUserInfoFail
    | LoadUserInfo
    | LoadUserInfoSuccess
    | LoadUserInfoFail
    | ClearNotification
    | ShowNotification
    ;
