import { UserShowModel } from './user-show-models/user.show.model';

export class UserModel {
    id: string;
    login: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: number;
    phone: string;
    city: string;
    createdDate: Date;
    shows: UserShowModel[];
}
