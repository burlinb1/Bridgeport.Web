import { Action } from '@ngrx/store';
import { State } from './state.model';

export const GET_ALL = '[State] Get All';
export const GET_ALL_COMPLETE = '[State] Get All Complete';
export const GET_ERROR = '[State] Get Error';

export class GetAll implements Action {
    readonly type = GET_ALL;
    constructor() { }
}

export class GetAllComplete implements Action {
    readonly type = GET_ALL_COMPLETE;
    constructor(public payload: State[]) { }
}

export class GetError implements Action {
    readonly type = GET_ERROR;
    constructor(public payload: any) { }
}

export type Actions
    = GetAll | GetAllComplete | GetError;