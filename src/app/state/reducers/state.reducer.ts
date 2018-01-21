import { State } from '../state.model';
import * as actions from '../state.actions';

export interface IState {
    states: State[],
    loading: boolean;
    error: string;
}

export const initialState: IState = {
    states: [],
    loading: false,
    error: ''
};

export function reducer(state = initialState, action: actions.Actions) {
    switch(action.type) {
        case actions.GET_ALL: {
            return {
                loading: true,
            }
        }

        case actions.GET_ALL_COMPLETE: {
            return {
                states: action.payload,
                loading: false
            }; 
        }

        case actions.GET_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}