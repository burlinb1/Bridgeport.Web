import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
  } from '@ngrx/store';
  import { environment } from '../../environments/environment';
  //import { RouterStateUrl } from '../shared/utils';
  //import * as fromRouter from '@ngrx/router-store';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

export interface State {}

export const reducers: ActionReducerMap<State> = {
    //layout: fromLayout.reducer,
    //routerReducer: fromRouter.routerReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
  
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
? [logger, storeFreeze]
: [];
