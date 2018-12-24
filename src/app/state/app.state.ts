import { IUserState } from '../main/modules/profile/state/user.reducer';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface IAppState {
  user: IUserState;
}
