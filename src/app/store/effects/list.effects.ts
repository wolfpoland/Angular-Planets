import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes } from '../actions/list.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ListDataService } from 'src/app/services/list-data.service';
import { of } from 'rxjs';

@Injectable()
export class ListEffects {
  @Effect()
  loadPlanets = this.actions.pipe(
    ofType(ActionTypes.LoadPlanets),
    switchMap(() =>
      this.listDataService.getPlanets().pipe(
        map(planetsWithMetaData => {
            return {
                type: ActionTypes.LoadPlanetsSuccess,
                payload: {
                    metadata: {
                        count: planetsWithMetaData.count,
                        next: planetsWithMetaData.next,
                        previous: planetsWithMetaData.previous
                    },
                    results: planetsWithMetaData.results
                }
              };
        }),
        catchError(() => of({ type: ActionTypes.LoadPlanetsFailure }))
      )
    )
  );

  constructor(
    private actions: Actions,
    private listDataService: ListDataService
  ) {}
}
