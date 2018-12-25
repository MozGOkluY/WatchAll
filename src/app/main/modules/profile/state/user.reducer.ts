import { UserModel } from 'src/app/shared/models/user.model';
import { UserActions, UserActionTypes } from './user.actions';

export interface IUserState {
    currentUser: UserModel;
    notification: string;
}

// Initial state
const initialState: IUserState = {
    currentUser: {
        email: '',
        firstName: '',
        id: '',
        lastName: '',
        login: '',
        password: '',
        createdDate: new Date,
        role: 2,
        phone: '',
        city: ''
    },
    notification: ''
};

export function reducer(state = initialState, action: UserActions): IUserState {

    switch (action.type) {

        // Get User
        case UserActionTypes.LoadUserInfoSuccess:
            return {
                ...state,
                currentUser: action.payload
            };

        case UserActionTypes.LoadUserInfoFail:
            return {
                ...state,
                currentUser: null
            };

        case UserActionTypes.UpdateUserInfoSuccess:
            return {
                ...state,
                currentUser: action.payload
            };

        case UserActionTypes.UpdateUserInfoFail:
            return {
                ...state
            };

        case UserActionTypes.ShowNotification:
            return {
                ...state,
                notification: action.payload
            };

        case UserActionTypes.ClearNotification:
            return {
                ...state,
                notification: ''
            };


        default:
            return state;
    }
}
