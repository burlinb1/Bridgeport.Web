import { RateUnitType } from '../../rateunittype/rateunittype';
import * as rateUnitType from '../actions/rateunittype.action';

export interface IState {
    ids: number[];
    entities: { [id: number]: RateUnitType };
    selectedRateUnitTypeId: number | null;
};

export const initialState: IState = {
    ids: [],
    entities: {},
    selectedRateUnitTypeId: null,
};

export function reducer(state = initialState, action: rateUnitType.Actions): IState {
    switch (action.type) {

        case rateUnitType.SEARCH_COMPLETE:
            const results = action.payload;
            const newResults = results.filter(rateUnitType => !state.entities[rateUnitType.id]);
            const newResultsIds = results.map(rateUnitType => rateUnitType.id);
            const newResultsEntities = newResults.reduce((entities: { [id: number]: RateUnitType }, rateUnitType: RateUnitType) => {
                return Object.assign(entities, {
                  [rateUnitType.id]: rateUnitType
                });
              }, {});

            return {
                ids: [ ...state.ids, ...newResultsIds ],
                entities: Object.assign({}, state.entities, newResultsEntities),
                selectedRateUnitTypeId: state.selectedRateUnitTypeId
              };

        default:
            return state;
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
export const getEntities = (state: IState) => state.entities;

export const getIds = (state: IState) => state.ids;

export const getSelectedId = (state: IState) => state.selectedRateUnitTypeId;