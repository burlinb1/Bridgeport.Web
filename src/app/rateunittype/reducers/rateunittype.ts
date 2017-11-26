import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { RateUnitType } from '../rateunittype';
import * as rateUnitType from '../actions/rateunittype';
import * as collection from '../actions/collection';

export interface State extends EntityState<RateUnitType> {
    selectedId: number | null;
}

export const adapter: EntityAdapter<RateUnitType> = createEntityAdapter<RateUnitType>({
    selectId: (rateUnitType: RateUnitType) => rateUnitType.id,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedId: null,
});

export function reducer(
    state = initialState,
    action: rateUnitType.Actions | collection.Actions
  ): State {
    switch (action.type) {
        case rateUnitType.SEARCH_COMPLETE:
        case collection.LOAD_SUCCESS: {
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
  
        // case book.LOAD: {
        //     return {
        //         /**
        //          * The addOne function provided by the created adapter
        //          * adds one record to the entity dictionary
        //          * and returns a new state including that records if it doesn't
        //          * exist already. If the collection is to be sorted, the adapter will
        //          * insert the new record into the sorted array.
        //          */
        //         ...adapter.addOne(action.payload, state),
        //         selectedBookId: state.selectedBookId,
        //     };
        // }     
  
        default: {
            return state;
        }
    }
}