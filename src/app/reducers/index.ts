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

export interface IState {}

export const reducers: ActionReducerMap<IState> = {
    //layout: fromLayout.reducer,
    //routerReducer: fromRouter.routerReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<IState>): ActionReducer<IState> {
    return function(state: IState, action: any): IState {
        console.log('state', state);
        console.log('action', action);
  
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<IState>[] = !environment.production
? [logger, storeFreeze]
: [];
