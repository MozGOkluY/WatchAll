import { EpisodeModel } from './episode.model';

export class SeasonModel {
    id: string;
    orderId: number;
    episodeQty: number;
    premiereDate: Date;
    endDate: Date;
    premierDate: string;
    image: string;
    description: string;
    episodes: EpisodeModel[];
    showId: string;
}
