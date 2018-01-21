import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { State } from './state.model';
import * as stateActions from './state.actions';
import { StateService } from './state.service';
import { toPayload } from '@ngrx/effects/src/util';

@Injectable()
export class StateEffects {
    constructor(private actions$: Actions, private stateService: StateService) {
        
    }

    @Effect()
    getAll$: Observable<Action> = this.actions$
        .ofType(stateActions.GET_ALL)
        .map(toPayload)     // ngrx function that maps the action payload
        .switchMap((payload) => {            
            return this.stateService.getStates(payload)
                .map((states: State[]) => new stateActions.GetAllComplete(states))                
        });    
}