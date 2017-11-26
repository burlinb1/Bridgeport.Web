import { Action } from '@ngrx/store';
import { RateUnitType } from '../rateunittype';

export class Search implements Action {
    readonly type = SEARCH;
    constructor(public payload: string) { }
}

export class SearchComplete implements Action {
    readonly type = SEARCH_COMPLETE;
    constructor(public payload: RateUnitType[]) { }
}

export class SearchFail implements Action {
    readonly type = SEARCH_ERROR;
    constructor(public payload: any) { }
}

export const SEARCH = '[RateUnitType] Search';
export const SEARCH_COMPLETE = '[RateUnitType] Search Complete';
export const SEARCH_ERROR = '[RateUnitType] Search Error';

export type Actions
    = Search | SearchComplete | SearchFail;
