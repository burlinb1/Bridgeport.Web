import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as cityActions from '../city.actions';

export interface IState {
    ids: number[];
    loading: boolean;
    error: string;
    query: string;
}

const initialState: IState = {
    ids: [],
    loading: false,
    error: '',
    query: '',
};

export function reducer(state = initialState, action: cityActions.Actions): IState {
    switch(action.type) {
        case cityActions.SEARCH: {
            return {
                ...state,
                loading: true,
                error: '',
                query: action.payload,
            };
        }

        case cityActions.SEARCH_COMPLETE: {            
            return {
                ids: action.payload.map(item => item.id),
                loading: false,
                error: '',
                query: state.query,
            };
        }

        case cityActions.SEARCH_ERROR: {
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

//export const getIds = (state: IState) => state.ids;
//export const getLoading = (state: IState) => state.loading;