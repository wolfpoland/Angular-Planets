import { Union, ActionTypes } from '../actions/list.actions';
import { ListMetadata } from 'src/app/resources/interfaces/list-metadata.interface';
import { Page } from 'src/app/resources/interfaces/page.interface';
import { Planet } from 'src/app/resources/interfaces/planet.interface';
import { Utils } from 'src/app/resources/utils';
import { PagesWithMetadata } from 'src/app/resources/interfaces/page-with-metadata.interface';

export const PAGINATION_SIZE = 10;

export interface ListState {
  loading: boolean;
  loaded: boolean;
  pages: Page[];
  filteredPagesWithMetadata: PagesWithMetadata;
  metadata: ListMetadata;
  selectedPlanet: Planet;
  visitedPages: number[];
  lastIndex: number;
  filteredPlanetsLastIndex: number;
}

export const initialState: ListState = {
  pages: [],
  loaded: false,
  loading: false,
  metadata: null,
  selectedPlanet: null,
  visitedPages: [],
  lastIndex: 0,
  filteredPlanetsLastIndex: 0,
  filteredPagesWithMetadata: null
};

export function listReducer(
  state: ListState = initialState,
  action: Union
): ListState {
  switch (action.type) {
    case ActionTypes.CheckLocalStorageData: {
      return {
        ...state,
        filteredPagesWithMetadata: null,
        filteredPlanetsLastIndex: 0
      };
    }

    case ActionTypes.LoadPlanets: {
      return {
        ...state,
        loading: true,
        loaded: false,
        pages: [],
        metadata: null,
        lastIndex: 0,
        filteredPagesWithMetadata: null
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
        lastIndex: action.payload
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

    case ActionTypes.SelectPlanet: {
      return {
        ...state,
        selectedPlanet: Utils.flatPages(state.pages).find(
          planet => planet.id === action.payload
        )
      };
    }

    case ActionTypes.FilterPlanets: {
      return {
        ...state,
        filteredPagesWithMetadata: null,
        filteredPlanetsLastIndex: 1
      };
    }

    case ActionTypes.FilteredPlanets: {
      return {
        ...state,
        filteredPagesWithMetadata: action.payload
      };
    }

    case ActionTypes.LoadMoreFilteredPlanets: {
      return {
        ...state,
        filteredPlanetsLastIndex: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
