import { SeasonModel } from './season.model';
import { GenreModel } from './genre.model';
import { ChanelModel } from './chanel.model';

export class ShowModel {
    id: string;
    name: string;
    genres: GenreModel[];
    status: number;
    duration: number;
    premierDate: string;
    showUrl: string;
    airDay: number;
    airTime: string;
    rating: number;
    chanel: ChanelModel;
    imdbId: string;
    theTvDbId: string;
    imageOriginal: string;
    imageMedium: string;
    description: string;
    seasons: SeasonModel[];
    aliases: string[];
    actors: string[];
}
