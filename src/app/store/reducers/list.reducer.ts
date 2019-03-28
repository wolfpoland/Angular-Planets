import { Planet } from 'src/app/resources/interfaces/planet.interface';
import { Union, ActionTypes } from '../actions/list.actions';
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
        list: null,
        metadata: null
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
        list: null,
        metadata: null
      };
    }

    case ActionTypes.LoadMorePlanetsSuccess: {
      return {
        ...state,
        loading: false,
        list: [
          ...state.list,
          ...action.payload.results
        ],
        metadata: action.payload.metadata
      };
    }

    default: {
      return state;
    }
  }
}
