import { Action } from '@ngrx/store';
import { RateUnitType } from '../rateunittype';

export const LOAD = '[Collection] Load';
export const LOAD_SUCCESS = '[Collection] Load Success';
export const LOAD_FAIL = '[Collection] Load Fail';

export class Load implements Action {
    readonly type = LOAD;
}
  
export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;
  
    constructor(public payload: RateUnitType[]) {}
}
  
export class LoadFail implements Action {
    readonly type = LOAD_FAIL;
  
    constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
    = Load | LoadSuccess | LoadFail;