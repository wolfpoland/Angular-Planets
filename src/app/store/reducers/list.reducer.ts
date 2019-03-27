import { Planet } from 'src/app/resources/interfaces/planet.interface';
import { Union, ActionTypes } from '../actions/list.actions';
import { GetPlanetResponse } from 'src/app/resources/interfaces/get-planets-response.interface';
import { ListMetadata } from 'src/app/resources/interfaces/list-metadata.interface';

export interface ListState {
  loading: boolean;
  loaded: boolean;
  list: Planet[];
  metadata: ListMetadata;
}

export const initialState: ListState = {
  list: null,
  loaded: false,
  loading: false,
  metadata: null
};

export function listReducer(state = initialState, action: Union) {
  switch (action.type) {
    case ActionTypes.LoadPlanets: {
      return {
        ...state,
        loading: true,
        loaded: false,
        list: null
      };
    }

    case ActionTypes.LoadPlanetsSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        list: [...action.payload.results],
        metadata: action.payload.metadata
      };
    }

    case ActionTypes.LoadPlanetsFailure: {
      return {
        ...state,
        loading: false,
        loaded: false,
        list: null
      };
    }

    default: {
      return state;
    }
  }
}
