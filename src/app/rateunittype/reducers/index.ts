import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRateUnitType from './rateunittype';
import * as fromSearch from './search';
import * as fromRoot from '../../reducers';
import { RateUnitType } from '../rateunittype';

export interface RateUnitTypeState {
    search: fromSearch.IState;
    rateUnitTypes: fromRateUnitType.IState;
}
  
export interface IState extends fromRoot.IState {
    'rateUnitTypes': RateUnitTypeState;
}
  
export const reducers = {
    search: fromSearch.reducer,
    rateUnitTypes: fromRateUnitType.reducer
};

  /**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
*/
export const getRateUnitTypeState = 
  createFeatureSelector<RateUnitTypeState>('rateUnitTypes');

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getRateUnitTypeEntitiesState = createSelector(
    getRateUnitTypeState,
    (state) => state.rateUnitTypes
);

export const {    
    selectEntities: getRateUnitTypeEntities,    
} = fromRateUnitType.adapter.getSelectors(getRateUnitTypeEntitiesState);

export const getSearchState = createSelector(
    getRateUnitTypeState,
    (state: RateUnitTypeState) => state.search
);

export const getLoading = createSelector(
    getSearchState,
    fromSearch.getLoading
);

export const getSearchIds = createSelector(
    getSearchState,
    fromSearch.getIds
);

export const getRateUnitTypeSearchresults = createSelector(
    getRateUnitTypeEntities,
    getSearchIds,
    (entities, ids) => {
        return ids.map(id => entities[id]);
    }
);