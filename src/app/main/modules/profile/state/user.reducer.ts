import { UserActions, UserActionTypes } from './user.actions';
import { UserModel } from 'src/app/shared/models/user.model';

export interface IUserState {
    currentUser: UserModel;
}

// Initial state
const initialState: IUserState = {
    currentUser: null
};

export function reducer(state = initialState, action: UserActions): IUserState {

    switch (action.type) {

        // load inits
        case UserActionTypes.LoadUserInfoSuccess:
            return {
                ...state,
                currentUser: action.user
            };

        case UserActionTypes.LoadUserInfoFail:
            return {
                ...state,
                currentUser: null
            };

        default:
            return state;
    }
}
