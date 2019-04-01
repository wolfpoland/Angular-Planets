import { ListState, listReducer, PAGINATION_SIZE } from './list.reducer';
import { createSelector } from '@ngrx/store';

export interface AppState {
  list: ListState;
}

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
