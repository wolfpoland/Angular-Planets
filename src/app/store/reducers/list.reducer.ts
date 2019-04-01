import { Union, ActionTypes } from '../actions/list.actions';
import { ListMetadata } from 'src/app/resources/interfaces/list-metadata.interface';
import { Page } from 'src/app/resources/interfaces/page.interface';

export const PAGINATION_SIZE = 10;

export interface ListState {
  loading: boolean;
  loaded: boolean;
  pages: Page[];
  metadata: ListMetadata;
  endElement: number;
  visitedPages: number[];
  lastIndex: number;
}

export const initialState: ListState = {
  pages: [],
  loaded: false,
  loading: false,
  metadata: null,
  endElement: 0,
  visitedPages: [],
  lastIndex: 0
};

export function listReducer(
  state: ListState = initialState,
  action: Union
): ListState {
  switch (action.type) {
    case ActionTypes.LoadPlanets: {
      return {
        ...state,
        loading: true,
        loaded: false,
        pages: [],
        metadata: null,
        endElement: PAGINATION_SIZE,
        lastIndex: 0
      };
    }

    case ActionTypes.LoadPlanetsSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        pages: [{ index: 1, list: [...action.payload.results] }],
        visitedPages: [1],
        metadata: action.payload.metadata,
        lastIndex: 1
      };
    }

    case ActionTypes.LoadPlanetsFailure: {
      return {
        ...state,
        loading: false,
        loaded: false,
        pages: [],
        metadata: null
      };
    }

    case ActionTypes.LoadMorePlanets: {
      return {
        ...state,
        loading: true,
        loaded: false,
        lastIndex: action.payload.pageIndex,
        endElement: action.payload.num + PAGINATION_SIZE
      };
    }

    case ActionTypes.LoadMorePlanetsSuccess: {
      return {
        ...state,
        loading: false,
        pages: [
          ...state.pages,
          { index: state.lastIndex, list: action.payload.results }
        ],
        visitedPages: [...state.visitedPages, state.lastIndex],
        metadata: action.payload.metadata
      };
    }

    default: {
      return state;
    }
  }
}
