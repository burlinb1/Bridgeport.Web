import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { RateUnitType } from '../rateunittype';
import * as rateUnitType from '../actions/rateunittype';

export interface IState extends EntityState<RateUnitType> {
    selectedId: number | null;
}

export const adapter: EntityAdapter<RateUnitType> = createEntityAdapter<RateUnitType>({
    selectId: (rateUnitType: RateUnitType) => rateUnitType.id,
    sortComparer: false,
});

export const initialState: IState = adapter.getInitialState({
    selectedId: null,
});

export function reducer(
    state = initialState,
    action: rateUnitType.Actions
  ): IState {
    switch (action.type) {
        case rateUnitType.SEARCH_COMPLETE: {
            return {
                /**
                 * The addMany function provided by the created adapter
                 * adds many records to the entity dictionary
                 * and returns a new state including those records. If
                 * the collection is to be sorted, the adapter will
                 * sort each record upon entry into the sorted array.
                 */
                ...adapter.addMany(action.payload, state),
                selectedId: state.selectedId,
            };
        }
  
        default: {
            return state;
        }
    }
}