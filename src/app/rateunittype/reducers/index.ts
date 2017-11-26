import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCollection from './collection';
import * as fromRoot from '../../reducers';

export interface RateUnitTypeState {
    collection: fromCollection.State;
}
  
export interface State extends fromRoot.State {
    'rateUnitTypes': RateUnitTypeState;
}
  
export const reducers = {
    collection: fromCollection.reducer
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
export const getCollectionState = createSelector(
    getRateUnitTypeState,
    (state: RateUnitTypeState) => state.collection
);

export const getCollectionLoaded = createSelector(
    getCollectionState,
    fromCollection.getLoaded
);

export const getCollectionLoading = createSelector(
    getCollectionState,
    fromCollection.getLoading
);

export const getCollectionRateUnitTypeIds = createSelector(
    getCollectionState,
    fromCollection.getIds
);
  
export const getRateUnitTypeCollection = createSelector(
    getRateUnitTypeState,
    getCollectionRateUnitTypeIds,
    (entities, ids) => {
      return ids.map(id => entities[id]);
    }
);