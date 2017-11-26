import * as rateUnitType from '../actions/rateunittype';

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

export function reducer(state = initialState, action: rateUnitType.Actions): IState {
    switch (action.type) {
        case rateUnitType.SEARCH: {
            const query = action.payload;
  
            if (query === '') {
                return {
                    ids: [],
                    loading: false,
                    error: '',
                    query,
                };
            }
  
            return {
                ...state,
                loading: true,
                error: '',
                query,
            };
      }
  
        case rateUnitType.SEARCH_COMPLETE: {            
            return {
                ids: action.payload.map(item => item.id),
                loading: false,
                error: '',
                query: state.query,
            };
        }
  
        case rateUnitType.SEARCH_ERROR: {
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