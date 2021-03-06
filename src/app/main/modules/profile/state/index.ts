import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from 'src/app/state/app.state';
import * as fromUser from './user.reducer';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface IAppState extends fromRoot.IAppState {
    user: fromUser.IUserState;
}

// Selector functions
const getUserFeatureState = createFeatureSelector<fromUser.IUserState>('user');

export const getUserInfo = createSelector(
    getUserFeatureState,
    state => state.currentUser
);

export const getNotification = createSelector(
    getUserFeatureState,
    state => state.notification
);
