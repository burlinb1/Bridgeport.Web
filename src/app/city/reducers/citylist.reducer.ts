import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { City } from '../city.model';
import * as actions from '../city.actions';

export interface IState extends EntityState<City> {
    selectedId: number | null;
}

export const adapter: EntityAdapter<City> = createEntityAdapter<City>({
    selectId: (city: City) => city.id,
    sortComparer: false,
});

export const initialState: IState = adapter.getInitialState({
    selectedId: null,
});

export function reducer(
    state = initialState,
    action: actions.Actions
  ): IState {
    switch (action.type) {
        case actions.SEARCH_COMPLETE: {
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
