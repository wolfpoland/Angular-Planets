import { ListState, listReducer } from './list.reducer';
import { createSelector } from '@ngrx/store';

export interface AppState {
  list: ListState;
}

export const selectList = createSelector((state: AppState) => state.list, state =>  state);
export const selectedPlanet = createSelector((state: AppState) => state.list, state =>  state.selectedPlanet);


export default {
    list: listReducer
};
