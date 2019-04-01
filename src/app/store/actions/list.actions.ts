import { Action } from '@ngrx/store';
import { ListWithMetadata } from 'src/app/resources/interfaces/list-with-metadata.interface';
import { Planet } from 'src/app/resources/interfaces/planet.interface';

export enum ActionTypes {
  LoadPlanets = '[List] Load Planets',
  LoadPlanetsSuccess = '[List] Load Planets Success',
  LoadPlanetsFailure = '[List] Load Planets Failure',

  CheckLocalStorageData = '[List] Check Local Storage Data',

  SelectPlanet = '[List] Selected Planet',

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

  constructor(public payload: ListWithMetadata = null) {}
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

  constructor(public payload: { pageIndex: number; num: number } = null) {}
}

export class LoadMorePlanetsSuccess implements Action {
  readonly type = ActionTypes.LoadMorePlanetsSuccess;

  constructor(public payload: ListWithMetadata = null) {}
}

export class LoadMorePlanetsFailure implements Action {
  readonly type = ActionTypes.LoadMorePlanetsFailure;

  constructor(public payload = null) {}
}

/*
  Selected planet to show it's information
*/

export class SelectPlanet implements Action {
  readonly type = ActionTypes.SelectPlanet;

  constructor(public payload: string) {}
}

export type Union =
  | LoadPlanets
  | LoadPlanetsSuccess
  | LoadPlanetsFailure
  | LoadMorePlanets
  | LoadMorePlanetsSuccess
  | LoadMorePlanetsFailure
  | SelectPlanet;
