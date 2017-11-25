import { Action } from '@ngrx/store';
import { RateUnitType } from '../../rateunittype/rateunittype';

export const SEARCH =           '[RateUnitType] Search';
export const SEARCH_COMPLETE =  '[RateUnitType] Search Complete';
export const SEARCH_FAIL =      '[RateUnitType] Search Fail';
export const LOAD =             '[RateUnitType] Load';
export const SELECT =           '[RateUnitType] Select';

export class SearchAction implements Action {
    readonly type = SEARCH;
}

export class SearchCompleteAction implements Action {
    readonly type = SEARCH_COMPLETE;
    constructor(public payload: RateUnitType[]) { }
}

export class SearchFailAction implements Action {
    readonly type = SEARCH_FAIL;
    constructor(public payload: any) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
    = SearchAction | SearchCompleteAction | SearchFailAction;