import { UserSeasonModel } from './user.season.model';

export class UserShowModel {
    showId: string;
    seasons: UserSeasonModel[];
    status: number;
}
