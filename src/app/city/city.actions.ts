import { Action } from '@ngrx/store';
import { City } from './city.model';

export const SEARCH = '[CityList] Search';
export const SEARCH_COMPLETE = '[CityList] Search Complete';
export const SEARCH_ERROR = '[CityList] Search Error';
export const GET = '[City] Get';
export const GET_COMPLETE = '[City] Get Complete';
export const GET_ERROR = '[City] Get Error';

export class Search implements Action {
    readonly type = SEARCH;
    constructor(public payload: string) { }
}

export class SearchComplete implements Action {
    readonly type = SEARCH_COMPLETE;
    constructor(public payload: City[]) { }
}

export class SearchError implements Action {
    readonly type = SEARCH_ERROR;
    constructor(public payload: any) { }
}

export class Get implements Action {
    readonly type = GET;
    constructor(public payload: number) { }
}

export class GetComplete implements Action {
    readonly type = GET_COMPLETE;
    constructor(public payload: City) { }
}

export class GetError implements Action {
    readonly type = GET_ERROR;
    constructor(public payload: any) { }
}

export type Actions
    = Search | SearchComplete | SearchError | Get | GetComplete | GetError;