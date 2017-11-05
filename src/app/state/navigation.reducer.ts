import { Action } from '@ngrx/store';
import { NavigationAction } from './navigation.action';

export interface INavigationState {
    result: string
}

export function navigationReducer(state: INavigationState = { result: ''}, action: Action): INavigationState {
    switch(action.type) {
        case NavigationAction.NAV_REQUESTED:
            return Object.assign({}, state, state.result);
        default:
            return state;
    }
}