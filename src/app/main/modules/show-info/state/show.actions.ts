/* NgRx */
import { Action } from '@ngrx/store';
import { ShowModel } from 'src/app/shared/models/show.model';

// Enum
export enum ShowInfoActionTypes {
    LoadShowInfo = '[Show] Load show',
    LoadShowInfoSuccess = '[Show] Load show Success',
    LoadShowInfoFail = '[Show] Load show Fail',
    UpdateShowInfo = '[Show] Update show',
    UpdateShowInfoSuccess = '[Show] Update show Success',
    UpdateShowInfoFail = '[Show] Update show Fail',
    ShowNotification = '[Nofit] Showed notification',
    ClearNotification = '[Nofit] Cleared notification',
}

// Action Creators
export class LoadShowInfo implements Action {
    readonly type = ShowInfoActionTypes.LoadShowInfo;

    constructor(public payload: string) { }
}

export class LoadShowInfoSuccess implements Action {
    readonly type = ShowInfoActionTypes.LoadShowInfoSuccess;

    constructor(public payload: ShowModel) { }
}

export class LoadShowInfoFail implements Action {
    readonly type = ShowInfoActionTypes.LoadShowInfoFail;

    constructor(public payload: string) { }
}

export class UpdateShowInfo implements Action {
    readonly type = ShowInfoActionTypes.UpdateShowInfo;

    constructor(public Show: ShowModel) { }
}

export class UpdateShowInfoSuccess implements Action {
    readonly type = ShowInfoActionTypes.UpdateShowInfoSuccess;

    constructor(public payload: ShowModel) { }
}

export class UpdateShowInfoFail implements Action {
    readonly type = ShowInfoActionTypes.UpdateShowInfoFail;

    constructor(public payload: string) { }
}

export class ShowNotification implements Action {
    readonly type = ShowInfoActionTypes.ShowNotification;

    constructor(public payload: string) { }
}

export class ClearNotification implements Action {
    readonly type = ShowInfoActionTypes.ClearNotification;

    constructor() { }
}

// Union the valid types
export type ShowActions =
    | UpdateShowInfo
    | UpdateShowInfoSuccess
    | UpdateShowInfoFail
    | LoadShowInfo
    | LoadShowInfoSuccess
    | LoadShowInfoFail
    | ClearNotification
    | ShowNotification
    ;
