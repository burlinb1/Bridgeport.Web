import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromState from './state.reducer';
import * as fromRoot from '../../reducers';
import { State } from '../state.model';

export interface StateState {
    states: fromState.IState;
}

// Adds to state object from app root.
export interface IState extends fromRoot.IState {
    'states': StateState;
}

export const reducers = {
    states: fromState.reducer
};

// Gets the 'State' state from store
export const getStateState = 
    createFeatureSelector<StateState>('states');

// export const getCityEntitiesState = createSelector(
//     getStateState,
//     (state) => state.states
// );

export const getAllResults = createSelector(
    getStateState,
    (state: StateState) => state.states.states
);