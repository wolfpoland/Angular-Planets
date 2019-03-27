import { Action } from '@ngrx/store';
import { ListWithMetadata } from 'src/app/resources/interfaces/list-with-metadata.interface';

export enum ActionTypes {
  LoadPlanets = '[List] Load Planets',
  LoadPlanetsSuccess = '[List] Load Planets Success',
  LoadPlanetsFailure = '[List] Load Planets Failure'
}

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

export type Union = LoadPlanets | LoadPlanetsSuccess | LoadPlanetsFailure;
