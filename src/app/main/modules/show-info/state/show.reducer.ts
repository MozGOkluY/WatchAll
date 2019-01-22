import { ShowModel } from 'src/app/shared/models/show.model';
import { ShowActions, ShowInfoActionTypes } from './show.actions';

export interface IShowState {
    currentShow: ShowModel;
    notification: string;
}

// Initial state
const initialState: IShowState = {
    currentShow: <ShowModel>{
        id: '',
        name: '',
        genres: [],
        status: 0,
        duration: 0,
        premierDate: '',
        showUrl: '',
        airDay: 0,
        airTime: '',
        rating: 0,
        chanel: {},
        imdbId: '',
        theTvDbId: '',
        imageOriginal: '',
        imageMedium: '',
        description: '',
        seasons: [],
        aliases: [],
        actors: []
    },
    notification: ''
};

export function reducer(state = initialState, action: ShowActions): IShowState {

    switch (action.type) {

        case ShowInfoActionTypes.LoadShowInfoSuccess:
            return {
                ...state,
                currentShow: action.payload
            };

        case ShowInfoActionTypes.LoadShowInfoFail:
            return {
                ...state,
                currentShow: null
            };

        case ShowInfoActionTypes.ShowNotification:
            return {
                ...state,
                notification: action.payload
            };

        case ShowInfoActionTypes.ClearNotification:
            return {
                ...state,
                notification: ''
            };


        default:
            return state;
    }
}
