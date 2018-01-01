import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromSearch from './citysearch.reducer';
import * as fromCityList from './citylist.reducer';
import * as fromCity from './city.reducer';
import * as fromRoot from '../../reducers';
import { City } from '../city.model';

export interface CityState {
    search: fromSearch.IState;
    cities: fromCityList.IState;
    city: fromCity.IState;
}

// Adds to state object from app root.
export interface IState extends fromRoot.IState {
    'cities': CityState;
}

export const reducers = {
    search: fromSearch.reducer,
    cities: fromCityList.reducer,
    city: fromCity.reducer
};

export const getCityState = 
    createFeatureSelector<CityState>('cities');

export const getCityEntitiesState = createSelector(
    getCityState,
    (state) => state.cities
);

export const {    
    selectEntities: getCityEntities,    
} = fromCityList.adapter.getSelectors(getCityEntitiesState);

export const getSearchState = createSelector(
    getCityState,
    (state: CityState) => state.search
);

export const getEditState = createSelector(
    getCityState,
    (state: CityState) => state.city
);

// export const getSearchLoading = createSelector(
//     getSearchState,
//     fromSearch.getLoading
// );
export const getSearchLoading = createSelector(
    getCityState,
    (state: CityState) => state.search.loading
);

export const getEditLoading = createSelector(
    getCityState,
    (state: CityState) => state.city.loading
);

export const getSelectedCity = createSelector(
    getCityState,
    (state: CityState) => state.city.selectedCity
)
// export const getSearchIds = createSelector(
//     getSearchState,
//     fromSearch.getIds
// );
export const getSearchIds = createSelector(
    getCityState,
    (state: CityState) => state.search.ids
);

export const getSearchResults = createSelector(
    getCityEntities,
    getSearchIds,
    (entities, ids) => {
        return ids.map(id => entities[id]);
    }
);