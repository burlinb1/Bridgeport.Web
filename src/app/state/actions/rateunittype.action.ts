import { Action } from '@ngrx/store';
import { RateUnitType } from '../../rateunittype/rateunittype';

export const SEARCH =           '[RateUnitType] Search';
export const SEARCH_COMPLETE =  '[RateUnitType] Search Complete';
export const LOAD =             '[RateUnitType] Load';
export const SELECT =           '[RateUnitType] Select';

export class SearchAction implements Action {
    readonly type = SEARCH;
    constructor(public payload: RateUnitType[]) { }
}

export class SearchCompleteAction implements Action {
    readonly type = SEARCH_COMPLETE;
    constructor(public payload: RateUnitType[]) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
    = SearchAction | SearchCompleteAction;