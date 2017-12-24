import { createSelector, createFeatureSelector } from '@ngrx/store';
//import * as fromRateUnitType from './rateunittype';
import * as fromSearch from './citysearch.reducer';
import * as fromCity from './city.reducer';
import * as fromRoot from '../../reducers';
import { City } from '../models/city';

export interface CityListState {
    search: fromSearch.IState;
    cities: fromCity.IState;
}

export interface IState extends fromRoot.IState {
    'cities': CityListState;
}

export const reducers = {
    search: fromSearch.reducer,
    cities: fromCity.reducer
};

export const getCityState = 
    createFeatureSelector<CityListState>('cities');

export const getRateUnitTypeEntitiesState = createSelector(
    getCityState,
    (state) => state.cities
);

export const {    
    selectEntities: getCityEntities,    
} = fromCity.adapter.getSelectors(getRateUnitTypeEntitiesState);

export const getSearchState = createSelector(
    getCityState,
    (state: CityListState) => state.search
);

export const getLoading = createSelector(
    getSearchState,
    fromSearch.getLoading
);

export const getSearchIds = createSelector(
    getSearchState,
    fromSearch.getIds
);

export const getSearchResults = createSelector(
    getCityEntities,
    getSearchIds,
    (entities, ids) => {
        return ids.map(id => entities[id]);
    }
);