import { Action } from '@ngrx/store';
import { City } from '../models/city';

export const SEARCH = '[CityList] Search';
export const SEARCH_COMPLETE = '[CityList] Search Complete';
export const SEARCH_ERROR = '[CityList] Search Error';

export class Search implements Action {
    readonly type = SEARCH;
    constructor(public payload: string) { }
}

export class SearchComplete implements Action {
    readonly type = SEARCH_COMPLETE;
    constructor(public payload: City[]) { 
        var results = this.payload;
    }
}

export class SearchError implements Action {
    readonly type = SEARCH_ERROR;
    constructor(public payload: any) { }
}

export type Actions
= Search | SearchComplete | SearchError;