import { ListState, listReducer, PAGINATION_SIZE } from './list.reducer';
import { createSelector } from '@ngrx/store';
import { ListWithMetadata } from 'src/app/resources/interfaces/list-with-metadata.interface';

export interface AppState {
  list: ListState;
}

export const selectedPlanet = createSelector(
  (state: AppState) => state.list,
  state => state.selectedPlanet
);

export const selectedFilteredPlanets = createSelector(
  (state: AppState) => state.list,
  (state: ListState): ListWithMetadata => {
    if (
      !!state.filteredPagesWithMetadata &&
      !!state.filteredPagesWithMetadata.pages
    ) {
      const lastIndex = state.filteredPlanetsLastIndex;
      const foundPage = state.filteredPagesWithMetadata.pages.find(
        page => page.index === lastIndex
      );
      return !!foundPage
        ? {
            results: foundPage.list,
            metadata: { count: state.filteredPagesWithMetadata.count }
          }
        : null;
    }
  }
);

export const selectMetadata = createSelector(
  (state: AppState) => state.list,
  (state: ListState) => state.metadata
);

export const selectLastIndex = createSelector(
  (state: AppState) => state.list,
  (state: ListState) => state.lastIndex
);

export const selectVisitedPages = createSelector(
  (state: AppState) => state.list,
  (state: ListState) => state.visitedPages
);

export const selectSliceOfList = createSelector(
  (state: AppState) => state.list,
  (state: ListState) => {
    const lastIndex = state.lastIndex;
    const foundPage = state.pages.find(page => page.index === lastIndex);

    return !!foundPage ? foundPage.list : [];
  }
);

export default {
  list: listReducer
};
