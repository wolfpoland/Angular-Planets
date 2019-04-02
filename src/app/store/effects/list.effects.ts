import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ActionTypes,
  LoadPlanets,
  LoadMorePlanets,
  LoadMorePlanetsSuccess,
  LoadMorePlanetsFailure,
  FilterPlanets,
  FilteredPlanets
} from '../actions/list.actions';
import {
  switchMap,
  map,
  catchError,
  tap,
  withLatestFrom,
  filter
} from 'rxjs/operators';
import { ListDataService } from 'src/app/services/list-data.service';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { ListService } from 'src/app/services/list.service';

@Injectable()
export class ListEffects {
  @Effect()
  checkLocalStorageData = this.actions.pipe(
    ofType(ActionTypes.CheckLocalStorageData),
    withLatestFrom(this.store),
    tap(elm => console.log('elm: ', elm)),
    filter(([_, state]) => !state.list.loaded),
    map(() => new LoadPlanets())
  );

  @Effect()
  loadPlanets = this.actions.pipe(
    ofType(ActionTypes.LoadPlanets),
    switchMap(() =>
      this.listDataService.getPlanets().pipe(
        map(listWithMetaData => {
          return {
            type: ActionTypes.LoadPlanetsSuccess,
            payload: listWithMetaData
          };
        }),
        catchError(() => of({ type: ActionTypes.LoadPlanetsFailure }))
      )
    )
  );

  @Effect()
  loadMorePlanets = this.actions.pipe(
    ofType(ActionTypes.LoadMorePlanets),
    withLatestFrom<LoadMorePlanets, AppState>(this.store),
    filter(
      ([action, state]) =>
        !state.list.visitedPages.find(page => page === action.payload)
    ),
    switchMap(([action, state]) => {
      return this.listDataService
        .getNextPlanetPage(action.payload)
        .pipe(
          map(elm => new LoadMorePlanetsSuccess(elm)),
          catchError(err => {
            console.log('errror: ', err);
            return of(new LoadMorePlanetsFailure());
          })
        );
    })
  );

  @Effect()
  filterPlanets = this.actions.pipe(
    ofType(ActionTypes.FilterPlanets),
    withLatestFrom<FilterPlanets, AppState>(this.store),
    map(
      ([filterPlanets, appState]) =>
        new FilteredPlanets(
          this.listService.filterList(
            appState.list.pages,
            filterPlanets.payload
          )
        )
    )
  );

  constructor(
    private actions: Actions,
    private listDataService: ListDataService,
    private store: Store<AppState>,
    private listService: ListService
  ) {}
}
