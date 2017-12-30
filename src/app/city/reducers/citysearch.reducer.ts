import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as cityListActions from '../citylist.actions';

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

export function reducer(state = initialState, action: cityListActions.Actions): IState {
    switch(action.type) {
        case cityListActions.SEARCH: {
            return {
                ...state,
                loading: true,
                error: '',
                query: action.payload,
            };
        }

        case cityListActions.SEARCH_COMPLETE: {            
            return {
                ids: action.payload.map(item => item.id),
                loading: false,
                error: '',
                query: state.query,
            };
        }

        case cityListActions.SEARCH_ERROR: {
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

export const getIds = (state: IState) => state.ids;
export const getLoading = (state: IState) => state.loading;