import { Action } from '@ngrx/store';
import { ListWithMetadata } from 'src/app/resources/interfaces/list-with-metadata.interface';
import {  PagesWithMetadata } from 'src/app/resources/interfaces/page-with-metadata.interface';

export enum ActionTypes {
  LoadPlanets = '[List] Load Planets',
  LoadPlanetsSuccess = '[List] Load Planets Success',
  LoadPlanetsFailure = '[List] Load Planets Failure',

  CheckLocalStorageData = '[List] Check Local Storage Data',

  SelectPlanet = '[List] Selected Planet',

  FilterPlanets = '[List] Filter Planets',
  FilteredPlanets = '[List] Filtered Data',
  LoadMoreFilteredPlanets = '[List] Load More Filtered Planets',

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

  constructor(public payload: number) {}
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

/*
  Filter Planets
*/

export class FilterPlanets implements Action {
  readonly type = ActionTypes.FilterPlanets;

  constructor(public payload: string) {}
}

export class FilteredPlanets implements Action {
  readonly type = ActionTypes.FilteredPlanets;

  constructor(public payload: PagesWithMetadata) {}
}


export class LoadMoreFilteredPlanets implements Action {
  readonly type = ActionTypes.LoadMoreFilteredPlanets;

  constructor(public payload: number) {}
}

export type Union =
  | LoadPlanets
  | LoadPlanetsSuccess
  | LoadPlanetsFailure
  | LoadMorePlanets
  | LoadMorePlanetsSuccess
  | LoadMorePlanetsFailure
  | SelectPlanet
  | FilterPlanets
  | FilteredPlanets
  | CheckLocalStorageData
  | LoadMoreFilteredPlanets;
