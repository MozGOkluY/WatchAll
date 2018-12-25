import { ShowModel } from 'src/app/shared/models/show.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as showActions from './show.actions';
import { ShowService } from 'src/app/shared/services/show.service';

@Injectable()
export class ShowEffects {

    constructor(private actions$: Actions,
        private showService: ShowService) {
    }

    @Effect()
    getShowById$: Observable<Action> = this.actions$.pipe(
        ofType(showActions.ShowInfoActionTypes.LoadShowInfo),
        map((action: showActions.LoadShowInfo) => action.payload),
        switchMap((id: string) =>
            this.showService.getShowById(id).pipe(
                map(u => new showActions.LoadShowInfoSuccess(u)),
                catchError(err => of(new showActions.LoadShowInfoFail(err)))
            )
        )
    );
}
