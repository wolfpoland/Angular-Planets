import { Action } from '@ngrx/store';
import { ListWithMetadata } from 'src/app/resources/interfaces/list-with-metadata.interface';

export enum ActionTypes {
  LoadPlanets = '[List] Load Planets',
  LoadPlanetsSuccess = '[List] Load Planets Success',
  LoadPlanetsFailure = '[List] Load Planets Failure',

  CheckLocalStorageData = '[List] Check Local Storage Data',

  LoadMorePlanets = '[List] Load More Planets',
  LoadMorePlanetsSuccess = '[List] Load More Planets Success',
  LoadMorePlanetsFailure = '[List] Load More Planets Failure'
}

/*
  Objects responsible for loading planets
*/

export class LoadPlanets implements Action {
  readonly type = ActionTypes.LoadPlanets;

  constructor(public payload = null) {}
}

export class LoadPlanetsSuccess implements Action {
  readonly type = ActionTypes.LoadPlanetsSuccess;

  constructor(public payload: ListWithMetadata) {}
}

export class LoadPlanetsFailure implements Action {
  readonly type = ActionTypes.LoadPlanetsFailure;

  constructor(public payload = null) {}
}

/*
  Object responsible for checking if local storage data is defined
  if not pulling data from api
*/

export class CheckLocalStorageData implements Action {
  readonly type = ActionTypes.CheckLocalStorageData;

  constructor(public payload = null) {}
}

/*
  Objects responsible for loading more planets
*/

export class LoadMorePlanets implements Action {
  readonly type = ActionTypes.LoadMorePlanets;

  constructor(public payload: string) {}
}

export class LoadMorePlanetsSuccess implements Action {
  readonly type = ActionTypes.LoadMorePlanetsSuccess;

  constructor(public payload: ListWithMetadata) {}
}

export class LoadMorePlanetsFailure implements Action {
  readonly type = ActionTypes.LoadMorePlanetsFailure;

  constructor(public payload = null) {}
}

export type Union =
  | LoadPlanets
  | LoadPlanetsSuccess
  | LoadPlanetsFailure
  | LoadMorePlanets
  | LoadMorePlanetsSuccess
  | LoadMorePlanetsFailure;
