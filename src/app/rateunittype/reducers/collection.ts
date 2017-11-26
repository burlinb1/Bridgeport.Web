import * as collection from '../actions/collection';

export interface State {
    loaded: boolean;
    loading: boolean;
    ids: number[];
};

export const initialState: State = {
    loaded: false,
    loading: false,
    ids: [],
};

export function reducer(state = initialState, action: collection.Actions): State {
    switch (action.type) {
        case collection.LOAD: {
            return {
                ...state,
                loading: true,
            };
        }
  
        case collection.LOAD_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                ids: action.payload.map(rateUnitType => rateUnitType.id),
            };
        }
        
        default: {
            return state;
        }
    }
}
  
export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getIds = (state: State) => state.ids;

// export function reducer(state = initialState, action: collection.Actions): IState {
//     switch (action.type) {

//         case collection.SEARCH_COMPLETE:
//             const results = action.payload;
//             const newResults = results.filter(rateUnitType => !state.entities[rateUnitType.id]);
//             const newResultsIds = results.map(rateUnitType => rateUnitType.id);
//             const newResultsEntities = newResults.reduce((entities: { [id: number]: RateUnitType }, rateUnitType: RateUnitType) => {
//                 return Object.assign(entities, {
//                   [rateUnitType.id]: rateUnitType
//                 });
//               }, {});

//             return {
//                 ids: [ ...state.ids, ...newResultsIds ],
//                 entities: Object.assign({}, state.entities, newResultsEntities),
//                 selectedRateUnitTypeId: state.selectedRateUnitTypeId
//               };

//         default:
//             return state;
//     }
// }

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
// export const getEntities = (state: IState) => state.entities;
// export const getIds = (state: IState) => state.ids;
// export const getSelectedId = (state: IState) => state.selectedRateUnitTypeId;