import { City } from '../city.model';
import * as actions from '../city.actions';

export interface IState {
    selectedCity: City;
    loading: boolean;
    error: string;
}

export const initialState: IState = {
    selectedCity: null,
    loading: false,
    error: ''
};

export function reducer(state = initialState, action: actions.Actions) {
    switch(action.type) {
        case actions.GET: {
            return {
                ...state,
                loading: true,
            }
        }

        case actions.GET_COMPLETE: {
            return {
                selectedCity: action.payload,
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

//export const getLoading = (state: IState) => state.loading;